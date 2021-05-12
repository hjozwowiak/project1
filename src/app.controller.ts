import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/name')
  getName() {
    return this.appService.getName();
  }

  @Get('/zadania')
  getZadania() {
    return this.appService.getZadania();
  }

  @Get('/zadania/:id')
  getZadanieById(@Param('id') id) {
    return this.appService.getZadanieById(id);
  }

  @Post('/zadania')
  addZadanie(@Body() values) {
    return this.appService.addZadanie(values);
  }

  @Patch('/zadania/:id')
  updateZadanieById(@Param('id') id, @Body() values) {
    return this.appService.updateZadanieById(id, values);
  }

  @Delete('/zadania/:id')
  deleteZadanieById(@Param('id') id) {
    return this.appService.deleteZadanieById(id);
  }

  // TODO: ------ uzupełnij poniższe endpointy ------
  // 1. Dodanie metody oraz adresu
  // 2. Jeśli potrzeba - dodanie parametrów @Param i/lub @Body
  // 3. Dodanie `return` uruchamiającego metodę z serwisu `app.service.ts` (metody w serwisie należy utworzyć)

  // TODO: pobieranie wszystkich zwierząt
  getAnimals() {}

  // TODO: pobieranie zwierzęcia o danym ID
  getAnimalById() {}

  // TODO: dodawanie zwierzęcia
  addAnimal() {}

  // TODO: aktualizacja zwierzęcia o danym ID
  updateAnimalById() {}

  // TODO: usuwanie zwierzęcia
  deleteAnimalById() {}
}
