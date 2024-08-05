import { Request, Response, NextFunction } from "express";
import { container } from "tsyringe";
import { DirectorService } from "../services";

export class DirectorController {
	static async getAllDirectors(_: Request, res: Response, next: NextFunction) {
		const directorService = container.resolve(DirectorService);
		const directors = await directorService.getAllDirectors();
		res.status(206).json(directors);
	}

	static async createDirector(req: Request, res: Response, next: NextFunction) {
		try {
		const directorService = container.resolve(DirectorService);
		const director = await directorService.createDirector(req.body);
		res.status(201).json(director);
		} catch (error) {
			next(error);
		}
	}
}