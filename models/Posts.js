
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postsSchema = new Schema({
Underscoreid:String 



})

module.exports = {
  Posts : mongoose.model('posts', postsSchema),
}

