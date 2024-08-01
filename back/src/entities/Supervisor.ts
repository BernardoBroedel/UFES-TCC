import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { BaseEntity } from './BaseEntity'
import { User } from './User'
import { Imagem } from './Imagem'

@Entity('supervisores')
export class Supervisor extends BaseEntity {
    @OneToOne(() => User, (user) => user.supervisor)
    @JoinColumn()
    user: User

    @Column({ nullable: true })
    nome: string

    @OneToOne(() => Imagem)
    @JoinColumn()
    imagem: Imagem
}
