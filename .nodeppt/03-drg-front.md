title: DRG前端方案制定
speaker: aaron
theme: colors
transition: slide2
headFiles: /static/css/colors.css

[slide]

# DRG前端方案制定
## aaron

[slide]

## 方案目标

<style>
code{
    font-family:"";
}
</style>

- 后台数据展示和分析系统
- 兼容`IE8`，`IE9`在内的多数浏览器
- 主要问题：IE不支持新特性且兼容性堪忧，相关插件无法使用

[slide]

## 插件支持情况
    
| 插件 | 类型 | 版本 | 支持情况 | 
|:----|:----|:----|
|jQuery|简化编程|v1.9|IE8+|
|Bootstrap|样式库|v2|IE7+|
|Bootstrap|样式库|v3|IE9+|
|vue.js|框架|v2|IE9+|
|element|vue样式库|v2|IE10+|
|iview|vue样式库|v2|IE9+，实际上IE9上有报错|
|angular.js|框架|v1|IE9+|
|datatables|表格|v1.10|IE6+，IE8下测试报错|
|echarts|图表|v2|IE6+，实际未测，v3官网未标注|

[slide]

## 解决方案：两套前端系统

- 方案一：
    - jQuery做兼容IE8的简化前端版本，基本为只显示表格信息
    - jQuery或angular.js加其他组件做IE9+以上的全部前端页面

- 方案二：
    - jQuery做兼容IE8和IE9的简化前端版本，基本为只显示表格信息
    - Vue加其他组件做IE10+以上的全部前端页面

[slide]

## 现阶段情况

- 前端jQuery方案已经搭建好脚手架
- 数据库服务使用Spring-boot已经搭建好脚手架
