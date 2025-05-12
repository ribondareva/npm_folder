С помощью переменных окружения на странице показано в каком окружении запущен проект: dev или prod. Убедитесь, что установлены все необходимые зависимости, включая webpack, webpack-cli, webpack-dev-server, html-webpack-plugin и dotenv.

Если возникают проблемы с переменными окружения, проверьте файлы .env.development и .env.production, чтобы убедиться, что они правильно настроены.
По эндпоинтам 
http://localhost:3000/posts
http://localhost:3000/comments
http://localhost:3000/profile
 выходят все контакты json сервера (команда в терминале json-server --watch database.json)
 Чтобы увидеть отображение данных на сайте, запустить одновременно npm run start и json-server --watch database.json
