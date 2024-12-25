const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName:{
    type: String,
    required:true,
},
lastName:{
    type: String,
    required:true,
},
userBio:{
    type: String,
    required:true,
},
userEmail:{
    type: String,
    required:true,
},
userMobile:{
    type: Number,
    required:true,
},
userName:{
    type: String,
    required:true,
},
userPassword:{
    type: String,
    required:true,
},
profileImage:{
    type: String, 
    required:true,
},
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
