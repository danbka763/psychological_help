const {Schema, model} = require('mongoose')

const schema = new Schema({
  login: {type: String, unique: true, required: true},
  password: {type: String, required: true},
  // message: [{type: String, ref: 'message'}]
})

module.exports = model("dataUsers", schema)