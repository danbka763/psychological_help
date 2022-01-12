const { Router } = require('express')
const router = Router()
const {check} = require('express-validator')
const jwt = require('jsonwebtoken')

const { secret } = require('../config/config')

const authController = require('../controllers/authController')

router.get("/", (req, res) => {
  res.render('index', {
    title: "Психологическая помощь медицинским работникам",
    isMain: true
  })
})


router.get("/profile", (req, res) => {
  jwt.verify(req.cookies.token, secret, (err, decoded) => {
    if (err) {
      res.redirect('/profile/login')
    }
    else {
      res.render('index', {
        title: "Личный кабинет",
        isProfile: true,
        user: decoded.login
      })
    }
  })
})


router.get("/profile/login", (req, res) => {
  jwt.verify(req.cookies.token, secret, (err, decoded) => {
    if (!err) {
      res.redirect('/profile')
    }
    else {
      res.render('index', {
        title: "Авторизация",
        isProfile: true,
        isAuth: true,
        dot2: true
      })
    }
  })
})


router.get("/profile/registration", (req, res) => {
  jwt.verify(req.cookies.token, secret, (err, decoded) => {
    if (!err) {
      res.redirect('/profile')
    }
    else {
      res.render('index', {
        title: "Регистрация",
        isProfile: true,
        isRegistation: true,
        dot2: true
      })
    }
  })
})


router.post(
  '/profile/login', 
  [
    check('login', "Имя пользователя не может быть пустым").notEmpty(),
    check('pass', "Пароль должен быть больше 4 и меньше 16 символов").isLength({min: 4, max: 16})
  ], 
  authController.auth
)


router.post(
  '/profile/registration', 
  [
    check('login', "Имя пользователя не может быть пустым").notEmpty(),
    check('pass', "Пароль должен быть больше 4 и меньше 16 символов").isLength({min: 4, max: 16})
  ], 
  authController.registration
)


module.exports = router