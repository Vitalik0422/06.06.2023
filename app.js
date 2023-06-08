const mongoose = require('mongoose')
const userModel = require('./models/user.js')
mongoose.connect('mongodb://127.0.0.1:27017/author')

const data = {
    name:'Vitalik',
    surname: 'Beniuk'    
}

const create = async () => {
    const res = await userModel.create(data);
    console.log(res)
    }
create()


const find = async () => {
    const res = await userModel.find({name:'Vitalik'});
    console.log(res)
    }
find()


const findAndUpd = async () => {
    const res = await userModel.findOneAndUpdate({name: 'Vitalik'}, {name:'Tolik'})
    console.log(res);
}
findAndUpd()

const delet = async () => {
const res = await userModel.deleteMany({name:'Tolik'});
console.log(res)
}

