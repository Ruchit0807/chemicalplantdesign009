import React from 'react';
import { 
  BeakerIcon, 
  CalculatorIcon, 
  ShieldCheckIcon,
  DocumentTextIcon 
} from '@heroicons/react/24/outline';

const Methodology: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Process & Methodology
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Detailed explanation of the design principles, chemical processes, and engineering 
          calculations used in the storage tank design.
        </p>
      </div>

      {/* Chemical Process Overview */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
          <BeakerIcon className="w-5 h-5 mr-2 text-primary-600" />
          Chemical Process Overview
        </h2>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            The Acetanilide production plant involves the reaction between Aniline (C₆H₅NH₂) 
            and Acetic Anhydride ((CH₃CO)₂O) to produce Acetanilide (C₆H₅NHCOCH₃) and 
            Acetic Acid (CH₃COOH) as a co-product.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-4">
            <p className="text-blue-800 dark:text-blue-200 font-medium text-center">
              C₆H₅NH₂ + (CH₃CO)₂O → C₆H₅NHCOCH₃ + CH₃COOH
            </p>
            <p className="text-blue-700 dark:text-blue-300 text-sm text-center mt-1">
              Aniline + Acetic Anhydride → Acetanilide + Acetic Acid
            </p>
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            This reaction requires storage tanks for reactants, recycling of unreacted materials, 
            and storage of final products. The design considers chemical compatibility, 
            safety requirements, and operational efficiency.
          </p>
        </div>
      </div>

      {/* Process Flow Diagram */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Process Flow & Storage System
        </h2>
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            {/* Reactants */}
            <div className="space-y-2">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto">
                <BeakerIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-medium text-gray-900 dark:text-white">Reactants</h3>
              <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <p>• Aniline Tank (A)</p>
                <p>• Acetic Anhydride Tank (B)</p>
              </div>
            </div>

            {/* Reactor */}
            <div className="space-y-2">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto">
                <CalculatorIcon className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-medium text-gray-900 dark:text-white">Reactor</h3>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <p>Continuous Stirred Tank Reactor</p>
              </div>
            </div>

            {/* Products */}
            <div className="space-y-2">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto">
                <BeakerIcon className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-medium text-gray-900 dark:text-white">Products</h3>
              <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <p>• Acetanilide Tank (E)</p>
                <p>• Acetic Acid Tank (F)</p>
              </div>
            </div>
          </div>

          {/* Recycling Streams */}
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
            <h4 className="font-medium text-gray-900 dark:text-white text-center mb-3">
              Recycling Streams
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <p>• Unreacted Aniline Tank (C)</p>
                <p>• Unreacted Acetic Anhydride Tank (D)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Design Principles */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
          <CalculatorIcon className="w-5 h-5 mr-2 text-primary-600" />
          Design Principles & Assumptions
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white mb-2">Geometric Relationship</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              The default design assumes a height-to-diameter ratio of H = 1.5D, which provides:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 ml-4">
              <li>Optimal stability and structural integrity</li>
              <li>Efficient use of ground space</li>
              <li>Reasonable height for maintenance access</li>
              <li>Consistent with industry standards</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 dark:text-white mb-2">Volume Calculation</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Required volume per tank is calculated as:
            </p>
            <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg font-mono text-sm">
              Vr = (Vd × N) / n
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
              Where: Vr = required volume per tank, Vd = daily volume, N = storage days, n = number of parallel tanks
            </p>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 dark:text-white mb-2">Geometry Solution</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              For H = 1.5D geometry, the diameter is solved from:
            </p>
            <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg font-mono text-sm">
              Vr = (π × D² × 1.5D) / 4 = (π × 1.5 × D³) / 4
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg font-mono text-sm mt-2">
              D = ∛((4 × Vr) / (π × 1.5))
            </div>
          </div>
        </div>
      </div>

      {/* Safety Factors */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
          <ShieldCheckIcon className="w-5 h-5 mr-2 text-primary-600" />
          Safety Factors & Design Margins
        </h2>
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">Height Safety Factor</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                A 12% safety factor is applied to the calculated height:
              </p>
              <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg font-mono text-sm">
                H_safety = H × 1.12
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                This accounts for level fluctuations, foaming, and operational variations.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">Pressure Safety Factor</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                A 12% safety factor is applied to the design pressure:
              </p>
              <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg font-mono text-sm">
                P_design = P_absolute × 1.12
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                This provides margin for pressure variations and transient conditions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Thickness Calculations */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Thickness Calculations
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white mb-2">Thin-Wall Assumption</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              All thickness calculations use thin-wall pressure vessel theory, valid when:
            </p>
                        <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg font-mono text-sm">     
              2SE &gt; P_design
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
              Where: S = allowable stress, E = weld efficiency, P = design pressure
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">Shell Thickness</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Cylindrical shell thickness:
              </p>
              <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg font-mono text-sm">
                t_shell = (P × D) / (2 × S × E - P)
              </div>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">Roof Thickness</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Spherical/curved roof thickness:
              </p>
              <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg font-mono text-sm">
                t_roof = (P × D) / (4 × S × E - P)
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 dark:text-white mb-2">Base Thickness</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Base thickness is calculated using hydrostatic plate design under uniform load, 
              calibrated to match project results. The method considers:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 ml-4">
              <li>Hydrostatic pressure distribution</li>
              <li>Material-specific design factors</li>
              <li>Minimum thickness requirements</li>
              <li>Corrosion allowance</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Material Selection */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Material Selection Criteria
        </h2>
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">Stainless Steel (SS)</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                <li>Used for Aniline and its derivatives</li>
                <li>Excellent corrosion resistance</li>
                <li>High strength (200 MPa allowable stress)</li>
                <li>Suitable for aromatic amines</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">High-Density Polyethylene (HDPE)</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                <li>Used for Acetic Anhydride and products</li>
                <li>Chemical resistance to organic acids</li>
                <li>Lower strength (23 MPa allowable stress)</li>
                <li>Cost-effective for large tanks</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Limitations & Assumptions */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Limitations & Design Assumptions
        </h2>
        <div className="space-y-4">
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
            <h3 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">
              Current Design Scope
            </h3>
            <ul className="list-disc list-inside text-yellow-700 dark:text-yellow-300 space-y-1">
              <li>Thin-wall pressure vessel theory only</li>
              <li>Hydrostatic pressure loading (no seismic/wind)</li>
              <li>Static analysis (no dynamic effects)</li>
              <li>Uniform temperature distribution</li>
              <li>Standard atmospheric conditions</li>
            </ul>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <h3 className="font-medium text-blue-800 dark:text-blue-200 mb-2">
              Future Enhancements
            </h3>
            <ul className="list-disc list-inside text-blue-700 dark:text-blue-300 space-y-1">
              <li>Seismic and wind load analysis</li>
              <li>Thermal stress calculations</li>
              <li>Fatigue analysis for cyclic loading</li>
              <li>Advanced material models</li>
              <li>3D finite element analysis</li>
            </ul>
          </div>
        </div>
      </div>

      {/* References */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
          <DocumentTextIcon className="w-5 h-5 mr-2 text-primary-600" />
          References & Standards
        </h2>
        <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <p>• ASME Boiler and Pressure Vessel Code, Section VIII, Division 1</p>
          <p>• API Standard 650: Welded Steel Tanks for Oil Storage</p>
          <p>• Chemical Engineering Design Principles, Sinnott & Towler</p>
          <p>• Process Equipment Design, Ludwig</p>
          <p>• Project-specific calculations and material data sheets</p>
        </div>
      </div>
    </div>
  );
};

export default Methodology;
