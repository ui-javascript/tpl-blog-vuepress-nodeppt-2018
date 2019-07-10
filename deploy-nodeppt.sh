#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build:nodeppt

# 进入生成的文件夹
cd .nodeppt/dist

#创建.nojekyll 防止Github Pages build错误
touch .nojekyll

git init
git add -A
git commit -m '麻木发布'

git push -f "git@github.com:luo0412/ppt-web.git" master:gh-pages

cd -
