import { Module } from '@nestjs/common';
import { typeOrmConfig } from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ZadanieRepository } from './repositories/zadanie.repository';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    AppModule,
    TypeOrmModule.forFeature([ZadanieRepository]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
