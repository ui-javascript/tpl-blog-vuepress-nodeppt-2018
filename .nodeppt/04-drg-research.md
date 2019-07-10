title: DRG后台开发选型调研
speaker: aaron
theme: light
transition: slide2
headFiles: /static/css/light.css

[slide]

# DRG数据管理前台开发选型调研
## aaron

[slide]

## 开发目标

- 前台服务：
	- 原来使用AngularJS开发，管理系统，痛点在于兼容性和包管理机制
	- 由于需要兼容ie8，建议使用jQuery 1.9或者AngularJS 1.2搭配Node.js来做服务
- 数据库服务：
	- 原来使用ThinkPHP开发，痛点在于部署和包管理机制
	- 以Restful API的形式供前台服务调用
	- 可选方案：`Java`，`Python`，`Node.js`，`Golang`，`PHP`

[slide]

# 前台服务

[slide]

## 技术选型为Node.js

- 前端开发生态与解决方案丰富
- 流式打包，全站热更新，兼容性强
- 已实现 Express + gulp + npm 脚手架

[slide]

# 数据库服务

[slide]

## 技术选型之Java

- 优点：
	- 静态语言，适合大型企业与多人协作开发，生态与解决方案丰富，可扩展性强
	- 团队整体熟悉
	- 并库驱动Java版本更新及时
	- 包管理器Maven使用方便
- 缺点：
	- 前期开发速度相对缓慢
- 可用方案：
	- Spring + Maven + 并库驱动

[slide]

## 技术选型之Python

- 优点：
	- 语法糖丰富，适合现阶段做敏捷开发
	- 团队整体熟悉
	- 包管理器pip使用方便
	- 胶水语言，对接Spark等数据分析业务障碍小
- 缺点：
	- 并库驱动Python版本落后于Java版本
	- 动态语言，大型工程不可控性增强
- 可用方案：
	- Flask/Django

[slide]

## 技术选型之Node.js

- 优点：
	- 可引入TypeScript做静态语言
	- 异步处理方便，符合当前数据库服务IO密集的特点，解决方案丰富
	- 包管理器npm使用方便
- 缺点：
	- 暂无并库驱动，需要对并库进行封装才可使用
- 可用方案：
	- Koa/Express

[slide]

## 技术选型之Golang

- 优点：
	- 静态语言，容易做并发开发
	- 部署简单
- 缺点：
	- 暂无并库驱动，需要对并库进行封装才可使用
	- 生态与解决方案相对一般，比如包管理器不够完善
- 可用方案：
	- Golang可不使用框架直接做http服务

[slide]

## 技术选型之PHP

- 优点：
	- 适合现阶段做敏捷开发
	- 容易学习，上手速度快
- 缺点：
	- 暂无并库驱动，需要对并库进行封装才可使用
	- 动态语言，大型工程不可控性增强
- 可用方案：
	- Laravel

[slide]

# 现阶段最优方案为Java

[slide]

## 整体架构图

![](/static/images/DRG-research/1-arc.png)

[slide]

## DevOps解决方案

- 旨在提倡开发(Dev)和运维(Ops)在软件构建、集成、测试、发布到部署中自动化
- 协作开发：Git/Gitlab
- 持续集成：Jenkins
- 代码打包：Maven
- 容器部署：Docker

[slide]

## 下一步工作

- 数据库服务建立，对接数据平台
