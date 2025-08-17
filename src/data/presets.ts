import { PresetTank, ChemicalKey } from '../types';

export const PRESET_TANKS: PresetTank[] = [
  {
    id: "A",
    name: "Aniline (Reactant)",
    chemical: "aniline",
    Vd: 14.634, // m³/day
    description: "Primary reactant storage tank - aromatic amine for acetanilide production",
    expectedOutput: {
      H: 3.975, // m
      D: 2.65,  // m
      t_shell: 1.232, // mm
      t_roof: 0.6,    // mm
      t_base: 24.71,  // mm
      materialSuggested: "SS"
    }
  },
  {
    id: "B",
    name: "Acetic Anhydride (Reactant)",
    chemical: "acetic_anhydride",
    Vd: 3.79, // m³/day
    description: "Primary reactant storage tank - acylating agent for acetanilide production",
    expectedOutput: {
      H: 2.533, // m
      D: 1.689, // m
      t_shell: 6.225, // mm
      t_roof: 3.107,  // mm
      t_base: 24.30,  // mm
      materialSuggested: "HDPE"
    }
  },
  {
    id: "C",
    name: "Unreacted Aniline",
    chemical: "unreacted_aniline",
    Vd: 1.17, // m³/day
    description: "Recycling tank for unreacted aniline from the process",
    expectedOutput: {
      H: 1.496, // m
      D: 0.997, // m
      t_shell: 0.382, // mm
      t_roof: 0.191,  // mm
      t_base: 2.416,  // mm
      materialSuggested: "SS"
    }
  },
  {
    id: "D",
    name: "Unreacted Acetic Anhydride",
    chemical: "unreacted_acetic_anhydride",
    Vd: 1.21, // m³/day
    description: "Recycling tank for unreacted acetic anhydride from the process",
    expectedOutput: {
      H: 1.515, // m
      D: 1.01,  // m
      t_shell: 3.407, // mm
      t_roof: 1.7,    // mm
      t_base: 6.723,  // mm
      materialSuggested: "HDPE"
    }
  },
  {
    id: "E",
    name: "Acetanilide (Product)",
    chemical: "acetanilide",
    Vd: 16.406, // m³/day
    description: "Main product storage tank - N-phenylacetamide",
    expectedOutput: {
      H: 4.131, // m
      D: 2.754, // m
      t_shell: 11.94, // mm
      t_roof: 6.0,    // mm
      t_base: 87.61,  // mm
      materialSuggested: "HDPE"
    }
  },
  {
    id: "F",
    name: "Acetic Acid (Product)",
    chemical: "acetic_acid",
    Vd: 8.462, // m³/day
    description: "Co-product storage tank - acetic acid from the reaction",
    expectedOutput: {
      H: 3.312, // m
      D: 2.208, // m
      t_shell: 8.6,   // mm
      t_roof: 4.3,    // mm
      t_base: 46.8,   // mm
      materialSuggested: "HDPE"
    }
  }
];

// Function to get preset by ID
export function getPresetById(id: string): PresetTank | undefined {
  return PRESET_TANKS.find(preset => preset.id === id);
}

// Function to get all presets for a specific chemical
export function getPresetsByChemical(chemical: ChemicalKey): PresetTank[] {
  return PRESET_TANKS.filter(preset => preset.chemical === chemical);
}

// Function to get preset input values for calculation
export function getPresetInputValues(preset: PresetTank) {
  return {
    chemical: preset.chemical,
    Vd: preset.Vd,
    N: 7, // Default storage days
    n: 1, // Default number of tanks
    geometryMode: "H=1.5D" as const,
    safetyHeight: true,
    rho: 0, // Will be filled by chemical data
    S: 0,   // Will be filled by material defaults
    E: 0.85,
    material: preset.expectedOutput.materialSuggested as "SS" | "HDPE",
    atm: 101325,
    g: 9.81,
    corrosion: 0
  };
}
