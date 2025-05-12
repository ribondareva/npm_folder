# Webpack
### 1. Установлен и настроен webpack-dev-server.
### 2. Настроен hot module replacement.
### 3. Сделана возможность запуска на разных окружениях (dev, prod) c разной конфигурацией (убран HMR на проде).
С помощью переменных окружения на странице показано в каком окружении запущен проект: dev или prod. Убедитесь, что установлены все необходимые зависимости, включая webpack, webpack-cli, webpack-dev-server, html-webpack-plugin и dotenv, husky, lint-staged. Если возникают проблемы с переменными окружения, проверьте файлы .env.development и .env.production, чтобы убедиться, что они правильно настроены.
### 4. Настроен JSON-server и на prod и dev окружениях отображаются полученные с него данные.
По эндпоинтам 
```
http://localhost:3000/posts
```
```
http://localhost:3000/comments
```
```
http://localhost:3000/profile
```
 выходят все контакты json сервера (команда в терминале json-server --watch database.json)
 Чтобы увидеть отображение данных на сайте, запустить одновременно 
 ```
npm run start
```
 и 
```
json-server --watch database.json
```
### 5. С помощью пре-коммит хуков добавлен запуск линтера при комите.
```
npx husky add .husky/pre-commit "npx lint-staged"
```





