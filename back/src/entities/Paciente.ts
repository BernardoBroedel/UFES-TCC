import {
    Column,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    OneToMany,
    OneToOne,
} from 'typeorm'
import { BaseEntity } from './BaseEntity'
import { User } from './User'
import { Imagem } from './Imagem'
import { Anexo } from './Anexo'
import { Reabilitador } from './Reabilitador'
import { Sessao } from './Sessao'
import { EdpEnum, SituacaoEnum } from '../models/enums'

@Entity('pacientes')
export class Paciente extends BaseEntity {
    @OneToOne(() => User, (user) => user.paciente)
    @JoinColumn()
    user: User

    @Column({ nullable: true })
    nome: string

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

    @Column({ nullable: true })
    prontuario: string

    @Column({ nullable: true })
    nascimento: string

    @Column({ nullable: true })
    cpf: string

    @Column({ nullable: true })
    rg: string

    @Column({ nullable: true })
    sobre_orelha_direita: string

    @Column({ nullable: true })
    marca_orelha_direita: string

    @Column({ nullable: true })
    modelo_orelha_direita: string

    @Column({ nullable: true })
    sobre_orelha_esquerda: string

    @Column({ nullable: true })
    marca_orelha_esquerda: string

    @Column({ nullable: true })
    modelo_orelha_esquerda: string

    @OneToOne(() => Imagem)
    @JoinColumn()
    imagem: Imagem

    @OneToMany(() => Anexo, (anexos) => anexos.paciente)
    anexos: Anexo[]

    @ManyToMany(() => Reabilitador, (reabilitador) => reabilitador.pacientes)
    @JoinTable()
    reabilitadores: Reabilitador[]

    @OneToMany(() => Sessao, (sessoes) => sessoes.paciente)
    sessoes: Sessao[]
}
