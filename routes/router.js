const { Router } = require('express')
const router = Router()
const {check} = require('express-validator')
const jwt = require('jsonwebtoken')

const { secret } = require('../config/config')
const { getData } = require('../controllers/authController')

const authController = require('../controllers/authController')

router.get("/", (req, res) => {
  res.render('index', {
    title: "Психологическая помощь медицинским работникам",
    isMain: true
  })
})


router.get("/form", (req, res) => {
  res.render('index', {
    title: "Форма заявки для психологов",
    isForm: true
  })
})


router.get("/succed_form", (req, res) => {
  res.render('index', {
    title: "Успешная отправка формы",
    isSucced: true
  })
})


router.get("/profile", (req, res) => {
  jwt.verify(req.cookies.token, secret, (err, decoded) => {
    if (err) {
      res.redirect('/profile/login')
    }
    else {
      getData(decoded.login).then(data => {
        console.log(data)
        res.render('index', {
          title: "Личный кабинет",
          isProfile: true,
          isProfilePages: true,
          login: data.login,
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email,
          phone: data.phone,
          birth: data.birth,
        })
      });
    }
  })
})


router.get("/profile/calendar", (req, res) => {
  jwt.verify(req.cookies.token, secret, (err, decoded) => {
    if (err) {
      res.redirect('/profile/login')
    }
    else {
      getData(decoded.login).then(data => {
        console.log(data)
        res.render('index', {
          title: "Календарь",
          isCalendar: true,
          isProfilePages: true,
          dot2: true,
          psy: data.psy,
          dates: JSON.stringify(data.dates)
        })
      });
    }
  })
})


router.get("/profile/payment", (req, res) => {
  jwt.verify(req.cookies.token, secret, (err, decoded) => {
    if (err) {
      res.redirect('/profile/login')
    }
    else {
      getData(decoded.login).then(data => {
        console.log(data)
        res.render('index', {
          title: "Оплата",
          isPayment: true,
          isProfilePages: true,
          dot2: true,
          psy: data.psy,
        })
      });
    }
  })
})


router.get("/choose_psy", (req, res) => {
  jwt.verify(req.cookies.token, secret, (err, decoded) => {
    if (err) {
      res.redirect('/profile/login')
    }
    else {
      getData(decoded.login).then(data => {
        console.log(data)
        res.render('index', {
          title: "Выбор специалиста",
          isChoose: true,
        })
      });
    }
  })
})


router.get("/profile/messenger", (req, res) => {
  jwt.verify(req.cookies.token, secret, (err, decoded) => {
    if (err) {
      res.redirect('/profile/login')
    }
    else {
      getData(decoded.login).then(data => {
        if (!data.psy) res.redirect("/choose_psy")
        console.log(data)
        res.render('index', {
          title: "Мессенджер",
          isMess: true,
          isProfilePages: true,
          dot2: true,
          psy: data.psy
          // dates: JSON.stringify(data.dates)
        })
      });
    }
  })
})


router.get("/profile/reception", (req, res) => {
  jwt.verify(req.cookies.token, secret, (err, decoded) => {
    if (err) {
      res.redirect('/profile/login')
    }
    else {
      // const data = decoded.login
      getData(decoded.login).then(data => {
        if (!data.psy) res.redirect("/choose_psy")
        res.render('index', {
          title: "Запись на консультацию",
          isReception: true,
          isProfilePages: true,
          dot2: true
        })
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
        isProfilePages: true,
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
        isProfilePages: true,
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


router.post(
  '/profile', 
  [
    check('login', "Имя пользователя не может быть пустым").notEmpty(),
    check('pass', "Пароль должен быть больше 4 и меньше 16 символов").isLength({min: 4, max: 16})
  ], 
  authController.editData
)


router.post(
  '/profile/reception', 
  [
    check('login', "Имя пользователя не может быть пустым").notEmpty(),
    check('pass', "Пароль должен быть больше 4 и меньше 16 символов").isLength({min: 4, max: 16})
  ], 
  authController.reception
)


router.post(
  '/choose_psy',
  authController.choose_psy
)


router.post(
  '/form',
  authController.form_psy
)


module.exports = router