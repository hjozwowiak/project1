import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql', // typ bazy danych
  host: '127.0.0.1', // adres pod jakim baza danych jest dostępna
  port: 3306, // port pod jakim baza danych jest dostępna na danym adresie
  username: 'root', // nazwa użytkownika bazy danych (domyślna)
  password: '', // hasło użytkownika bazdy danych (domyślne)
  database: 'zadania', // nazwa bazy danych
  autoLoadEntities: true,
  synchronize: true,
};
