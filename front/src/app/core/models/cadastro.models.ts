import { EdpEnum } from './util.models'

export interface NovoSupervisor {
    name: string;
    username: string;
    password: string;
}

export interface NovoReabilitador {
    name: string;
    password: string;
    matricula: string;
    semestre: string;
    edp: EdpEnum;
}

export interface NovoPaciente {
    name: string;
    dataNascimento: Date;
    numeroProntuario: string;
    edp: EdpEnum;
}
