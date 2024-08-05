import { Sequelize } from "sequelize-typescript";
import { config } from "dotenv";
import { Animes, Studios, Directors } from "../models";

config();

const { DB_NAME, DB_USER, DB_PASS, DB_HOST, DB_PORT } = process.env;

const sequelize: Sequelize = new Sequelize({
	dialect: 'mysql',
	host: DB_HOST,
	username: DB_USER,
	password: '',
	database: DB_NAME,
	models: [Animes, Studios, Directors], // Añade todos tus modelos aquí
	define: {
		underscored: true 
}
});

export default sequelize;