const mongoose = require('mongoose');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
	name : {
		type : String,
		trim : true,
		maxlength : 32,
		required : true
	},
	email : {
		type: String,
		trim: true,
		required : true,
		unique : true
	},
	hashed_password : {
		type: String,
		required: true
	},
	about : {
		type: String,
		trim: true
	},
	salt : String,
	role : {
		type: Number,
		default: 0
	},
	history : {
		type : Array,
		defalt : []
	}
	},
 	{timestamp : true}
);

userSchema.methods = {
	encryptPassword : function(password){
		if(!password) return '';
		return crypto.createHmac('sha1', this.salt)
				.update(password)
				.digest(hex)
	} 
}

module.exports = mongoose.model('User', userSchema);