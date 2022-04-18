# psychological_help

## Инструкция по развертыванию проекта
<br></br>
### Установка NoSQL DB PostgreSQL:

1. Ставим PostgreSQL <a src="https://www.postgresql.org/">по данной ссылке</a>
2. При установке запоминаем куда сохраняется PostgreSQL, ставим пароль и запоминаем его. Ставим порт по умолчанию <code>5432</code>.
3. Перезагружаем компьютер
4. В поисковике ищем pgAdmin и запускаем
5. Создаем БД кликом ПКМ по Databases -> Create -> Database
6. Даём имя, при необходимости ещё и коммент. Postgres - стандартный пользователь, оставляем.
7. Создаём таблицы. Слева кликаем ЛКМ по нашей базе данных и сверху нажимаем на Query tool напротив надписи Browser.
8. Берем из databaseTables.sql SQL скрипт authData, вставляем его и выполняем. У нас создана таблица логинов и паролей. Находится она у нас по пути: <b>{имя ДБ}/Schemas/public/Tables</b> То же самое выполняем с остальными таблицами. 

<br></br>
___
<br></br>
### Разворачиваем проект: 
Открываем консоль в корне проекта и пишем: 
<code>npm install</code>
Запускаем проект коммандой <code>npm run dev</code> или, если не сработало, коммандой <code>node server.js</code>