const mongoose = require('mongoose');

const menu = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true
    }
})

  const getMenu = mongoose.model('menu', menu);

  module.exports = getMenu;