import { EntityRepository, Repository } from 'typeorm';
import { Animal } from '../entities/animal.entity';

@EntityRepository(Animal)
export class AnimalRepository extends Repository<Animal> {}
