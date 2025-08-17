import React, { useState } from 'react';
import { CalculationHistory } from '../types';
import { PRESET_TANKS } from '../data/presets';
import { CHEMICAL_DATA } from '../utils/calculations';
import { 
  TableCellsIcon, 
  ChartBarIcon, 
  TrashIcon,
  DocumentArrowDownIcon,
  EyeIcon
} from '@heroicons/react/24/outline';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ResultsProps {
  calculationHistory: CalculationHistory[];
  onClearHistory: () => void;
}

const Results: React.FC<ResultsProps> = ({ calculationHistory, onClearHistory }) => {
  const [selectedCalculations, setSelectedCalculations] = useState<string[]>([]);
  const [showComparison, setShowComparison] = useState(false);

  const handleSelectCalculation = (id: string) => {
    setSelectedCalculations(prev => 
      prev.includes(id) 
        ? prev.filter(calcId => calcId !== id)
        : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedCalculations.length === calculationHistory.length) {
      setSelectedCalculations([]);
    } else {
      setSelectedCalculations(calculationHistory.map(calc => calc.id));
    }
  };

  const selectedCalcs = calculationHistory.filter(calc => 
    selectedCalculations.includes(calc.id)
  );

  const exportComparisonCSV = () => {
    if (selectedCalcs.length === 0) return;

    const csvContent = [
      ['Tank Name', 'Chemical', 'Vd (m³/day)', 'D (m)', 'H (m)', 't_shell (mm)', 't_roof (mm)', 't_base (mm)', 'Material'],
      ...selectedCalcs.map(calc => [
        calc.name,
        CHEMICAL_DATA[calc.input.chemical].name,
        calc.input.Vd,
        calc.output.D,
        calc.output.H,
        calc.output.t_shell,
        calc.output.t_roof,
        calc.output.t_base,
        calc.output.materialSuggested
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `tank-comparison-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Results & Analysis
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Review your calculation history, compare tank designs, and export results. 
          Compare your calculations with the project preset examples.
        </p>
      </div>

      {/* Project Results Table */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
          <TableCellsIcon className="w-5 h-5 mr-2 text-primary-600" />
          Project Results (Preset Tanks A-F)
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-2 px-3 text-gray-700 dark:text-gray-300">Tank</th>
                <th className="text-left py-2 px-3 text-gray-700 dark:text-gray-300">Chemical</th>
                <th className="text-left py-2 px-3 text-gray-700 dark:text-gray-300">Vd (m³/day)</th>
                <th className="text-left py-2 px-3 text-gray-700 dark:text-gray-300">H (m)</th>
                <th className="text-left py-2 px-3 text-gray-700 dark:text-gray-300">D (m)</th>
                <th className="text-left py-2 px-3 text-gray-700 dark:text-gray-300">t_shell (mm)</th>
                <th className="text-left py-2 px-3 text-gray-700 dark:text-gray-300">t_roof (mm)</th>
                <th className="text-left py-2 px-3 text-gray-700 dark:text-gray-300">t_base (mm)</th>
                <th className="text-left py-2 px-3 text-gray-700 dark:text-gray-300">Material</th>
              </tr>
            </thead>
            <tbody>
              {PRESET_TANKS.map((preset) => (
                <tr key={preset.id} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="py-2 px-3 font-medium text-gray-900 dark:text-white">
                    {preset.id}
                  </td>
                  <td className="py-2 px-3 text-gray-700 dark:text-gray-300">
                    {preset.name}
                  </td>
                  <td className="py-2 px-3 text-gray-700 dark:text-gray-300">
                    {preset.Vd}
                  </td>
                  <td className="py-2 px-3 text-gray-700 dark:text-gray-300">
                    {preset.expectedOutput.H}
                  </td>
                  <td className="py-2 px-3 text-gray-700 dark:text-gray-300">
                    {preset.expectedOutput.D}
                  </td>
                  <td className="py-2 px-3 text-gray-700 dark:text-gray-300">
                    {preset.expectedOutput.t_shell}
                  </td>
                  <td className="py-2 px-3 text-gray-700 dark:text-gray-300">
                    {preset.expectedOutput.t_roof}
                  </td>
                  <td className="py-2 px-3 text-gray-700 dark:text-gray-300">
                    {preset.expectedOutput.t_base}
                  </td>
                  <td className="py-2 px-3 text-gray-700 dark:text-gray-300">
                    {preset.expectedOutput.materialSuggested}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Calculation History */}
      {calculationHistory.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
              <ChartBarIcon className="w-5 h-5 mr-2 text-primary-600" />
              Your Calculation History
            </h2>
            <div className="flex gap-2">
              <button
                onClick={handleSelectAll}
                className="text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
              >
                {selectedCalculations.length === calculationHistory.length ? 'Deselect All' : 'Select All'}
              </button>
              <button
                onClick={onClearHistory}
                className="text-sm text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 flex items-center"
              >
                <TrashIcon className="w-4 h-4 mr-1" />
                Clear History
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {calculationHistory.map((calc) => (
              <div
                key={calc.id}
                className={`p-4 border-2 rounded-lg transition-all duration-200 ${
                  selectedCalculations.includes(calc.id)
                    ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <input
                      type="checkbox"
                      checked={selectedCalculations.includes(calc.id)}
                      onChange={() => handleSelectCalculation(calc.id)}
                      className="text-primary-600 focus:ring-primary-500"
                    />
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">{calc.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {calc.timestamp.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="text-right text-sm">
                    <div className="text-gray-700 dark:text-gray-300">
                      D: {calc.output.D} m, H: {calc.output.H} m
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                      t_shell: {calc.output.t_shell} mm
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison Controls */}
          {selectedCalculations.length > 0 && (
            <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {selectedCalculations.length} calculation(s) selected
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Select calculations to compare and analyze
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setShowComparison(!showComparison)}
                    className="btn-secondary flex items-center px-3 py-2 text-sm"
                  >
                    <EyeIcon className="w-4 h-4 mr-1" />
                    {showComparison ? 'Hide' : 'Show'} Comparison
                  </button>
                  <button
                    onClick={exportComparisonCSV}
                    className="btn-primary flex items-center px-3 py-2 text-sm"
                  >
                    <DocumentArrowDownIcon className="w-4 h-4 mr-1" />
                    Export Comparison
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Comparison Charts */}
      {showComparison && selectedCalcs.length > 0 && (
        <div className="space-y-6">
          {/* Thickness Comparison Chart */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Thickness Comparison
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={selectedCalcs.map(calc => ({
                  name: calc.name,
                  shell: calc.output.t_shell,
                  roof: calc.output.t_roof,
                  base: calc.output.t_base
                }))}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis 
                    dataKey="name" 
                    stroke="#6B7280"
                    tick={{ fill: '#6B7280' }}
                    angle={-45}
                    textAnchor="end"
                    height={80}
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
                  <Bar dataKey="shell" fill="#3B82F6" name="Shell" />
                  <Bar dataKey="roof" fill="#10B981" name="Roof" />
                  <Bar dataKey="base" fill="#F59E0B" name="Base" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Dimensions Comparison Chart */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Dimensions Comparison
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={selectedCalcs.map(calc => ({
                  name: calc.name,
                  diameter: calc.output.D,
                  height: calc.output.H
                }))}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis 
                    dataKey="name" 
                    stroke="#6B7280"
                    tick={{ fill: '#6B7280' }}
                    angle={-45}
                    textAnchor="end"
                    height={80}
                  />
                  <YAxis 
                    stroke="#6B7280"
                    tick={{ fill: '#6B7280' }}
                    label={{ value: 'Dimension (m)', angle: -90, position: 'insideLeft', fill: '#6B7280' }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: '1px solid #374151',
                      borderRadius: '8px',
                      color: '#F9FAFB'
                    }}
                  />
                  <Bar dataKey="diameter" fill="#8B5CF6" name="Diameter" />
                  <Bar dataKey="height" fill="#EC4899" name="Height" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}

      {/* Empty State */}
      {calculationHistory.length === 0 && (
        <div className="text-center py-12">
          <ChartBarIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            No calculations yet
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Use the calculator to design your first tank and see the results here.
          </p>
          <a
            href="/calculator"
            className="btn-primary inline-flex items-center"
          >
            Go to Calculator
          </a>
        </div>
      )}
    </div>
  );
};

export default Results;
