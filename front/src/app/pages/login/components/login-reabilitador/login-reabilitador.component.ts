import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../../../../services/auth/auth.service'
import { Router } from '@angular/router'
import { Store } from '@ngxs/store'
import { LoginState } from '../../../../core/state/auth/login.state'
import { catchError, tap, throwError } from 'rxjs'
import { LoginActions } from '../../../../core/state/auth/login.action'
import { MatSnackBar } from '@angular/material/snack-bar'
import { LoginPayload, UserRole } from '../../../../core/models/auth.models'

@Component({
    selector: 'app-login-reabilitador',
    templateUrl: './login-reabilitador.component.html',
    styleUrls: ['./login-reabilitador.component.scss'],
})
export class LoginReabilitadorComponent implements OnInit {
    loginForm: FormGroup
    hide = true

    constructor(
        private readonly formBuilder: FormBuilder,
        private readonly authService: AuthService,
        private readonly router: Router,
        private readonly store: Store,
        private readonly _snackBar: MatSnackBar
    ) {}

    ngOnInit(): void {
        const isLoggedIn = this.store.selectSnapshot(LoginState.isLoggedIn)

        if (isLoggedIn) {
            this.router.navigate(['/sistema/reabilitador/inicio']).then()
        }

        this.loginForm = this.formBuilder.group({
            username: ['', [Validators.required]],
            password: ['', Validators.required],
        })
    }

    login() {
        if (this.loginForm.valid) {
            const payload: LoginPayload = {
                username: this.loginForm.value.username,
                password: this.loginForm.value.password,
                role: UserRole.reabilitador,
            }
            this.authService
                .login(payload)
                .pipe(
                    tap((res) => {
                        this.store.dispatch(
                            new LoginActions.AutenticarUsuario(res)
                        )
                        this.authService.saveStorage(res)
                        this.router
                            .navigate(['/sistema/reabilitador/inicio'])
                            .then()
                    }),
                    catchError(() => {
                        return throwError(() => {
                            this._snackBar.open(
                                'Dados incorretos, tente novamente!',
                                'Ok',
                                {
                                    duration: 5000,
                                    panelClass: ['alert-snackbar'],
                                }
                            )
                        })
                    })
                )
                .subscribe()
        } else {
            console.log('Formulário inválido.')
        }
    }
}
