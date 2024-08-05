```
git init
npm init -y
npx tsc --init
```
```
USE animes;

CREATE TABLE studios (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100)
);

CREATE TABLE directors (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100)
);

CREATE TABLE animes (
	id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100),
    genre varchar(100),
    id_studio INT,
    FOREIGN KEY (id_studio) REFERENCES studios(id),
    id_director INT,
    FOREIGN KEY (id_director) REFERENCES directors(id)
);



DROP TABLE animes;
DROP TABLE directors;
DROP TABLE studios;
```
```
https://www.w3schools.com/tags/ref_httpmessages.asp
https://sequelize.org/docs/v6/core-concepts/model-querying-basics/
```
Join
```
import { Request, Response, NextFunction } from 'express';
import { container } from 'tsyringe';
import { AnimeService } from '../services';

export class AnimeController {
    static async getAllAnimesWithStudio(_: Request, res: Response, next: NextFunction) {
        try {
            const animeService = container.resolve(AnimeService);
            const animesWithStudio = await animeService.getAllAnimesWithStudio();
            res.status(200).json(animesWithStudio);
        } catch (error) {
            next(error); // Pasa el error al middleware de manejo de errores
        }
    }
}
```
```
import { animeRepository } from '../repositories/animeRepository';

class AnimeService {
    // Obtener todos los animes con la información del estudio
    async getAllAnimesWithStudio() {
        return await animeRepository.getAllAnimesWithStudio();
    }
}

export const animeService = new AnimeService();

```
```
import { Anime } from '../models/Anime';
import { Studio } from '../models/Studio';

class AnimeRepository {
    async getAllAnimesWithStudio() {
        try {
            return await Anime.findAll({
                include: [
                    {
                        model: Studio,
                        attributes: ['id', 'name'], // Atributos que quieres incluir del modelo Studio
                    }
                ]
            });
        } catch (error) {
            throw new Error('Database Error: ' + error.message);
        }
    }
}

export const animeRepository = new AnimeRepository();
```
Metodos
```
import { Request, Response, NextFunction } from 'express';
import { container } from 'tsyringe';
import { AnimeService } from '../services';

export class AnimeController {
    static async getAllAnimes(_: Request, res: Response, next: NextFunction) {
        try {
            const animeService = container.resolve(AnimeService);
            const animes = await animeService.getAllAnimes();
            res.status(200).json(animes);
        } catch (error) {
            next(error);
        }
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

    static async updateAnime(req: Request, res: Response, next: NextFunction) {
        try {
            const animeService = container.resolve(AnimeService);
            const anime = await animeService.updateAnime(parseInt(req.params.id, 10), req.body);
            res.status(200).json(anime);
        } catch (error) {
            next(error);
        }
    }

    static async patchAnime(req: Request, res: Response, next: NextFunction) {
        try {
            const animeService = container.resolve(AnimeService);
            const anime = await animeService.patchAnime(parseInt(req.params.id, 10), req.body);
            res.status(200).json(anime);
        } catch (error) {
            next(error);
        }
    }

    static async deleteAnime(req: Request, res: Response, next: NextFunction) {
        try {
            const animeService = container.resolve(AnimeService);
            await animeService.deleteAnime(parseInt(req.params.id, 10));
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    }
}

```
```
import { animeRepository } from '../repositories/animeRepository';

class AnimeService {
    async getAllAnimes() {
        return await animeRepository.getAllAnimes();
    }

    async createAnime(data: any) {
        return await animeRepository.createAnime(data);
    }

    async updateAnime(id: number, data: any) {
        // Validaciones adicionales o lógica de negocio
        return await animeRepository.updateAnime(id, data);
    }

    async patchAnime(id: number, data: any) {
        // Validaciones adicionales o lógica de negocio
        return await animeRepository.patchAnime(id, data);
    }

    async deleteAnime(id: number) {
        // Validaciones adicionales o lógica de negocio
        return await animeRepository.deleteAnime(id);
    }
}

export const animeService = new AnimeService();
```
```
import { Anime } from '../models/Anime';

class AnimeRepository {
    async getAllAnimes() {
        return await Anime.findAll();
    }

    async createAnime(data: any) {
        return await Anime.create(data);
    }

    async updateAnime(id: number, data: any) {
        const anime = await Anime.findByPk(id);
        if (!anime) {
            throw new Error('Anime not found');
        }
        return await anime.update(data);
    }

    async patchAnime(id: number, data: any) {
        const anime = await Anime.findByPk(id);
        if (!anime) {
            throw new Error('Anime not found');
        }
        // Aquí puedes implementar lógica específica para la actualización parcial
        return await anime.update(data);
    }

    async deleteAnime(id: number) {
        const anime = await Anime.findByPk(id);
        if (!anime) {
            throw new Error('Anime not found');
        }
        await anime.destroy();
    }
}

export const animeRepository = new AnimeRepository();

```
```
import { Router } from 'express';
import { AnimeController } from '../controllers/animeController';

const router = Router();

router.get('/animes', (req, res, next) => AnimeController.getAllAnimes(req, res, next));
router.post('/animes', (req, res, next) => AnimeController.createAnime(req, res, next));
router.put('/animes/:id', (req, res, next) => AnimeController.updateAnime(req, res, next)); // Actualización completa
router.patch('/animes/:id', (req, res, next) => AnimeController.patchAnime(req, res, next)); // Actualización parcial
router.delete('/animes/:id', (req, res, next) => AnimeController.deleteAnime(req, res, next));

export default router;

```
```
```
