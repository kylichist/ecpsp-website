# Базовый образ с Node.js для сборки проекта
FROM node:22-alpine AS build

# Установка рабочей директории
WORKDIR /app

# Копирование файлов зависимостей проекта
COPY package*.json ./

# Установка зависимостей
RUN npm clean-install --omit=dev

# Копирование остальных файлов проекта
COPY public ./public
COPY src ./src

# Сборка проекта
RUN npm run build

# Финальный образ с Caddy
FROM caddy:2.10-alpine

# Копирование собранного проекта из этапа сборки
COPY --from=build /app/build /usr/share/caddy/html

# Копируем Caddyfile в контейнер
COPY Caddyfile /etc/caddy/Caddyfile

# Создание директории для конфигурации Caddy
RUN mkdir -p /etc/caddy

# Маркировка, что контейнер слушает на портах 80 и 443
EXPOSE 80 443

# Запуск Caddy
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]
