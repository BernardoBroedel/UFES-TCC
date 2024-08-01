import { Action, Selector, State, StateContext } from '@ngxs/store'
import { Injectable } from '@angular/core'
import { LoginActions } from './login.action'
import { patch } from '@ngxs/store/operators'
import {UserRole} from "../../models/auth.models";
// import { UserRole } from '../../../core/models/user.models'

type PaginaLoginModel = {
    isLoggedIn: boolean
    id: string
    username: string
    role: UserRole
}

@State<PaginaLoginModel>({
    name: 'PaginaLogin',
    defaults: {
        isLoggedIn: false,
        id: '',
        username: '',
        role: UserRole.paciente,
    },
})
@Injectable()
export class LoginState {
    @Selector()
    static isLoggedIn(state: PaginaLoginModel): boolean {
        return state.isLoggedIn
    }

    @Selector()
    static userId(state: PaginaLoginModel): string {
        return state.id
    }

    @Selector()
    static username(state: PaginaLoginModel): string {
        return state.username
    }

    @Selector()
    static userRole(state: PaginaLoginModel): UserRole {
        return state.role
    }

    @Action(LoginActions.AutenticarUsuario)
    autenticarUsuario(
        context: StateContext<PaginaLoginModel>,
        action: LoginActions.AutenticarUsuario
    ) {
        const payload = action.payload

        context.setState(
            patch({
                isLoggedIn: true,
                id: payload.id!,
                username: payload.username!,
                role: payload.role!,
            })
        )
    }

    @Action(LoginActions.DeslogarUsuario)
    deslogarUsuario(context: StateContext<PaginaLoginModel>) {
        context.setState(
            patch({
                isLoggedIn: false,
                id: '',
                username: '',
                role: null,
            })
        )
    }
}
