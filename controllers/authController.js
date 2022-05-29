const bcrypt = require('bcryptjs')
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')

const {secret} = require('../config/config')
const reg = require('../DataBase/regAndAuth')


const generateAccessToken = (id, login) => {
  const payload = {
    id,
    login
  }

  return jwt.sign(payload, secret, {expiresIn: "24h"})
}


class authController {
  async auth(req, res) {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({message: "Ошибка при авторизации", errors})
    }
    
    const {login, pass} = req.body

    const user = await reg.findOne({login})
    if (!user) {
      return res.status(400).json({message: "Пользователя с таким именем не существует"})
    }

    const validPass = bcrypt.compareSync(pass, user.password)
    if (!validPass) {
      return res.status(400).json({message: "Введен неверный пароль"})
    }

    const token = generateAccessToken(user._id, user.login)

    res.cookie('token', token)

    return res.redirect('/profile')
  }



  async registration(req, res) {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({message: "Ошибка при регистрации", errors})
    }
    
    const {login, pass} = req.body
    
    const candidate = await reg.findOne({login})
    if (candidate) {
      return res.status(400).json({message: "Пользователь с таким именем существует"})
    }

    const hashPass = bcrypt.hashSync(pass, 7)
    
    await new reg({
      login: login, 
      password: hashPass
    }).save()

    const user = await reg.findOne({login})

    const token = generateAccessToken(user._id, user.login)
    res.cookie('token', token)

    return res.redirect('/profile')
  }

  

  async editData(req, res) {
    const {first_name, last_name, email, phone, birth} = req.body

    let login

    jwt.verify(req.cookies.token, secret, (err, decoded) => {
      login = decoded.login
    })

    console.log(req.body, login, "editData")

    let data = {}
    if (first_name) data.first_name = first_name
    if (first_name) data.last_name = last_name
    if (email) data.email = email
    if (phone) data.phone = phone
    if (birth) data.birth = birth

    await reg.updateOne({login: login}, {$set: data})

    return res.redirect('/profile')
  }


  async reception(req, res) {
    let login

    jwt.verify(req.cookies.token, secret, (err, decoded) => {
      login = decoded.login
    })

    console.log(req.body, login, 'reception')

    const user = await reg.findOne({login})

    await reg.updateOne({login: login}, {$push: {dates: {...req.body, psy: user.psy}}})

    return res.redirect('/profile')
  }


  async getData(login) {
    const user = await reg.findOne({login})
    
    return user
  }

  async choose_psy(req, res) {
    let login 

    jwt.verify(req.cookies.token, secret, (err, decoded) => {
      login = decoded.login
    })

    console.log(req.body.psy, login, 'choose')

    await reg.updateOne({login: login}, {$set: {psy: req.body.psy}})

    return res.redirect('/profile')
  }
}


module.exports = new authController()