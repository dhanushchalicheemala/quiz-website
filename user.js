var mongoose = require('mongoose');
var Schema = mongoose.Schema;

userSchema = new Schema( {
    id: Number,
	name: {type:String,unique:true},
	email: {type:String,unique:true},
	password: {type:String},
	confpassword: {type:String}
}),
User = mongoose.model('User', userSchema);

module.exports = User;