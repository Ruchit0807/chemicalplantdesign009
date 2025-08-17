import React, { useState } from 'react';
import { TankOutput, TankInput } from '../types';
import { CHEMICAL_DATA } from '../utils/calculations';
import { 
  ChartBarIcon, 
  DocumentArrowDownIcon, 
  ScaleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface TankResultsProps {
  result: TankOutput;
  input: TankInput;
  onSave: () => void;
}

const TankResults: React.FC<TankResultsProps> = ({ result, input, onSave }) => {
  const [showDerivation, setShowDerivation] = useState(false);
  const [showWarnings, setShowWarnings] = useState(true);
  
  const chemicalInfo = CHEMICAL_DATA[input.chemical];

  // Prepare chart data
  const thicknessData = [
    { name: 'Shell', value: result.t_shell, color: '#3B82F6' },
    { name: 'Roof', value: result.t_roof, color: '#10B981' },
    { name: 'Base', value: result.t_base, color: '#F59E0B' }
  ];

  const handleExportCSV = () => {
    const csvContent = [
      ['Parameter', 'Value', 'Unit'],
      ['Chemical', chemicalInfo.name, ''],
      ['Daily Volume', input.Vd, 'm³/day'],
      ['Storage Days', input.N, 'days'],
      ['Number of Tanks', input.n, ''],
      ['Required Volume per Tank', result.Vr, 'm³'],
      ['Diameter', result.D, 'm'],
      ['Height (Nominal)', result.H, 'm'],
      ['Height (with Safety)', result.H_safety, 'm'],
      ['Hydrostatic Pressure', (result.Pg / 1000).toFixed(2), 'kPa'],
      ['Absolute Pressure', (result.Pa / 1000).toFixed(2), 'kPa'],
      ['Design Pressure', (result.Pa_design / 1000).toFixed(2), 'kPa'],
      ['Shell Thickness', result.t_shell, 'mm'],
      ['Roof Thickness', result.t_roof, 'mm'],
      ['Base Thickness', result.t_base, 'mm'],
      ['Top Area', result.areaTop, 'm²'],
      ['Suggested Material', result.materialSuggested, ''],
      ['Corrosion Allowance', input.corrosion, 'mm']
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `tank-design-${input.chemical}-${input.Vd}m3-day.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const handleExportPDF = () => {
    // This would integrate with a PDF generation library
    alert('PDF export functionality would be implemented here with a library like jsPDF or Puppeteer');
  };

  return (
    <div className="space-y-6">
      {/* Main Results Summary */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
          <ChartBarIcon className="w-5 h-5 mr-2 text-primary-600" />
          Design Results
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Volume and Geometry */}
          <div className="space-y-3">
            <h3 className="font-medium text-gray-700 dark:text-gray-300">Volume & Geometry</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Required Volume:</span>
                <span className="font-medium text-gray-900 dark:text-white">{result.Vr} m³</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Diameter:</span>
                <span className="font-medium text-gray-900 dark:text-white">{result.D} m</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Height (Nominal):</span>
                <span className="font-medium text-gray-900 dark:text-white">{result.H} m</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Height (Safety):</span>
                <span className="font-medium text-gray-900 dark:text-white">{result.H_safety} m</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Top Area:</span>
                <span className="font-medium text-gray-900 dark:text-white">{result.areaTop} m²</span>
              </div>
            </div>
          </div>

          {/* Pressures */}
          <div className="space-y-3">
            <h3 className="font-medium text-gray-700 dark:text-gray-300">Pressures</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Hydrostatic:</span>
                <span className="font-medium text-gray-900 dark:text-white">{(result.Pg / 1000).toFixed(2)} kPa</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Absolute:</span>
                <span className="font-medium text-gray-900 dark:text-white">{(result.Pa / 1000).toFixed(2)} kPa</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Design:</span>
                <span className="font-medium text-gray-900 dark:text-white">{(result.Pa_design / 1000).toFixed(2)} kPa</span>
              </div>
            </div>
          </div>

          {/* Thicknesses */}
          <div className="space-y-3">
            <h3 className="font-medium text-gray-700 dark:text-gray-300">Thicknesses</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Shell:</span>
                <span className="font-medium text-gray-900 dark:text-white">{result.t_shell} mm</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Roof:</span>
                <span className="font-medium text-gray-900 dark:text-white">{result.t_roof} mm</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Base:</span>
                <span className="font-medium text-gray-900 dark:text-white">{result.t_base} mm</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Material:</span>
                <span className="font-medium text-gray-900 dark:text-white">{result.materialSuggested}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Thickness Chart */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Thickness Comparison
        </h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={thicknessData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis 
                dataKey="name" 
                stroke="#6B7280"
                tick={{ fill: '#6B7280' }}
              />
              <YAxis 
                stroke="#6B7280"
                tick={{ fill: '#6B7280' }}
                label={{ value: 'Thickness (mm)', angle: -90, position: 'insideLeft', fill: '#6B7280' }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937', 
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#F9FAFB'
                }}
              />
              <Bar dataKey="value" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Warnings */}
      {result.warnings.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <button
            onClick={() => setShowWarnings(!showWarnings)}
            className="flex items-center justify-between w-full text-left mb-4"
          >
            <h3 className="text-lg font-semibold text-yellow-700 dark:text-yellow-400 flex items-center">
              <ExclamationTriangleIcon className="w-5 h-5 mr-2" />
              Warnings ({result.warnings.length})
            </h3>
            {showWarnings ? (
              <ChevronUpIcon className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronDownIcon className="w-5 h-5 text-gray-500" />
            )}
          </button>
          
          {showWarnings && (
            <div className="space-y-2">
              {result.warnings.map((warning, index) => (
                <div key={index} className="p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                  <p className="text-yellow-800 dark:text-yellow-200 text-sm">{warning}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Derivation Details */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <button
          onClick={() => setShowDerivation(!showDerivation)}
          className="flex items-center justify-between w-full text-left mb-4"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Calculation Derivation
          </h3>
          {showDerivation ? (
            <ChevronUpIcon className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDownIcon className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {showDerivation && (
          <div className="space-y-4 text-sm">
            <div>
              <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Volume Calculation</h4>
              <p className="text-gray-600 dark:text-gray-400 font-mono bg-gray-50 dark:bg-gray-700 p-2 rounded">
                {result.derivation.volume}
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Geometry Solution</h4>
              <p className="text-gray-600 dark:text-gray-400 font-mono bg-gray-50 dark:bg-gray-700 p-2 rounded whitespace-pre-line">
                {result.derivation.geometry}
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Pressure Calculations</h4>
              <p className="text-gray-600 dark:text-gray-400 font-mono bg-gray-50 dark:bg-gray-700 p-2 rounded whitespace-pre-line">
                {result.derivation.pressure}
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Thickness Calculations</h4>
              <p className="text-gray-600 dark:text-gray-400 font-mono bg-gray-50 dark:bg-gray-700 p-2 rounded whitespace-pre-line">
                {result.derivation.thickness}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={onSave}
            className="btn-primary flex-1 flex items-center justify-center"
          >
                         <ScaleIcon className="w-5 h-5 mr-2" />
             Save to History
           </button>
           <button
             onClick={handleExportCSV}
             className="btn-secondary flex-1 flex items-center justify-center"
           >
             <DocumentArrowDownIcon className="w-5 h-5 mr-2" />
             Export CSV
           </button>
           <button
             onClick={handleExportPDF}
             className="btn-secondary flex-1 flex items-center justify-center"
           >
             <DocumentArrowDownIcon className="w-5 h-5 mr-2" />
             Export PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default TankResults;
