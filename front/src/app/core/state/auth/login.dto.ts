import {UserRole} from "../../models/auth.models";

export namespace LoginDto {
    export interface AutenticarUsuario {
        token: string | null
        id: string | null
        username: string | null
        role: UserRole | null
    }
}
