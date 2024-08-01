export interface LoginPayload {
    username: string;
    password: string;
    role:  UserRole;
}

export interface LoginSession {
    token: string
    id: string
    username: string
    role: UserRole
}

export enum UserRole {
    supervisor,
    reabilitador,
    paciente
}
