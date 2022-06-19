###package.json 中的bin:在进行npm link 的时候，将对应的路径为入口文件，则const shan = require('shan')；首先进入的就是Bin指定的目录下。

npm link   将目前的包以名称软连接到本地的全局npm包中
npm link bao  在另一个文件中可以从全局npm包中拿到bao工具，在自己的node_modules中可以找到包

npm ls -g --depth=0   可以看到目前的全局npm包

npm uninstall -g bao   从全局npm包中删除指定包