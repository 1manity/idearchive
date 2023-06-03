# 5分钟快速入门codeql（一）

### 第一步

创建codeql目录

下载CodeQL CLI到该目录并解压

https://github.com/github/codeql-cli-binaries/releases

更改目录名字为codeql-cli

### 第二步

添加环境变量

![image-20230531115937042](/5分钟快速入门codeql.images/image-20230531115937042.png)

![image-20230531120001412](/5分钟快速入门codeql.images/image-20230531120001412.png)

![image-20230531115913648](/5分钟快速入门codeql.images/image-20230531115913648.png)

### 第三步

在该目录下

```
git clone https://github.com/github/codeql.git
```

![image-20230531115350851](/5分钟快速入门codeql.images/image-20230531115350851.png)

### 第四步

打开vscode

安装codeql插件

![image-20230531115516263](/5分钟快速入门codeql.images/image-20230531115516263.png)

### 第五步

使用命令创建database

```
codeql database create --language=<language-identifier> --source-root=<folder-to-extract> <output-folder>
```



```
codeql database create --language=java --source-root=./demo_20230531_codeqltest ./deserbug_db
```



![image-20230531201635641](/5分钟快速入门codeql.images/image-20230531201635641.png)

### 第六步 

将刚刚创建的db添加入工作区

![image-20230601204927274](/5分钟快速入门codeql.images/image-20230601204927274.png)

### 第七步

查询或编写规则查询。例

待分析的项目如下，导入了cn.hutool

![image-20230602110115209](/5分钟快速入门codeql.images/image-20230602110115209.png)

我们编写一个简单的ql脚本，找到该包中所有的类

注意事项：

> `qlpack.yml` 是 CodeQL 查询包的配置文件，它声明了查询包的依赖。如果你在编写或运行自定义查询，你需要在你的查询目录或其上级目录中创建一个 `qlpack.yml` 文件，并在其中声明你的查询依赖的库。

我们直接在codeql\codeql\java\ql\src\Security\CWE\目录下创建新的目录mycodeql，创建文件hutool.ql

![image-20230602110437203](/5分钟快速入门codeql.images/image-20230602110437203.png)

编写代码

```
import java

from Class c
where c.getPackage().getName().matches("cn.hutool%")
select c

```

![image-20230602110524487](/5分钟快速入门codeql.images/image-20230602110524487.png)

在选择的数据库中查询，得到结果

![image-20230602110603187](/5分钟快速入门codeql.images/image-20230602110603187.png)

