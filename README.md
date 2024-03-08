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

