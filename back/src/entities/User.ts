import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { BaseEntity } from './BaseEntity'
import { Supervisor } from './Supervisor'
import { Reabilitador } from './Reabilitador'
import { Paciente } from './Paciente'

export enum UserRole {
    supervisor,
    reabilitador,
    paciente,
}

@Entity('users')
export class User extends BaseEntity {
    @Column()
    username: string

    @Column()
    password: string

    @Column({
        type: 'enum',
        enum: UserRole,
        default: UserRole.paciente,
    })
    role: UserRole

    @OneToOne(() => Supervisor, (supervisor) => supervisor.user)
    @JoinColumn()
    supervisor: Supervisor

    @OneToOne(() => Reabilitador, (reabilitador) => reabilitador.user)
    @JoinColumn()
    reabilitador: Reabilitador

    @OneToOne(() => Paciente, (paciente) => paciente.user)
    @JoinColumn()
    paciente: Paciente
}
