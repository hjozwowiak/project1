import { Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @Get('name')
  getName() {
    return this.appService.getName();
  }

  @Get('list')
  getList() {
    return this.appService.getList();
  }

  // UWAGA - to poniżej jest brzydkie! Generalnie należy używać `Get` do wysyłania
  // elementów. To występuje tutaj tylko wyjątkowo na potrzeby ćwiczenia.
  @Get('/list/:element')
  addToList(@Param('element') value) {
    return this.appService.addToList(value);
  }

  @Get('zadania')
  getZadania() {
    return this.appService.getZadania();
  }

  /*
    Tutaj należy dopisać metodę dodającą zadanie (analogicznie do `addToList`)
  */
}
