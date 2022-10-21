import {
  Body,
  Controller,
  Param,
  Post,
  Get,
  Put,
  Delete,
} from '@nestjs/common';
import { PersonaServices } from '../services/persona.services';
import { PersonaEntity } from '../entities/persona.entity';

@Controller('Personas')
export class PersonaController {
  constructor(private personaServices: PersonaServices) {}

  @Post()
  async register(@Body() persona: PersonaEntity): Promise<PersonaEntity> {
    return this.personaServices.register(persona);
  }

  @Put()
  async update(@Body() persona: PersonaEntity): Promise<PersonaEntity> {
    return this.personaServices.update(persona);
  }

  @Get('idPersona')
  async findById(@Param('idPersona') idPersona: number) {
    return this.personaServices.findById(idPersona);
  }

  @Get()
  async findAll(): Promise<PersonaEntity[]> {
    return this.personaServices.findAll();
  }

  @Delete('idPersona')
  async deleteById(@Param('idPersona') idPersona: number) {
    return this.personaServices.delete(idPersona);
  }
}
