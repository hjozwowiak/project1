import { EntityRepository, Repository } from 'typeorm';
import { Zadanie } from '../entities/zadanie.entity';

@EntityRepository(Zadanie)
export class ZadanieRepository extends Repository<Zadanie> {}
