@echo off
cd /d "%~dp0"
echo.
echo Life in Your 50s - local preview
echo --------------------------------
echo Opening http://localhost:8000/
echo Press Ctrl+C when you are finished.
echo.

where py >nul 2>&1
if %errorlevel%==0 (
    start "" cmd /c "timeout /t 1 /nobreak >nul & start http://localhost:8000/"
    py -m http.server 8000
    goto :eof
)

where python >nul 2>&1
if %errorlevel%==0 (
    start "" cmd /c "timeout /t 1 /nobreak >nul & start http://localhost:8000/"
    python -m http.server 8000
    goto :eof
)

echo Python was not found on this computer.
echo Open PowerShell in this folder and use any local web server you prefer.
pause
