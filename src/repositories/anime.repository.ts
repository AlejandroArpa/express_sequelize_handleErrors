import { injectable } from "tsyringe";
import { Animes } from "../models";
import { CreationAttributes} from 'sequelize';

@injectable()
export class AnimeRepository {
	
	async getAllAnimes(): Promise<Animes[] | void> {
		try {
			return await Animes.findAll();
		} catch (error) {
			console.log(error);
			
			this.handleSequelizeError(error);
		}
		
	}

	async createAnime(anime: CreationAttributes<Animes>): Promise<Animes> {
		return await Animes.create(anime);
	}

	private handleSequelizeError(error: any) {
		if (error instanceof Error) {
			throw new Error('Repository Error: ' + error.message);
	} else {
			throw new Error('Repository Error: An unknown error occurred');
	}
}
}