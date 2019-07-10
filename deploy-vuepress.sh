#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn run build:vuepress

# 进入生成的文件夹
cd ./.vuepress/dist

#创建.nojekyll 防止Github Pages build错误
touch .nojekyll

# 如果是发布到自定义域名
# echo 'nice.lovejade.cn' > CNAME

git init
git add -A
git commit -m '麻木发布'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:luo0412/luo0412.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:luo0412/blog-web.git master:gh-pages

cd -
