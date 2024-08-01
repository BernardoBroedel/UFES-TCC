import { Column, Entity, ManyToOne } from 'typeorm'
import { BaseEntity } from './BaseEntity'
import { Paciente } from './Paciente'

@Entity('sessoes')
export class Sessao extends BaseEntity {
    @Column({ nullable: true })
    data: string

    @ManyToOne(() => Paciente, (paciente) => paciente.sessoes)
    paciente: Paciente
}
