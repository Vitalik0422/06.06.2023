const mongoose = require('mongoose')

const {Schema} = mongoose;

const schema = new Schema({
    name:{type:String},
    surname:{type:String}
})
const model = mongoose.model('user', schema)
module.exports = model;