import { z } from 'zod';

export const tankInputSchema = z.object({
  chemical: z.enum([
    "aniline",
    "acetic_anhydride", 
    "unreacted_aniline",
    "unreacted_acetic_anhydride",
    "acetanilide",
    "acetic_acid"
  ]),
  Vd: z.number()
    .min(0.1, "Daily volume must be at least 0.1 m³/day")
    .max(1000, "Daily volume cannot exceed 1000 m³/day"),
  N: z.number()
    .min(1, "Storage days must be at least 1 day")
    .max(365, "Storage days cannot exceed 365 days"),
  n: z.number()
    .min(1, "Number of tanks must be at least 1")
    .max(100, "Number of tanks cannot exceed 100"),
  geometryMode: z.enum(["H=1.5D", "manual"]),
  D: z.number().optional(),
  H: z.number().optional(),
  safetyHeight: z.boolean(),
  rho: z.number()
    .min(100, "Density must be at least 100 kg/m³")
    .max(2000, "Density cannot exceed 2000 kg/m³"),
  S: z.number()
    .min(1e6, "Allowable stress must be at least 1 MPa")
    .max(1000e6, "Allowable stress cannot exceed 1000 MPa"),
  E: z.number()
    .min(0.1, "Weld efficiency must be at least 0.1")
    .max(1.0, "Weld efficiency cannot exceed 1.0"),
  material: z.enum(["SS", "HDPE"]),
  atm: z.number()
    .min(80000, "Atmospheric pressure must be at least 80 kPa")
    .max(120000, "Atmospheric pressure cannot exceed 120 kPa"),
  g: z.number()
    .min(9.0, "Gravity must be at least 9.0 m/s²")
    .max(10.0, "Gravity cannot exceed 10.0 m/s²"),
  corrosion: z.number()
    .min(0, "Corrosion allowance cannot be negative")
    .max(50, "Corrosion allowance cannot exceed 50 mm")
}).refine((data) => {
  // Custom validation for manual geometry mode
  if (data.geometryMode === "manual") {
    if (!data.D || !data.H) {
      return false;
    }
    if (data.D <= 0 || data.H <= 0) {
      return false;
    }
    const aspectRatio = data.H / data.D;
    if (aspectRatio < 0.5 || aspectRatio > 3) {
      return false;
    }
  }
  return true;
}, {
  message: "Manual dimensions must be provided and H/D ratio must be between 0.5 and 3",
  path: ["geometryMode"]
});

export type TankInputSchema = z.infer<typeof tankInputSchema>;

// Helper function to get validation errors
export function getValidationErrors(data: any): string[] {
  try {
    tankInputSchema.parse(data);
    return [];
  } catch (error) {
    if (error instanceof z.ZodError) {
      return error.errors.map(err => `${err.path.join('.')}: ${err.message}`);
    }
    return ["Validation error occurred"];
  }
}

// Helper function to validate specific field
export function validateField(field: keyof TankInputSchema, value: any): string | null {
  try {
    // Create a partial schema for the specific field
    const fieldSchema = z.object({ [field]: z.any() });
    fieldSchema.parse({ [field]: value });
    return null;
  } catch (error) {
    if (error instanceof z.ZodError) {
      return error.errors[0]?.message || null;
    }
    return "Invalid value";
  }
}
