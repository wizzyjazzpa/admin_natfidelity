const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
       username:{
         type:String,
         default:"Admin"
    },

    password:{
         type:String,
         default:"11223344E"
    }
       

})

module.exports = mongoose.model("Admin",AdminSchema);