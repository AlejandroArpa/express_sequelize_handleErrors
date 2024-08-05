import { injectable } from "tsyringe";
import { Directors } from "../models";
import { CreationAttributes } from 'sequelize';

@injectable()
export class DirectorRepository {
	
	async getAllDirectors(): Promise<Directors[] | void> {
		try {
			return await Directors.findAll();
		} catch (error) {
			console.log(error);
			
			this.handleSequelizeError(error);
		}
		
	}

	async createDirector(director: CreationAttributes<Directors>): Promise<Directors> {
		return await Directors.create(director);
	}

	private handleSequelizeError(error: any) {
		if (error instanceof Error) {
			throw new Error('Repository Error: ' + error.message);
	} else {
			throw new Error('Repository Error: An unknown error occurred');
	}
}
}