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

  /*
    Tutaj należy dopisać metodę dodającą zadanie (analogicznie do `addToList`)
  */
}
