const express = require('express');
const app = express();
const http = require('http').Server(app);

const mongoose = require('mongoose');

const cookieParser = require('cookie-parser');

const PORT = process.env.PORT || 3000 // Порт, если не указан в package.json - ставим 3000

const loginDB = "danbka",
      passDB = "OuqZ0rFSiKl7qB4E"; // Логин и пароль от MangoDB

// Подключаем формат файлов как hbs
const hbs = require('express-handlebars').create({
  defaultLayout: "main",
  extname: 'hbs'
})

// Даем ссылку на файл router
const routers = require('./routes/router')

// настроить ваше промежуточного программного обеспечения
app.use(express.static(__dirname + '/views'));
app.use(express.urlencoded({extended: true}))
app.engine('hbs', hbs.engine)
app.use(cookieParser());
app.use(routers)

app.set('view engine', 'hbs')
app.set('views', 'views')



async function start() {
  try {
    await mongoose.connect('mongodb+srv://' + loginDB + ':' + passDB + 
                          '@cluster0.fchyy.mongodb.net/data', 
      {
        useNewUrlParser: true,
        // useFindAndModify: false
      })

    http.listen(PORT, () => {
      console.log('listening on *:3000');
    });
  } catch (err) {
    console.log(err)
  }
}


start()