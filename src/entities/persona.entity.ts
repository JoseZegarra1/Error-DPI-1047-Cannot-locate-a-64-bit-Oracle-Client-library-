import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'PERSONA' })
export class PersonaEntity {
  @PrimaryColumn({ name: 'IDPER', nullable: false })
  idPersona: number;

  @Column({ name: 'DNIPER', nullable: false })
  dniPersona: string;

  @Column({ name: 'NOMPER', nullable: false })
  nombrePersona: string;

  @Column({ name: 'APEPER', nullable: false })
  apellidoPersona: string;

  @Column({ name: 'CELPER', nullable: false })
  celularPersona: string;

  @Column({ name: 'DIRPER', nullable: false })
  direccionPersona: string;

  @Column({ name: 'EMAPER', nullable: false })
  correoPersona: string;

  @Column({ name: 'ESTPER', nullable: false })
  estadoPersona: string;

  @Column({ name: 'TIPPER', nullable: false })
  tipoPersona: string;

  @Column({ name: 'SUEPER', nullable: false })
  sueldoPersona: string;

  @Column({ name: 'CODUBI', nullable: false })
  codigoUbigeo: string;
}
