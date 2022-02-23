const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		required: [true, "Please provide a username"],
	},
	email: {
		type: String,
		required: [true, "please provide a email"],
		unique: true,
		match: [
			/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			"Please provide a valid email",
		],
	},
	password: {
		type: String,
		required: [true, "please add a password"],
		minlength: 6,
		select: true,
	},
	resetPasswordToken: String,
	resetPasswordExpire: Date,
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
