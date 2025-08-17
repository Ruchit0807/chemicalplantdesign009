import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CalculatorIcon, 
  ChartBarIcon, 
  BeakerIcon,
  DocumentTextIcon 
} from '@heroicons/react/24/outline';

const Home: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Design of Storage Tanks for{' '}
          <span className="text-primary-600 dark:text-primary-400">
            Acetanilide Production Plant
          </span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
          Interactive design and analysis tool for chemical storage tank specifications, 
          featuring comprehensive calculations for pressure, thickness, and material selection.
        </p>
        
        {/* Project Team Section */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 max-w-4xl mx-auto">
            <h2 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-4 text-center">
              Project Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                <p className="font-medium text-gray-900 dark:text-white">RUCHIT</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">BT24CM009</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                <p className="font-medium text-gray-900 dark:text-white">ROUNAK</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">BT24CME002</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                <p className="font-medium text-gray-900 dark:text-white">MAYURESH</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">BT24CME005</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                <p className="font-medium text-gray-900 dark:text-white">AARYA</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">BT24CME007</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                <p className="font-medium text-gray-900 dark:text-white">VIDHI</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">BT24CME016</p>
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Website developed by <span className="font-semibold">RUCHIT</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/calculator"
            className="btn-primary inline-flex items-center justify-center px-8 py-3 text-lg"
          >
            <CalculatorIcon className="w-6 h-6 mr-2" />
            Open Calculator
          </Link>
          <Link
            to="/results"
            className="btn-secondary inline-flex items-center justify-center px-8 py-3 text-lg"
          >
            <ChartBarIcon className="w-6 h-6 mr-2" />
            View Results
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg card-hover">
          <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
            <CalculatorIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Interactive Calculator
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Input your requirements and get instant calculations for tank dimensions, 
            thickness, and material specifications.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg card-hover">
          <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
            <BeakerIcon className="w-6 h-6 text-green-600 dark:text-green-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Chemical Database
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Pre-loaded with properties for Aniline, Acetic Anhydride, Acetanilide, 
            and Acetic Acid with automatic material suggestions.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg card-hover">
          <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
            <ChartBarIcon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Results & Analysis
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Comprehensive results with charts, comparisons, and exportable reports 
            in PDF and CSV formats.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg card-hover">
          <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-4">
            <DocumentTextIcon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Project Methodology
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Detailed explanation of design principles, formulas, and safety factors 
            used in the calculations.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg card-hover">
          <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-4">
            <BeakerIcon className="w-6 h-6 text-red-600 dark:text-red-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Preset Examples
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Six pre-configured tank designs (A-F) matching the project specifications 
            for quick comparison and validation.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg card-hover">
          <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
            <CalculatorIcon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Safety & Validation
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Built-in validation rules, safety factor calculations, and warnings 
            for design parameters outside recommended ranges.
          </p>
        </div>
      </div>

      {/* Quick Start Section */}
      <div className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 p-8 rounded-2xl">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          Quick Start
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">
              1
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              Choose your chemical and input storage requirements
            </p>
          </div>
          <div>
            <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">
              2
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              Review calculated dimensions and thickness values
            </p>
          </div>
          <div>
            <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">
              3
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              Export results and compare with preset examples
            </p>
          </div>
        </div>
        <div className="text-center mt-6">
          <Link
            to="/calculator"
            className="btn-primary inline-flex items-center px-6 py-2"
          >
            Start Designing
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
