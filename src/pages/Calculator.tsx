import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { tankInputSchema, TankInputSchema } from '../utils/validation';
import { calculateTankDesign, getDefaultValues, CHEMICAL_DATA } from '../utils/calculations';
import { PRESET_TANKS } from '../data/presets';
import { TankOutput, CalculationHistory } from '../types';
import TankInputForm from '../components/TankInputForm';
import TankResults from '../components/TankResults';
import PresetSelector from '../components/PresetSelector';
import { 
  CalculatorIcon, 
  ExclamationTriangleIcon,
  CheckCircleIcon 
} from '@heroicons/react/24/outline';

interface CalculatorProps {
  onCalculationComplete: (calculation: CalculationHistory) => void;
  calculationHistory: CalculationHistory[];
}

const Calculator: React.FC<CalculatorProps> = ({ onCalculationComplete, calculationHistory }) => {
  const [currentResult, setCurrentResult] = useState<TankOutput | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedPreset, setSelectedPreset] = useState<string | null>(null);

  const form = useForm<TankInputSchema>({
    resolver: zodResolver(tankInputSchema),
    defaultValues: getDefaultValues('aniline')
  });

  // Watch form values for real-time updates
  const watchedValues = form.watch();

  // Auto-calculate when form values change
  useEffect(() => {
    if (form.formState.isValid && Object.keys(watchedValues).length > 0) {
      const timeoutId = setTimeout(() => {
        handleCalculate();
      }, 500); // Debounce calculations

      return () => clearTimeout(timeoutId);
    }
  }, [watchedValues]);

  const handleCalculate = async () => {
    if (!form.formState.isValid) return;

    setIsCalculating(true);
    setError(null);

    try {
      const formData = form.getValues();
      const result = calculateTankDesign(formData);
      setCurrentResult(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Calculation failed');
      setCurrentResult(null);
    } finally {
      setIsCalculating(false);
    }
  };

  const handlePresetSelect = (presetId: string) => {
    const preset = PRESET_TANKS.find(p => p.id === presetId);
    if (!preset) return;

    setSelectedPreset(presetId);
    
    // Fill form with preset values
    const defaultValues = getDefaultValues(preset.chemical);
    const presetInputs = {
      ...defaultValues,
      Vd: preset.Vd,
      N: 7, // Default storage days
      n: 1, // Default number of tanks
      material: preset.expectedOutput.materialSuggested as "SS" | "HDPE"
    };

    // Reset form and set values
    form.reset(presetInputs);
    
    // Trigger calculation
    setTimeout(() => {
      handleCalculate();
    }, 100);
  };

  const handleSaveCalculation = () => {
    if (!currentResult) return;

    const formData = form.getValues();
    const calculation: CalculationHistory = {
      id: Date.now().toString(),
      timestamp: new Date(),
      input: formData,
      output: currentResult,
      name: `${CHEMICAL_DATA[formData.chemical].name} Tank - ${formData.Vd} m³/day`
    };

    onCalculationComplete(calculation);
  };

  const handleReset = () => {
    form.reset(getDefaultValues('aniline'));
    setCurrentResult(null);
    setError(null);
    setSelectedPreset(null);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Storage Tank Design Calculator
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Input your storage requirements and get instant calculations for tank dimensions, 
          thickness, and material specifications. All calculations follow engineering standards 
          with built-in safety factors.
        </p>
      </div>

      {/* Preset Selector */}
      <PresetSelector
        presets={PRESET_TANKS}
        selectedPreset={selectedPreset}
        onPresetSelect={handlePresetSelect}
      />

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Form */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <CalculatorIcon className="w-5 h-5 mr-2 text-primary-600" />
              Design Parameters
            </h2>
            
            <TankInputForm 
              form={form} 
              chemicalData={CHEMICAL_DATA}
            />

            <div className="flex gap-4 mt-6">
              <button
                type="button"
                onClick={handleCalculate}
                disabled={!form.formState.isValid || isCalculating}
                className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isCalculating ? 'Calculating...' : 'Calculate'}
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="btn-secondary flex-1"
              >
                Reset
              </button>
            </div>

            {/* Form Validation Status */}
            {form.formState.errors && Object.keys(form.formState.errors).length > 0 && (
              <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                <div className="flex items-center text-red-800 dark:text-red-200">
                  <ExclamationTriangleIcon className="w-5 h-5 mr-2" />
                  <span className="font-medium">Please fix the following errors:</span>
                </div>
                <ul className="mt-2 text-sm text-red-700 dark:text-red-300 space-y-1">
                  {Object.entries(form.formState.errors).map(([field, error]) => (
                    <li key={field}>• {error?.message}</li>
                  ))}
                </ul>
              </div>
            )}

            {form.formState.isValid && (
              <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                <div className="flex items-center text-green-800 dark:text-green-200">
                  <CheckCircleIcon className="w-5 h-5 mr-2" />
                  <span className="font-medium">Form is valid - calculations will update automatically</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
              <div className="flex items-center text-red-800 dark:text-red-200">
                <ExclamationTriangleIcon className="w-5 h-5 mr-2" />
                <span className="font-medium">Calculation Error</span>
              </div>
              <p className="mt-2 text-red-700 dark:text-red-300">{error}</p>
            </div>
          )}

          {currentResult && (
            <div className="space-y-6">
              <TankResults 
                result={currentResult}
                input={form.getValues()}
                onSave={handleSaveCalculation}
              />
            </div>
          )}

          {/* Calculation History Preview */}
          {calculationHistory.length > 0 && (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Recent Calculations
              </h3>
              <div className="space-y-2">
                {calculationHistory.slice(0, 3).map((calc) => (
                  <div 
                    key={calc.id}
                    className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg text-sm"
                  >
                    <div className="font-medium text-gray-900 dark:text-white">
                      {calc.name}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                      {calc.timestamp.toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
