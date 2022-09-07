const { app } = require('./app');
const { db } = require('./utils/database.util');

// Models
const { User } = require('./models/user.model');
const { Post } = require('./models/post.model');

const startServer = async () => {
	try {
		// Database authenticated
		await db.authenticate();

		// Establish models relations
	
		// 1 Movie <----> M Review
		User.hasMany(Post, { foreignKey: "userId" });
		Post.belongsTo(User);

		// Database synced
		await db.sync();

		// Set server to listen
		const PORT = 4000;

		app.listen(PORT, () => {
			console.log('Express app running!');
		});
	} catch (error) {
		console.log(error);
	}
};

startServer();
