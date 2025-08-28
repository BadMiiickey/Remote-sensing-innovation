@echo off

REM 启动后端
cd backend
start cmd /k set PYTHONPATH=%cd% && python main.py

REM 启动前端
cd ..\frontend
start cmd /k npm run dev

REM 打开前端页面
start http://localhost:5173

cd ..