import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PersonaEntity } from '../entities/persona.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PersonaServices {
  constructor(
    @InjectRepository(PersonaEntity)
    private personaRepository: Repository<PersonaEntity>,
  ) {}

  register(persona: PersonaEntity) {
    return this.personaRepository.save(persona);
  }

  update(persona: PersonaEntity) {
    return this.personaRepository.save(persona);
  }

  findAll() {
    return this.personaRepository.find();
  }

  delete(idPersona: number) {
    return this.personaRepository.delete(idPersona);
  }

  findById(idPersona: number) {
    return this.personaRepository.findBy({ idPersona });
  }
}
