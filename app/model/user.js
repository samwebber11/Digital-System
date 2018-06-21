var mongoose = require('mongoose');
// var express=require('express');
// var express_graphql=require('express-graphql');
// var { buildSchema } =require('graphql');
var bcrypt   = require('bcrypt-nodejs');


// var schema=buildSchema(
// 	`type Query
// 	{
// 		message:String
// 	}`);

// define the schema for our user model
var userSchema = mongoose.Schema({

    local            : {
        email        : String,
        password     : String,
    },
   
});

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};


userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};


module.exports = mongoose.model('User', userSchema);