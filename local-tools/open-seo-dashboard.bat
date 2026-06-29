@echo off
REM PPP SEO Dashboard launcher
REM Double-click this file to serve the site locally and open the dashboard.
REM Requires Node.js. Press Ctrl+C in this window when done to stop the server.

title PPP SEO Dashboard

REM Move to PPP root (parent of local-tools)
cd /d "%~dp0.."

echo.
echo  Starting PPP SEO Dashboard...
echo  URL: http://127.0.0.1:4173/local-tools/seo-dashboard.html
echo.

REM Open browser after 2 seconds (gives the server time to start)
start /min "" cmd /c "timeout /t 2 /nobreak >nul && start http://127.0.0.1:4173/local-tools/seo-dashboard.html"

REM Start the server (blocks until Ctrl+C)
npx -y serve . --listen 4173 --no-clipboard
