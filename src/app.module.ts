import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonaController } from './controllers/persona.controller';
import { UbigeoController } from './controllers/ubigeo.controller';
import { PersonaEntity } from './entities/persona.entity';
import { UbigeoEntity } from './entities/ubigeo.entity';
import { PersonaServices } from './services/persona.services';
import { UbigeoService } from './services/ubigeo.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "oracle",
      host: "localhost",
      port: 1521,
      username: "DBSOFTBLOOM",
      password: "@abc123@",
      sid: "xe",
      entities: [__dirname + "/**/**.entity{.ts,.js}"],
      synchronize: false,
      logging: true
    }),
    TypeOrmModule.forFeature([UbigeoEntity, PersonaEntity])
  ],
  controllers: [AppController, UbigeoController, PersonaController],
  providers: [AppService, UbigeoService, PersonaServices],
})
export class AppModule { }
