import { Module } from '@nestjs/common';
import { typeOrmConfig } from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimalRepository } from './repositories/animal.repository';
import { ZadanieRepository } from './repositories/zadanie.repository';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    AppModule,
    TypeOrmModule.forFeature([ZadanieRepository]),
    TypeOrmModule.forFeature([AnimalRepository]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
