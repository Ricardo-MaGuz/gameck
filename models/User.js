const mongoose = require("mongoose")
const PLM = require("passport-local-mongoose")
const Schema = mongoose.Schema

const userSchema = new mongoose.Schema(
{
	name: {
		type: String,
		unique: true
	},
	email: {
		type: String,
		unique: true
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
	photoURL: {
		type: String,
		default:"/images/default.jpg"
	}
	}
)

userSchema.plugin(PLM, {usernameField: "email" })
module.exports = mongoose.model("User", userSchema)