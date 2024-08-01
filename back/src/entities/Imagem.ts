import { Column, Entity } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity('imagens')
export class Imagem extends BaseEntity {
    @Column()
    name: string

    @Column({
        type: 'bytea',
    })
    data: Buffer

    @Column()
    mimeType: string

    @Column()
    nomeImagem: string
}
