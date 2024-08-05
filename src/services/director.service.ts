import { DirectorRepository } from '../repositories/';
import { injectable, inject } from 'tsyringe';
import { Directors } from '../models';
import { CreationAttributes } from 'sequelize';

@injectable()
export class DirectorService {
	constructor(@inject(DirectorRepository) private DirectorRepository: DirectorRepository) { }

	async getAllDirectors(): Promise<Directors[] | void> {
		return await this.DirectorRepository.getAllDirectors();
	}

	async createDirector(director: CreationAttributes<Directors>): Promise<Directors | void> {
		try {
			return await this.DirectorRepository.createDirector(director);
		} catch (error) {
			if (error instanceof Error) {
				throw new Error('Service Error: ' + error.message);
			} else {
				throw new Error('Service Error: An unknown error occurred');
			}
		}
	}
}