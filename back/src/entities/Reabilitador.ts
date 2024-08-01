import { Column, Entity, JoinColumn, ManyToMany, OneToOne } from 'typeorm'
import { BaseEntity } from './BaseEntity'
import { User } from './User'
import { Paciente } from './Paciente'
import { Imagem } from './Imagem'
import { EdpEnum, SituacaoEnum } from '../models/enums'

@Entity('reabilitadores')
export class Reabilitador extends BaseEntity {
    @OneToOne(() => User, (user) => user.reabilitador)
    @JoinColumn()
    user: User

    @Column({ nullable: true })
    nome: string

    @Column({ nullable: true })
    matricula: string

    @Column({ nullable: true })
    semestre: string

    @Column({
        type: 'enum',
        enum: EdpEnum,
        default: EdpEnum.edp1,
    })
    edp: EdpEnum

    @Column({
        type: 'enum',
        enum: SituacaoEnum,
        default: SituacaoEnum.ativo,
    })
    situacao: SituacaoEnum

    @OneToOne(() => Imagem)
    @JoinColumn()
    imagem: Imagem

    @ManyToMany(() => Paciente, (paciente) => paciente.reabilitadores)
    pacientes: Paciente[]
}
