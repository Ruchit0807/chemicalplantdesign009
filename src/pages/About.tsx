import React from 'react';
import { 
  UserGroupIcon, 
  AcademicCapIcon, 
  CodeBracketIcon,
  HeartIcon 
} from '@heroicons/react/24/outline';

const About: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          About the Project
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Learn about the team behind this chemical plant design project, our methodology, 
          and the technology stack used to create this interactive application.
        </p>
      </div>

      {/* Project Overview */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Project Overview
        </h2>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            This project represents a comprehensive study of storage tank design for an 
            Acetanilide production plant. The work combines chemical engineering principles, 
            pressure vessel design theory, and modern software development practices to create 
            an interactive design tool.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            The application provides engineers and students with a hands-on understanding of 
            how theoretical calculations translate into practical design specifications, 
            complete with safety factors and material selection criteria.
          </p>
        </div>
      </div>

      {/* Team Members */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
          <UserGroupIcon className="w-5 h-5 mr-2 text-primary-600" />
          Project Team
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="font-medium text-gray-900 dark:text-white">Student Team</h3>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="font-medium text-gray-900 dark:text-white">Chemical Engineering Students</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  • Process design and calculations<br/>
                  • Material selection and safety analysis<br/>
                  • Engineering documentation
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-gray-900 dark:text-white">Faculty Supervisors</h3>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="font-medium text-gray-900 dark:text-white">Chemical Engineering Faculty</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  • Technical guidance and review<br/>
                  • Industry standards compliance<br/>
                  • Project methodology validation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
          <CodeBracketIcon className="w-5 h-5 mr-2 text-primary-600" />
          Technology Stack
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white mb-3">Frontend</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded">
                <span className="text-gray-700 dark:text-gray-300">React 18</span>
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                  Latest
                </span>
              </div>
              <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded">
                <span className="text-gray-700 dark:text-gray-300">TypeScript</span>
                <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded">
                  Type Safe
                </span>
              </div>
              <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded">
                <span className="text-gray-700 dark:text-gray-300">Tailwind CSS</span>
                <span className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded">
                  Utility First
                </span>
              </div>
              <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded">
                <span className="text-gray-700 dark:text-gray-300">Recharts</span>
                <span className="text-xs bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded">
                  Data Viz
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 dark:text-white mb-3">Development Tools</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded">
                <span className="text-gray-700 dark:text-gray-300">React Hook Form</span>
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                  Form Management
                </span>
              </div>
              <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded">
                <span className="text-gray-700 dark:text-gray-300">Zod</span>
                <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded">
                  Validation
                </span>
              </div>
              <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded">
                <span className="text-gray-700 dark:text-gray-300">React Router</span>
                <span className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded">
                  Navigation
                </span>
              </div>
              <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded">
                <span className="text-gray-700 dark:text-gray-300">Heroicons</span>
                <span className="text-xs bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded">
                  Icons
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Engineering Methodology */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
          <AcademicCapIcon className="w-5 h-5 mr-2 text-primary-600" />
          Engineering Methodology
        </h2>
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">Design Approach</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                <li>Systematic calculation methodology</li>
                <li>Built-in safety factors and margins</li>
                <li>Material compatibility analysis</li>
                <li>Validation against industry standards</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">Quality Assurance</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                <li>Unit testing of calculation functions</li>
                <li>Input validation and error handling</li>
                <li>Results verification against project data</li>
                <li>Documentation and code review</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Key Application Features
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
              <h4 className="font-medium text-blue-800 dark:text-blue-200">Interactive Calculator</h4>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Real-time calculations with immediate feedback and validation
              </p>
            </div>
            <div className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <h4 className="font-medium text-green-800 dark:text-green-200">Preset Examples</h4>
              <p className="text-sm text-green-700 dark:text-green-300">
                Six pre-configured tank designs matching project specifications
              </p>
            </div>
            <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
              <h4 className="font-medium text-purple-800 dark:text-purple-200">Results Analysis</h4>
              <p className="text-sm text-purple-700 dark:text-purple-300">
                Comprehensive results with charts, comparisons, and export options
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="p-3 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg">
              <h4 className="font-medium text-orange-800 dark:text-orange-200">Dark Mode</h4>
              <p className="text-sm text-orange-700 dark:text-orange-300">
                Modern dark theme with smooth transitions and accessibility
              </p>
            </div>
            <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <h4 className="font-medium text-red-800 dark:text-red-200">Export Functionality</h4>
              <p className="text-sm text-red-700 dark:text-red-300">
                CSV export for data analysis and PDF generation for reports
              </p>
            </div>
            <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg">
              <h4 className="font-medium text-indigo-800 dark:text-indigo-200">Responsive Design</h4>
              <p className="text-sm text-indigo-700 dark:text-indigo-300">
                Mobile-friendly interface that works on all device sizes
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Acknowledgments */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
          <HeartIcon className="w-5 h-5 mr-2 text-primary-600" />
          Acknowledgments
        </h2>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="font-medium text-gray-900 dark:text-white mb-2">Academic Support</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Special thanks to the Chemical Engineering Department faculty for their guidance, 
              technical expertise, and continuous support throughout this project development.
            </p>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="font-medium text-gray-900 dark:text-white mb-2">Industry Standards</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              This project follows established engineering standards and best practices from 
              ASME, API, and other recognized industry organizations.
            </p>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="font-medium text-gray-900 dark:text-white mb-2">Open Source</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Built with modern open-source technologies including React, TypeScript, and 
              Tailwind CSS, demonstrating the power of community-driven development.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Contact & Support
        </h2>
        <div className="text-center">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            For questions about the engineering calculations, methodology, or technical 
            implementation, please contact the project team through your academic institution.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-blue-800 dark:text-blue-200 font-medium">
              This is an educational project designed for learning and demonstration purposes.
            </p>
            <p className="text-blue-700 dark:text-blue-300 text-sm mt-1">
              All calculations should be verified by qualified engineers before use in actual projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
