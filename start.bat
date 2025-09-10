REM filepath: c:\Users\28974\Desktop\CodeJar\University Code\Remote sensing innovation\start.bat
@echo off

echo Starting Frontend and Backend Servers in a single window...

REM 直接在根目录运行 npm run dev，它会通过工作区功能同时启动前后端
start "Dev Servers" cmd /k npm run dev

REM 等待几秒钟让服务器启动
echo Waiting for servers to start...
timeout /t 5 /nobreak >nul

REM 打开前端页面
echo Opening browser at http://localhost:5173
start http://localhost:5173

echo All processes initiated. The 'Dev Servers' window is running both frontend and backend.