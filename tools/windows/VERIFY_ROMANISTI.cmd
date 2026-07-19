@echo off
setlocal
title Verify Romanisti

cd /d "%~dp0\..\.."

echo.
echo ROMANISTI VERIFICATION
echo.

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js was not found. Install Node.js 20 LTS.
  pause
  exit /b 1
)

if not exist node_modules (
  call npm install --no-audit --no-fund
  if errorlevel 1 (
    echo Dependency installation failed.
    pause
    exit /b 1
  )
)

call npm run verify
set result=%errorlevel%

echo.
if %result%==0 (
  echo Verification passed.
) else (
  echo Verification failed with exit code %result%.
)

pause
exit /b %result%
