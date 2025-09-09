# О проекте

Небольшое SPA приложение для ЭЦ ПСП.\
Стек технологий:

- Node 22.18
- React 19
- Caddy
- Docker.

Посмотреть можно [тут](https://ecpsp.ru).

## Пререквизиты и запуск

Обязательные пререквизиты:

- Docker
- Node 22.18

Опциональные пререквизиты:

- mkcert

## Локальный запуск

1/ Для запуска в локально требуется WebStorm (желательно) и mkcert.\
Конфигурация для запуска в Webstorm уже настроена (смотреть файл `.idea/runConfigurations/ecpsp_website.xml`).\
При использовании другой среды разработки, необходимо создать конфигурацию запуска вручную, взяв за образец данные из
run configuration для WebStorm (ports, mounts, volumes, build arguments).\
2/ С помощью mkcert _можно_ создать сертификаты для `localhost` (если хотите запускать по https):

```bash
mkcert -install
mkcert localhost 127.0.0.1 ::1
```

Переименуйте полученные файлы в `localhost.pem` и `localhost-key.pem` (соответственно) и положите их в папку `certs`
проекта.\
После этого можно запускать проект в WebStorm (по кнопке) или в другой среде разработки, используя созданную вручную
конфигурацию.

## Production запуск

Предварительно требуется в рабочую папку скопировать `docker-compose.yml` или, например, загрузить с помощью `curl` с
GitHub:

```bash
curl -fsSL https://raw.githubusercontent.com/kylichist/ecpsp-website/refs/heads/master/docker-compose.yml -o docker-compose.yml
```

А после выполнить `docker compose up -d`.

## Прочее

С разработчиком можно связаться [тут](https://t.me/kylichist).
