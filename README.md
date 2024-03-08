# github-action-test

## 概要
github actionsを使うためのテストコード

## 必要なコマンド
```
yarn add typescript --dev
tsc –-init
yarn add lodash
yarn add --dev @types/lodash
tsc
node sample.js
```

## Dockerを利用した実行
+ npm
```
docker run --rm -v "$(pwd)":/app -w /app node:latest sh -c "npm install -g typescript && npm install lodash @types/lodash && tsc && node sample.js"
```
+ yarn
```
docker run --rm -v "$(pwd)":/app -w /app node:latest sh -c "yarn add typescript --dev && yarn add lodash @types/lodash && tsc && node sample.js"
```

## 参考URL
https://zenn.dev/takeo/articles/8c06f2420c328c
https://qiita.com/suzuki0430/items/d625f8b57ae317ae7d66
https://qiita.com/shun198/items/14cdba2d8e58ab96cf95
