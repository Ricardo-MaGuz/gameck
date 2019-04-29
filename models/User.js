const mongoose = require("mongoose")
const PLM = require("passport-local-mongoose")

const userSchema = new mongoose.Schema(
{
	email: {
		type: String,
		unique: true,
	}, 
	user: {
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
favoriteGames: {
type:{}
},
photoURL: String,
coverURL: String
}
)

userSchema.plugin(PLM, {usernameField: "email" })
module.exports = mongoose.model("User", userSchema)
	
