import { EntityRepository, Repository } from 'typeorm';
import { Animal } from '../entities/animal.entity';

@EntityRepository(Animal)
export class ZadanieRepository extends Repository<Animal> {}
