@echo off
echo Building Chemical Plant Design Application...
echo.

echo Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo Error: Failed to install dependencies
    pause
    exit /b 1
)

echo.
echo Building for production...
call npm run build
if %errorlevel% neq 0 (
    echo Error: Failed to build application
    pause
    exit /b 1
)

echo.
echo Build completed successfully!
echo The built application is in the 'build' folder.
echo.
echo To serve the application locally, you can use:
echo   npx serve -s build
echo.
echo Or deploy the contents of the 'build' folder to your web server.
echo.
pause
