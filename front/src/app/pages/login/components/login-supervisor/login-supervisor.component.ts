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
    selector: 'app-login-supervisor',
    templateUrl: './login-supervisor.component.html',
    styleUrls: ['./login-supervisor.component.scss'],
})
export class LoginSupervisorComponent implements OnInit {
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
            this.router.navigate(['/sistema/supervisor/inicio']).then()
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
                role: UserRole.supervisor,
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
                            .navigate(['/sistema/supervisor/inicio'])
                            .then()
                    }),
                    catchError(() => {
                        return throwError(() => {
                            this._snackBar.open(
                                'Supervisor cadastrado com sucesso!',
                                'Fechar',
                                {
                                    duration: 3000,
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
