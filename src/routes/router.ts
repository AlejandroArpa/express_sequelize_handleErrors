import { Router } from 'express';
import { animeRouter,  directorRouter, /*studioRouter */ } from './';

export const router = Router();

router.use('/animes', animeRouter);
router.use('/directors', directorRouter);
// router.use('/studio', studioRouter);