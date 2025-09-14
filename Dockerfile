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
COPY config ./config

# Сборка проекта
RUN npm run build

# Финальный образ с Caddy
FROM caddy:2.10-alpine

# Копирование собранного проекта из этапа сборки
COPY --from=build /app/build /srv

# Определение среды (по умолчанию prod)
ARG ENVIRONMENT=prod

# Копируем нужный Caddyfile в контейнер
COPY ./caddy/${ENVIRONMENT}.Caddyfile /etc/caddy/Caddyfile

# Маркировка, что контейнер слушает на портах 80 и 443, 443/udp
EXPOSE 80 443 443/udp

# Запуск Caddy
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]
