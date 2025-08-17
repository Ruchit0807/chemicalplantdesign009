import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { TankInputSchema } from '../utils/validation';
import { CHEMICAL_DATA } from '../utils/calculations';
import { 
  InformationCircleIcon
} from '@heroicons/react/24/outline';

interface TankInputFormProps {
  form: UseFormReturn<TankInputSchema>;
  chemicalData: typeof CHEMICAL_DATA;
}

const TankInputForm: React.FC<TankInputFormProps> = ({ form, chemicalData }) => {
  const { register, watch, setValue, formState: { errors } } = form;
  const watchedChemical = watch('chemical');
  const watchedGeometryMode = watch('geometryMode');

  // Update material when chemical changes
  React.useEffect(() => {
    if (watchedChemical) {
      const chemicalInfo = chemicalData[watchedChemical];
      setValue('material', chemicalInfo.defaultMaterial);
      setValue('rho', chemicalInfo.density);
      setValue('S', chemicalInfo.defaultMaterial === 'SS' ? 200e6 : 23e6);
    }
  }, [watchedChemical, setValue, chemicalData]);

  return (
    <div className="space-y-6">
      {/* Chemical Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Chemical
        </label>
        <select
          {...register('chemical')}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        >
          {Object.entries(chemicalData).map(([key, chemical]) => (
            <option key={key} value={key}>
              {chemical.name}
            </option>
          ))}
        </select>
        {watchedChemical && (
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            {chemicalData[watchedChemical].description}
          </p>
        )}
        {errors.chemical && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.chemical.message}</p>
        )}
      </div>

      {/* Storage Requirements */}
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Daily Volume (m³/day)
          </label>
          <input
            type="number"
            step="0.001"
            {...register('Vd', { valueAsNumber: true })}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            placeholder="14.634"
          />
          {errors.Vd && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.Vd.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Storage Days
          </label>
          <input
            type="number"
            step="1"
            {...register('N', { valueAsNumber: true })}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            placeholder="7"
          />
          {errors.N && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.N.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Number of Tanks
          </label>
          <input
            type="number"
            step="1"
            {...register('n', { valueAsNumber: true })}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            placeholder="1"
          />
          {errors.n && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.n.message}</p>
          )}
        </div>
      </div>

      {/* Geometry Mode */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Geometry Mode
        </label>
        <div className="space-y-3">
          <label className="flex items-center">
            <input
              type="radio"
              value="H=1.5D"
              {...register('geometryMode')}
              className="mr-2 text-primary-600 focus:ring-primary-500"
            />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              Automatic (H = 1.5D) - Recommended for most applications
            </span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="manual"
              {...register('geometryMode')}
              className="mr-2 text-primary-600 focus:ring-primary-500"
            />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              Manual dimensions (D and H)
            </span>
          </label>
        </div>
        {errors.geometryMode && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.geometryMode.message}</p>
        )}
      </div>

      {/* Manual Dimensions (conditional) */}
      {watchedGeometryMode === 'manual' && (
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Diameter (m)
            </label>
            <input
              type="number"
              step="0.001"
              {...register('D', { valueAsNumber: true })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder="2.65"
            />
            {errors.D && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.D.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Height (m)
            </label>
            <input
              type="number"
              step="0.001"
              {...register('H', { valueAsNumber: true })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder="3.975"
            />
            {errors.H && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.H.message}</p>
            )}
          </div>
        </div>
      )}

      {/* Safety Factors */}
      <div>
        <label className="flex items-center">
          <input
            type="checkbox"
            {...register('safetyHeight')}
            className="mr-2 text-primary-600 focus:ring-primary-500 rounded"
          />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Apply 12% height safety factor
          </span>
        </label>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          Adds 12% extra height for safety margins
        </p>
      </div>

      {/* Material Properties */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Density (kg/m³)
          </label>
          <input
            type="number"
            step="0.1"
            {...register('rho', { valueAsNumber: true })}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            placeholder="1021.6"
          />
          {errors.rho && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.rho.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Material
          </label>
          <select
            {...register('material')}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="SS">Stainless Steel (SS)</option>
            <option value="HDPE">High-Density Polyethylene (HDPE)</option>
          </select>
          {errors.material && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.material.message}</p>
          )}
        </div>
      </div>

      {/* Design Coefficients */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Allowable Stress (Pa)
          </label>
          <input
            type="number"
            step="1e6"
            {...register('S', { valueAsNumber: true })}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            placeholder="200e6"
          />
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            SS: ~200 MPa, HDPE: ~23 MPa
          </p>
          {errors.S && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.S.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Weld Efficiency
          </label>
          <input
            type="number"
            step="0.01"
            {...register('E', { valueAsNumber: true })}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            placeholder="0.85"
          />
          {errors.E && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.E.message}</p>
          )}
        </div>
      </div>

      {/* Environmental Factors */}
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Atmospheric Pressure (Pa)
          </label>
          <input
            type="number"
            step="100"
            {...register('atm', { valueAsNumber: true })}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            placeholder="101325"
          />
          {errors.atm && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.atm.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Gravity (m/s²)
          </label>
          <input
            type="number"
            step="0.01"
            {...register('g', { valueAsNumber: true })}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            placeholder="9.81"
          />
          {errors.g && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.g.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Corrosion Allowance (mm)
          </label>
          <input
            type="number"
            step="0.1"
            {...register('corrosion', { valueAsNumber: true })}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            placeholder="0"
          />
          {errors.corrosion && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.corrosion.message}</p>
          )}
        </div>
      </div>

      {/* Help Text */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <div className="flex items-start">
          <InformationCircleIcon className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
          <div className="text-sm text-blue-800 dark:text-blue-200">
            <p className="font-medium mb-1">Design Guidelines:</p>
            <ul className="space-y-1">
              <li>• H/D ratio should be between 0.5 and 3 for stability</li>
              <li>• 12% safety factors are applied to height and pressure</li>
              <li>• Material selection is auto-suggested based on chemical properties</li>
              <li>• All calculations use thin-wall pressure vessel theory</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TankInputForm;
