import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntity } from './BaseEntity'
import { Paciente } from "./Paciente";

@Entity('anexos')
export class Anexo extends BaseEntity {
    @Column()
    name: string

    @Column({
        type: 'bytea',
    })
    data: Buffer

    @Column()
    mimeType: string

    @Column()
    nomeAnexo: string

    @ManyToOne(() => Paciente, (paciente) => paciente.anexos)
    paciente: Paciente
}
