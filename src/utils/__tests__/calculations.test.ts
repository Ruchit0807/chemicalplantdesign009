import { calculateTankDesign, validateTankInput, getDefaultValues, CONSTANTS } from '../calculations';
import { TankInput } from '../../types';

describe('Tank Design Calculations', () => {
  const mockInput: TankInput = {
    chemical: 'aniline',
    Vd: 14.634, // m³/day
    N: 7,       // days
    n: 1,       // tanks
    geometryMode: 'H=1.5D',
    safetyHeight: true,
    rho: 1021.6, // kg/m³
    S: 200e6,    // Pa (SS)
    E: 0.85,
    material: 'SS',
    atm: 101325, // Pa
    g: 9.81,     // m/s²
    corrosion: 0
  };

  describe('calculateTankDesign', () => {
    it('should calculate tank dimensions correctly for H=1.5D mode', () => {
      const result = calculateTankDesign(mockInput);
      
      // Verify volume calculation
      expect(result.Vr).toBeCloseTo(102.438, 2); // 14.634 * 7 / 1
      
      // Verify geometry (H = 1.5D)
      expect(result.H).toBeCloseTo(result.D * 1.5, 3);
      
      // Verify safety height
      expect(result.H_safety).toBeCloseTo(result.H * 1.12, 3);
    });

    it('should apply safety factors correctly', () => {
      const result = calculateTankDesign(mockInput);
      
      // Height safety factor (12%)
      expect(result.H_safety).toBeCloseTo(result.H * CONSTANTS.SAFETY_FACTOR_HEIGHT, 3);
      
      // Pressure safety factor (12%)
      expect(result.Pa_design).toBeCloseTo(result.Pa * CONSTANTS.SAFETY_FACTOR_PRESSURE, 0);
    });

    it('should calculate pressures correctly', () => {
      const result = calculateTankDesign(mockInput);
      
      // Hydrostatic pressure
      const expectedPg = mockInput.rho * mockInput.g * result.H_safety;
      expect(result.Pg).toBeCloseTo(expectedPg, 0);
      
      // Absolute pressure
      expect(result.Pa).toBeCloseTo(result.Pg + mockInput.atm, 0);
      
      // Design pressure
      expect(result.Pa_design).toBeCloseTo(result.Pa * 1.12, 0);
    });

    it('should calculate thicknesses using thin-wall theory', () => {
      const result = calculateTankDesign(mockInput);
      
      // Verify thin-wall assumption is valid
      expect(2 * mockInput.S * mockInput.E).toBeGreaterThan(result.Pa_design);
      
      // Shell thickness formula
      const expectedShellThickness = (result.Pa_design * result.D) / (2 * mockInput.S * mockInput.E - result.Pa_design);
      expect(result.t_shell).toBeCloseTo(expectedShellThickness * 1000, 2);
      
      // Roof thickness formula
      const expectedRoofThickness = (result.Pa_design * result.D) / (4 * mockInput.S * mockInput.E - result.Pa_design);
      expect(result.t_roof).toBeCloseTo(expectedRoofThickness * 1000, 2);
    });

    it('should handle manual geometry mode', () => {
      const manualInput: TankInput = {
        ...mockInput,
        geometryMode: 'manual',
        D: 2.65,
        H: 3.975
      };
      
      const result = calculateTankDesign(manualInput);
      
      expect(result.D).toBe(2.65);
      expect(result.H).toBe(3.975);
    });

    it('should include corrosion allowance in thicknesses', () => {
      const inputWithCorrosion: TankInput = {
        ...mockInput,
        corrosion: 2.0 // mm
      };
      
      const result = calculateTankDesign(inputWithCorrosion);
      
      // Thicknesses should include corrosion allowance
      expect(result.t_shell).toBeGreaterThan(0);
      expect(result.t_roof).toBeGreaterThan(0);
      expect(result.t_base).toBeGreaterThan(2.0);
    });
  });

  describe('validateTankInput', () => {
    it('should validate correct input', () => {
      const validation = validateTankInput(mockInput);
      expect(validation.isValid).toBe(true);
      expect(validation.errors).toHaveLength(0);
    });

    it('should catch invalid daily volume', () => {
      const invalidInput = { ...mockInput, Vd: -1 };
      const validation = validateTankInput(invalidInput);
      expect(validation.isValid).toBe(false);
      expect(validation.errors).toContain('Daily volume must be positive');
    });

    it('should catch invalid storage days', () => {
      const invalidInput = { ...mockInput, N: 0 };
      const validation = validateTankInput(invalidInput);
      expect(validation.isValid).toBe(false);
      expect(validation.errors).toContain('Storage days must be positive');
    });

    it('should catch invalid number of tanks', () => {
      const invalidInput = { ...mockInput, n: -1 };
      const validation = validateTankInput(invalidInput);
      expect(validation.isValid).toBe(false);
      expect(validation.errors).toContain('Number of tanks must be positive');
    });

    it('should validate manual geometry constraints', () => {
      const manualInput: TankInput = {
        ...mockInput,
        geometryMode: 'manual',
        D: 1.0,
        H: 0.3 // H/D = 0.3 < 0.5 (invalid)
      };
      
      const validation = validateTankInput(manualInput);
      expect(validation.isValid).toBe(false);
      expect(validation.errors).toContain('H/D ratio must be between 0.5 and 3');
    });

    it('should validate density bounds', () => {
      const invalidInput = { ...mockInput, rho: 50 }; // Too low
      const validation = validateTankInput(invalidInput);
      expect(validation.isValid).toBe(false);
      expect(validation.errors).toContain('Density must be between 100 and 2000 kg/m³');
    });
  });

  describe('getDefaultValues', () => {
    it('should return correct defaults for aniline', () => {
      const defaults = getDefaultValues('aniline');
      
      expect(defaults.chemical).toBe('aniline');
      expect(defaults.material).toBe('SS');
      expect(defaults.rho).toBe(1021.6);
      expect(defaults.S).toBe(200e6);
      expect(defaults.E).toBe(0.85);
    });

    it('should return correct defaults for acetic_anhydride', () => {
      const defaults = getDefaultValues('acetic_anhydride');
      
      expect(defaults.chemical).toBe('acetic_anhydride');
      expect(defaults.material).toBe('HDPE');
      expect(defaults.rho).toBe(1080.7);
      expect(defaults.S).toBe(23e6);
      expect(defaults.E).toBe(0.85);
    });
  });

  describe('Constants', () => {
    it('should have correct physical constants', () => {
      expect(CONSTANTS.ATMOSPHERIC_PRESSURE).toBe(101325);
      expect(CONSTANTS.GRAVITY).toBe(9.81);
      expect(CONSTANTS.PI).toBe(Math.PI);
      expect(CONSTANTS.SAFETY_FACTOR_HEIGHT).toBe(1.12);
      expect(CONSTANTS.SAFETY_FACTOR_PRESSURE).toBe(1.12);
      expect(CONSTANTS.WELD_EFFICIENCY).toBe(0.85);
    });

    it('should have correct material properties', () => {
      expect(CONSTANTS.STAINLESS_STEEL_STRESS).toBe(200e6);
      expect(CONSTANTS.HDPE_STRESS).toBe(23e6);
    });
  });
});
