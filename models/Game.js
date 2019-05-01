const mongoose = require("mongoose")

const gameSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			unique: true,
		},
		genre: {
            type: String,
            enum: ["Endless Runner", "Music", "Arcade", "Puzzle", "Beat'em Up", "Educational", "Rythm", "Platformer", 
            "Shoot'em Up", "Shooter", "Action", "Brick Breaker", "Action", "Turn Based Strategy", "Racing"]
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