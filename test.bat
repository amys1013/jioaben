@echo off

::创建输出文件
if not exist output md output
::讲当前目录存入root变量中
::set "root=%cd%"

::for /D %%e in (*) do ( echo %cd%\%%e )
cd %~dp0model

::进入model文件

::for \d %%a in (%cd%\%%e\dist\(*.js)) do echo 11


for /D %%e in (*) do (
cd %cd%\%%e
if not exist %root%\output\%%e mkdir %~dp0output\%%e

cd %cd%\%%e\dist
for /r  %%a in (*.js) do copy %%a %~dp0output\%%e
)

::for %cd%\dist %%a in (*.js) do copy %%a %root%\output\%%e
::for /D %%e in (*) do (
::进入每一个模型文件

::打包     for /f %%i in (dir /s/b/a d:\*.exe) do xcopy /y "%%i" e:\111
::npm run prod
::在output中创建文件
::mkdir %root%\output\%%e
::当前文件中的dist目录下的js文件复制到%root%\output\%%e
::)

::for /D %%e in (*) do ( 
::进入每一个模型文件
::cd %cd%\%%e 

::在output中创建文件
::mkdir %root%\output\%%e



::)

pause


::echo %cd%\%%e
::在output文件下创建每个模型的文件（output也创建了）
::mkdir %cd%\output\%%e
::进入每一个文件
::echo %%e   
::打包
rem npm run prod