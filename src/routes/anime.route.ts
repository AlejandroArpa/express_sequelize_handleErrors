import { Router } from 'express';
import { AnimeController } from '../controllers/';

export const animeRouter = Router();

animeRouter.get('/', AnimeController.getAllAnimes);
// animeRouter.get('/:id', AnimeController.getAnimeById);
animeRouter.post('/', AnimeController.createAnime);
