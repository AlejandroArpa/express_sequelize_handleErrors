import { AnimeRepository } from '../repositories/';
import { injectable, inject } from 'tsyringe';
import { Animes } from '../models';
import { CreationAttributes } from 'sequelize';

@injectable()
export class AnimeService {
	constructor(@inject(AnimeRepository) private AnimeRepository: AnimeRepository) { }

	async getAllAnimes(): Promise<Animes[] | void> {
		return await this.AnimeRepository.getAllAnimes();
	}

	async createAnime(anime: CreationAttributes<Animes>): Promise<Animes | void> {
		try {
			return await this.AnimeRepository.createAnime(anime);
		} catch (error) {
			if (error instanceof Error) {
				throw new Error('Service Error: ' + error.message);
			} else {
				throw new Error('Service Error: An unknown error occurred');
			}
		}
	}
}