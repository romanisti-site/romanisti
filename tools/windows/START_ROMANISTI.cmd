@echo off
setlocal
title Romanisti Local Development

cd /d "%~dp0\..\.."

echo.
echo ROMANISTI LOCAL DEVELOPMENT
echo Repository: %CD%
echo.

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js was not found.
  echo Install Node.js 20 LTS, then run this file again.
  pause
  exit /b 1
)

if not exist node_modules (
  echo Installing dependencies...
  call npm install --no-audit --no-fund
  if errorlevel 1 (
    echo Dependency installation failed.
    pause
    exit /b 1
  )
)

echo Running source diagnostics...
call npm run diagnose
if errorlevel 1 (
  pause
  exit /b 1
)

echo.
echo Starting Astro at http://localhost:4321
echo Press Ctrl+C to stop.
echo.
call npm run dev
