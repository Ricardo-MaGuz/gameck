const mongoose = require("mongoose")
const PLM = require("passport-local-mongoose")
const Schema = mongoose.Schema

const userSchema = new mongoose.Schema(
{
	name: String,
	email: {
		type: String,
		unique: true,
	}, 
	role: {
		type: String, 
		enum: ["Admin", "User", "Developer"],
		default: "User"
	},
	status: {
		type: String,
		enum: ["Pending Confirmation", "Active", "Banned"],
		default: "Pending Confirmation"
	}, 
	confirmationCode: {
		type:String,
		unique: true,
	}, 
	favoriteGames: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Game'
		}
	],
	addedGames: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Game'
		}
	],
	password: String,
	photoURL: String,
	coverURL: String
	}
)

userSchema.plugin(PLM, {usernameField: "email" })
module.exports = mongoose.model("User", userSchema)
	
