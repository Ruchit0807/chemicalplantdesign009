import React from 'react';
import { PresetTank } from '../types';
import { CHEMICAL_DATA } from '../utils/calculations';

interface PresetSelectorProps {
  presets: PresetTank[];
  selectedPreset: string | null;
  onPresetSelect: (presetId: string) => void;
}

const PresetSelector: React.FC<PresetSelectorProps> = ({ 
  presets, 
  selectedPreset, 
  onPresetSelect 
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        Preset Tank Designs (Project Examples)
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Click on any preset to load the design parameters and see the calculations. 
        These match the project specifications exactly.
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {presets.map((preset) => {
          const chemicalInfo = CHEMICAL_DATA[preset.chemical];
          const isSelected = selectedPreset === preset.id;
          
          return (
            <button
              key={preset.id}
              onClick={() => onPresetSelect(preset.id)}
              className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                isSelected
                  ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                  : 'border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <div 
                    className="w-4 h-4 rounded-full mr-2"
                    style={{ backgroundColor: chemicalInfo.color }}
                  />
                  <span className="font-semibold text-gray-900 dark:text-white">
                    Tank {preset.id}
                  </span>
                </div>
                {isSelected && (
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                )}
              </div>
              
              <h3 className="font-medium text-gray-900 dark:text-white mb-1">
                {preset.name}
              </h3>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                {preset.description}
              </p>
              
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Daily Volume:</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {preset.Vd} m³/day
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Material:</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {preset.expectedOutput.materialSuggested}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Expected H:</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {preset.expectedOutput.H} m
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Expected D:</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {preset.expectedOutput.D} m
                  </span>
                </div>
              </div>
              
              <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-600">
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="text-center">
                    <div className="text-gray-500 dark:text-gray-400">t_shell</div>
                    <div className="font-medium text-gray-900 dark:text-white">
                      {preset.expectedOutput.t_shell} mm
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-500 dark:text-gray-400">t_roof</div>
                    <div className="font-medium text-gray-900 dark:text-white">
                      {preset.expectedOutput.t_roof} mm
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-500 dark:text-gray-400">t_base</div>
                    <div className="font-medium text-gray-900 dark:text-white">
                      {preset.expectedOutput.t_base} mm
                    </div>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
      
      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
        <div className="text-sm text-blue-800 dark:text-blue-200">
          <p className="font-medium mb-1">About These Presets:</p>
          <p>
            These six tank designs (A-F) represent the complete storage system for the 
            Acetanilide production plant. They include reactants (Aniline, Acetic Anhydride), 
            recycling streams (Unreacted Aniline, Unreacted Acetic Anhydride), and products 
            (Acetanilide, Acetic Acid). Each preset loads the exact parameters used in the 
            project calculations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PresetSelector;
