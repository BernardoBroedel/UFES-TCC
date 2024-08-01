import { EdpEnum } from './enums'

export interface SobrePaciente {
    nome: string
    nascimento: string
    prontuario: string
    edp: EdpEnum
    cpf: string
    rg: string
    sobre_orelha_direita: string
    marca_orelha_direita: string
    modelo_orelha_direita: string
    sobre_orelha_esquerda: string
    marca_orelha_esquerda: string
    modelo_orelha_esquerda: string
}
