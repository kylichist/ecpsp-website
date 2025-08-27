# Базовый образ с Node.js для сборки проекта
FROM node:22-alpine AS build

# Установка рабочей директории
WORKDIR /app

# Копирование файлов зависимостей проекта
COPY package*.json ./

# Установка зависимостей
RUN npm clean-install

# Копирование остальных файлов проекта
COPY public ./public
COPY src ./src

# Сборка проекта
RUN npm run build

# Финальный образ с Nginx
FROM nginx:alpine

# Копирование собранного проекта из этапа сборки
COPY --from=build /app/build /usr/share/nginx/html

# Копирование конфигурации Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Маркировка, что контейнер слушает на порту 80
EXPOSE 80

# Запуск Nginx в фоновом режиме
CMD ["nginx", "-g", "daemon off;"]
