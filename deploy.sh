# @Author: YOYO [792611446@qq.com]
# @Date:   2019-09-19 10:05:39
# @Last Modified by:   YOYO [792611446@qq.com]
# @Last Modified time: 2019-09-19 10:18:31

#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果你想要部署到 https://<USERNAME>.github.io/<REPO>
git push -f git@fex:EastCenturyFE/charts-document-code.git master:gh-pages

cd -