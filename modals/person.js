const mongoose = require('mongoose');

const personschema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    age:{
        type:Number
    },

    work:{
        type:String,
        enum:['chef','waiter','manager'],
        require:true
    }
})


const person = mongoose.model('person', personschema);

module.exports = person;
