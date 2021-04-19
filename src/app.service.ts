import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  list = [];
  zadania = [];

  getHello() {
    return 'Hello World!';
  }

  getName() {
    let name = 'Hubert';
    return name;
  }

  getList() {
    return this.list;
  }

  addToList(value) {
    this.list.push(value);
  }

  getZadania() {
    return this.zadania;
  }

  addZadanie(value) {
    this.zadania.push(value);
  }

  getZadanieById(id) {
    console.log(id);
    return this.zadania[id];
  }
}
