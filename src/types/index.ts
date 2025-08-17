export type ChemicalKey = 
  | "aniline" 
  | "acetic_anhydride" 
  | "unreacted_aniline" 
  | "unreacted_acetic_anhydride" 
  | "acetanilide" 
  | "acetic_acid";

export interface ChemicalData {
  key: ChemicalKey;
  name: string;
  density: number; // kg/m³
  defaultMaterial: "SS" | "HDPE";
  description: string;
  color: string;
}

export interface TankInput {
  chemical: ChemicalKey;
  Vd: number; // m³/day
  N: number;  // days
  n: number;  // tanks in parallel
  geometryMode: "H=1.5D" | "manual";
  D?: number; // m
  H?: number; // m
  safetyHeight: boolean; // +12%
  rho: number; // kg/m³
  S: number;  // Pa (e.g., 200e6 for SS, 23e6 for HDPE)
  E: number;  // 0..1
  material: "SS" | "HDPE";
  atm: number; // Pa
  g: number;   // m/s²
  corrosion: number; // mm
}

export interface TankOutput {
  Vr: number; // m³
  D: number; 
  H: number; 
  H_safety: number;
  Pg: number; 
  Pa: number; 
  Pa_design: number; // Pa
  t_shell: number; 
  t_roof: number; 
  t_base: number; // mm
  areaTop: number; // m²
  materialSuggested: string;
  warnings: string[];
  derivation: {
    volume: string;
    geometry: string;
    pressure: string;
    thickness: string;
  };
}

export interface PresetTank {
  id: string;
  name: string;
  chemical: ChemicalKey;
  Vd: number;
  expectedOutput: Partial<TankOutput>;
  description: string;
}

export interface CalculationHistory {
  id: string;
  timestamp: Date;
  input: TankInput;
  output: TankOutput;
  name: string;
}

export interface ExportOptions {
  format: 'pdf' | 'csv';
  includeDerivations: boolean;
  includeCharts: boolean;
}
