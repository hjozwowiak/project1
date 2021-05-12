import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Zadanie extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tytul: string;

  @Column()
  opis: string;

  @Column()
  status: string;
}
