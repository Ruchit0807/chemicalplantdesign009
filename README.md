Chemical Plant Design - Storage Tanks Calculator
An interactive web application for designing and analyzing storage tanks for chemical process plants, specifically focused on Acetanilide production. This project combines chemical engineering principles with modern web development to create a comprehensive design tool.

🎯 Project Overview
This application provides engineers and students with an interactive platform to:

Design storage tanks based on chemical properties and storage requirements
Calculate tank dimensions, thickness, and material specifications
Compare results with preset project examples (Tanks A-F)
Export calculations and generate reports
Learn about chemical engineering design principles
✨ Features
Core Functionality
Interactive Calculator: Real-time tank design calculations with validation
Chemical Database: Pre-loaded properties for Aniline, Acetic Anhydride, Acetanilide, and Acetic Acid
Preset Examples: Six pre-configured tank designs matching project specifications
Results Analysis: Comprehensive output with charts and comparisons
Export Options: CSV export and PDF generation capabilities
Technical Features
Dark Mode: Modern dark theme with smooth transitions
Responsive Design: Mobile-friendly interface for all devices
Real-time Validation: Form validation with immediate feedback
Calculation History: Save and compare multiple designs
Interactive Charts: Visual representation of results using Recharts
🏗️ Technology Stack
Frontend
React 18 - Modern React with hooks and functional components
TypeScript - Type-safe development and better code quality
Tailwind CSS - Utility-first CSS framework for rapid UI development
React Router - Client-side routing and navigation
Development Tools
React Hook Form - Performant form management with validation
Zod - TypeScript-first schema validation
Recharts - Composable charting library for React
Heroicons - Beautiful hand-crafted SVG icons
🚀 Getting Started
Prerequisites
Node.js (version 16 or higher)
npm or yarn package manager
Installation
Clone the repository

git clone <repository-url>
cd chemical-plant-design
Install dependencies

npm install
Start the development server

npm start
Open your browser Navigate to http://localhost:3000 to view the application

Available Scripts
npm start - Start development server
npm run build - Build for production
npm test - Run test suite
npm run eject - Eject from Create React App (not recommended)
📚 Usage Guide
1. Home Page
Overview of the project and available features
Quick start guide and navigation to calculator
2. Calculator
Select chemical from dropdown (Aniline, Acetic Anhydride, etc.)
Input storage requirements (daily volume, storage days, number of tanks)
Choose geometry mode (automatic H=1.5D or manual dimensions)
Configure material properties and safety factors
View real-time calculation results
3. Preset Examples
Click on any preset tank (A-F) to load project specifications
Compare your calculations with expected results
Validate calculation accuracy against project data
4. Results & Analysis
Review calculation history
Compare multiple tank designs
Export results in CSV format
Generate visual comparisons with charts
5. Methodology
Detailed explanation of design principles
Engineering formulas and safety factors
Chemical process overview
Material selection criteria
🔬 Engineering Calculations
Design Principles
Volume Calculation: Vr = (Vd × N) / n
Geometry: H = 1.5D (default), with manual override option
Safety Factors: 12% margin on height and pressure
Thickness: Thin-wall pressure vessel theory
Key Formulas
Shell Thickness: t_shell = (P × D) / (2 × S × E - P)
Roof Thickness: t_roof = (P × D) / (4 × S × E - P)
Base Thickness: Hydrostatic plate design (calibrated method)
Material Properties
Stainless Steel: 200 MPa allowable stress
HDPE: 23 MPa allowable stress
Weld Efficiency: 0.85 (default)
📊 Preset Tank Examples
The application includes six preset tank designs matching the project specifications:

Tank	Chemical	Daily Volume (m³/day)	Expected Results
A	Aniline	14.634	H: 3.975m, D: 2.65m, t_shell: 1.232mm
B	Acetic Anhydride	3.79	H: 2.533m, D: 1.689m, t_shell: 6.225mm
C	Unreacted Aniline	1.17	H: 1.496m, D: 0.997m, t_shell: 0.382mm
D	Unreacted Acetic Anhydride	1.21	H: 1.515m, D: 1.01m, t_shell: 3.407mm
E	Acetanilide	16.406	H: 4.131m, D: 2.754m, t_shell: 11.94mm
F	Acetic Acid	8.462	H: 3.312m, D: 2.208m, t_shell: 8.6mm
🧪 Testing
Unit Tests
Calculation engine validation
Input validation and error handling
Preset data accuracy verification
Manual Testing
Cross-browser compatibility
Responsive design validation
Export functionality verification
📁 Project Structure
src/
├── components/          # Reusable UI components
│   ├── Navbar.tsx      # Navigation component
│   ├── TankInputForm.tsx # Main input form
│   ├── TankResults.tsx # Results display
│   └── PresetSelector.tsx # Preset tank selector
├── pages/              # Page components
│   ├── Home.tsx        # Landing page
│   ├── Calculator.tsx  # Main calculator
│   ├── Results.tsx     # Results and history
│   ├── Methodology.tsx # Design methodology
│   └── About.tsx       # Project information
├── types/              # TypeScript type definitions
│   └── index.ts        # Main type definitions
├── utils/              # Utility functions
│   ├── calculations.ts # Core calculation engine
│   └── validation.ts   # Form validation schemas
├── data/               # Static data
│   └── presets.ts      # Preset tank configurations
├── App.tsx             # Main application component
└── index.tsx           # Application entry point
🔧 Configuration
Environment Variables
No environment variables required for basic functionality
PDF export can be configured with additional libraries
Customization
Chemical properties can be modified in src/utils/calculations.ts
Preset tanks can be updated in src/data/presets.ts
UI styling can be customized through Tailwind CSS classes
🚧 Limitations & Future Enhancements
Current Limitations
Thin-wall pressure vessel theory only
Hydrostatic pressure loading (no seismic/wind)
Static analysis (no dynamic effects)
Standard atmospheric conditions
Planned Enhancements
Seismic and wind load analysis
Thermal stress calculations
Fatigue analysis for cyclic loading
Advanced material models
3D finite element analysis integration
📖 References
ASME Boiler and Pressure Vessel Code, Section VIII, Division 1
API Standard 650: Welded Steel Tanks for Oil Storage
Chemical Engineering Design Principles, Sinnott & Towler
Process Equipment Design, Ludwig
Project-specific calculations and material data sheets
🤝 Contributing
This is an educational project. For contributions or improvements:

Fork the repository
Create a feature branch
Make your changes
Submit a pull request
📄 License
This project is developed for educational purposes. All calculations should be verified by qualified engineers before use in actual projects.

📞 Support
For questions about:

Engineering calculations: Contact your academic institution
Technical implementation: Review the code and documentation
Project methodology: Refer to the Methodology page
Note: This application is designed for educational and demonstration purposes. All engineering calculations should be independently verified before use in professional projects.
