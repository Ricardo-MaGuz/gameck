const mongoose = require("mongoose")

const gameSchema = new mongoose.Schema(
	{
		thumbnail: {
			type: String,
			default:"/images/default-thumb.jpg"
		},
		cover: {
			type: String,
			default:"/images/default-large.jpg"
		},
		title: {
			type: String,
			unique: true,
		},
		genre: {
            type: String,
            enum: ["Endless Runner", "Music", "Arcade", "Puzzle", "Platform", "Turn Base Strategy", "Shooter", "Dodging", "Shoot em up", "Action", "Brick Breaker", "Racing"]
        },
		description: String, 
		createdBy: String,
		gameSource: String,
	},
	{
		timestamps: true,
		versionKey: false,
	}
)

module.exports = mongoose.model("Game", gameSchema)