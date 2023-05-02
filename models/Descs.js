
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const descsSchema = new Schema({
Underscoreid:String , 


desc:String 



})

module.exports = {
  Descs : mongoose.model('descs', descsSchema),
}

