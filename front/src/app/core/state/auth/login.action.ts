import { LoginDto } from './login.dto'

export namespace LoginActions {
    export class AutenticarUsuario {
        static readonly type = '[LOGIN] AutenticarUsuario'

        constructor(public payload: LoginDto.AutenticarUsuario) {}
    }

    export class DeslogarUsuario {
        static readonly type = '[LOGIN] DeslogarUsuario'

        constructor() {}
    }
}
