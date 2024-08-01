import { Injectable } from '@angular/core'
import { CanActivate, Router } from '@angular/router'
import { Store } from '@ngxs/store'
import { LoginState } from '../state/auth/login.state'
import {UserRole} from "../models/auth.models";
import {LoginActions} from "../state/auth/login.action";
import {AuthService} from "../../services/auth/auth.service";

@Injectable({
    providedIn: 'root',
})
export class SessionGuard implements CanActivate {
    constructor(
        private readonly router: Router,
        private readonly store: Store,
        private readonly authService: AuthService
    ) {}

    canActivate(): boolean {
        if (!this.authService.getToken()) {
            return true
        } else {
            if (!!this.authService.getToken()) {
                const token = this.authService.getToken()
                const id = this.authService.getId()
                const username = this.authService.getUsername()
                const role = this.authService.getRole()

                this.store.dispatch(
                    new LoginActions.AutenticarUsuario({
                        token,
                        id,
                        username,
                        role,
                    })
                )
                if (role === UserRole.supervisor) this.router.navigate(['/sistema/supervisor/inicio']).then()
                if (role === UserRole.reabilitador) this.router.navigate(['/sistema/reabilitador/inicio']).then()
            }
            return false
        }
    }
}
