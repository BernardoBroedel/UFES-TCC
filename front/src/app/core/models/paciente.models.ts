import { EdpEnum, OrelhaEnum } from './util.models'

export interface PacienteListaFormatado {
    id: string;
    nome: string;
    imagem: string;
    idade: number;
    dataNascimento: Date
}

export interface PacienteLista {
    id: string;
    nome: string;
    imagem: string;
    idade: number;
    nascimento: string
}

export interface SobrePacienteRequest {
    nome: string;
    nascimento: string;
    prontuario: string;
    edp: EdpEnum;
    cpf?: string;
    rg?: string;
    sobre_orelha_direita?: string;
    marca_orelha_direita?: string;
    modelo_orelha_direita?: string;
    sobre_orelha_esquerda?: string;
    marca_orelha_esquerda?: string;
    modelo_orelha_esquerda?: string;
}

export interface SobrePaciente {
    nome: string;
    nascimento: Date;
    prontuario: string;
    edp: EdpEnum;
    cpf?: string;
    rg?: string;
    sobre_orelha_direita?: string;
    marca_orelha_direita?: string;
    modelo_orelha_direita?: string;
    sobre_orelha_esquerda?: string;
    marca_orelha_esquerda?: string;
    modelo_orelha_esquerda?: string;
}
