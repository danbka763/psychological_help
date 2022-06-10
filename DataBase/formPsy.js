const {Schema, model} = require('mongoose')

const schema = new Schema({
  psy: {type: String, required: true},
  birth: {type: String},
  university: {type: String},
  phone: {type: String, unique: true, required: true},
  email: {type: String},
  about: {type: String}
})

module.exports = model("dataPsyForm", schema)