import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Animal } from './entities/animal.entity';
import { Zadanie } from './entities/zadanie.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Zadanie)
    private zadanieRepository: Repository<Zadanie>,

    @InjectRepository(Animal)
    private animalRepository: Repository<Animal>,
  ) {}

  getName() {
    let name = 'Moje imię!'; // przypisanie wartości do zmiennej
    return name; // zwrócenie wartości zmiennej "name"
  }

  async getZadania() {
    const zadania = await this.zadanieRepository.find(); // pobranie wszystkich zadań z bazy danych i przypisanie ich do stałej "zadania"

    return zadania; // zwrócenie wartości stałej "zadania"
  }

  async getZadanieById(id) {
    const zadanie = await this.zadanieRepository.findOne(id); // pobranie zadania od ID równym "id" z bazy danych i przypisanie do stałej "zadanie"

    return zadanie; // zwrócenie wartości stałej "zadanie"
  }

  async addZadanie(values) {
    const zadanie = new Zadanie(); // utworzenie pustego obiektu "Zadanie" (zdefiniowanego w pliku `zadanie.entity.ts`)

    zadanie.tytul = values.tytul; // przypisanie wartości zmiennej "values" spod klucza "tytul" do klucza "tytul" obiektu "Zadanie"
    zadanie.opis = values.opis; // przypisanie wartości zmiennej "values" spod klucza "opis" do klucza "opis" obiektu "Zadanie"
    zadanie.status = values.status; // przypisanie wartości zmiennej "values" spod klucza "status" do klucza "status" obiektu "Zadanie"

    await zadanie.save(); // zapisanie obiektu "Zadanie" znajdującego się w stałej "zadanie" do bazy danych
    return zadanie; // dobrą praktyką jest zwracanie dodawanego elementu (nie jest to jednak konieczne do działania programu)
  }

  async updateZadanieById(id, values) {
    let zadanie = await this.getZadanieById(id); // pobranie zadania o ID "id"

    zadanie.tytul = values.tytul; // aktualizacja tytułu pobranego zadania
    zadanie.opis = values.opis; // aktualizacja opisu pobranego zadania
    zadanie.status = values.status; // aktualizacja statusu pobranego zadania

    await zadanie.save(); // zapisanie zaktualizowanego zadania do bazy danych
    return zadanie; // zwrócenie zaktualizowanego zadania
  }

  async deleteZadanieById(id) {
    await this.zadanieRepository.delete(id); // usunięcie z bazy danych zadania o ID "id"
  }

  // TODO: poniżej dopisz metody wykorzystywane przez kontroler
}
