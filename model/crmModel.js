const mongoose = require('mongoose');
const Schema=mongoose.Schema;
const todoSchema = new Schema({
    item:{type:String}

});
let crmModel=mongoose.model("todo",todoSchema);
module.exports={crmModel};
