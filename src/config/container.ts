import { container } from 'tsyringe';
import { AnimeService } from '../services';
import { AnimeRepository } from '../repositories/';

container.registerSingleton<AnimeRepository>(AnimeRepository)
container.registerSingleton<AnimeService>(AnimeService);