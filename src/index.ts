import express from 'express';
import sequelize from './config/db';
import {router} from './routes';
import { config } from 'dotenv';
import { errorHandler } from './middlewares/errorHandler.middleware';

config();
const { PORT } = process.env;
const app = express();
app.use(express.json());
app.use("/api", router );
app.use(errorHandler);

const launchServer = async () => {
	try {
		await sequelize.authenticate();
		await sequelize.sync();
		
		app.listen(PORT, () => {
			console.log("Server running on port " + PORT);
		});
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
}

launchServer();