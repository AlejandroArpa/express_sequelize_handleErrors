import { Router } from 'express';
import { DirectorController } from '../controllers/';

export const directorRouter = Router();

directorRouter.get('/', DirectorController.getAllDirectors);
// animeRouter.get('/:id', AnimeController.getAnimeById);
directorRouter.post('/', DirectorController.createDirector);
