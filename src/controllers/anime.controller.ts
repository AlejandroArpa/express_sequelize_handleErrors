import { Request, Response, NextFunction } from "express";
import { container } from "tsyringe";
import { AnimeService } from "../services";

export class AnimeController {
	static async getAllAnimes(_: Request, res: Response, next: NextFunction) {
		const animeService = container.resolve(AnimeService);
		const animes = await animeService.getAllAnimes();
		res.status(206).json(animes);
	}

	static async createAnime(req: Request, res: Response, next: NextFunction) {
		try {
		const animeService = container.resolve(AnimeService);
		const anime = await animeService.createAnime(req.body);
		res.status(201).json(anime);
		} catch (error) {
			next(error);
		}
		
	}
}