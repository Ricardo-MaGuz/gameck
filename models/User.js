const mongoose = require("mongoose")
const PLM = require("passport-local-mongoose")
const Schema = mongoose.Schema

const userSchema = new mongoose.Schema(
{
	name: {
		type: String,
	},
	email: {
		type: String,
	},
	password: String,
	role: {
		type: String, 
		enum: ["Admin", "Gamer", "Hacker"],
		default: "Gamer"
	},
	status: {
		type: String,
		enum: ["Pending Confirmation", "Active", "Banned"],
		default: "Pending Confirmation"
	}, 
	confirmationCode: {
		type: String,
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
	photoURL: String,
	coverURL: String
	}
)

userSchema.plugin(PLM, {usernameField: "email" })
module.exports = mongoose.model("User", userSchema)