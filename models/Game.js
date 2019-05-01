const mongoose = require("mongoose")

const gameSchema = new mongoose.Schema(
	{
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
		thumbnail: String,
		cover: String,
	},
	{
		timestamps: true,
		versionKey: false,
	}
)

module.exports = mongoose.model("Game", gameSchema)