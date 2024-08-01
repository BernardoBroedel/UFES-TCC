import { Injectable } from '@angular/core'
import { CanActivate, Router } from '@angular/router'
import { LoginState } from '../state/auth/login.state'
import { Store } from '@ngxs/store'

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(
        private readonly router: Router,
        private readonly store: Store,
    ) {}

    canActivate(): boolean {
        const isLoggedIn = this.store.selectSnapshot(LoginState.isLoggedIn)
        if (isLoggedIn) {
            return true
        } else {
            this.router.navigate(['/login']).then()
            return false
        }
    }
}
