const {Schema, model} = require('mongoose')

const schema = new Schema({
  login: {type: String, unique: true, required: true},
  password: {type: String, required: true},
  first_name: {type: String},
  last_name: {type: String},
  email: {type: String},
  phone: {type: String},
  birth: {type: String},
  dates: [{type: Object}],
  mess: [{type: Object}],
  psy: {type: String}
})



module.exports = model("dataUsers", schema)

// const Pool = require('pg').Pool

// const pool = new Pool({
//   user: "postgres",
//   password: "danbkadanbka",
//   host: "localhost",
//   port: 5432,
//   database: "psychological_help"
// })


// module.exports = pool