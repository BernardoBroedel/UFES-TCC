import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar'
import { tap } from 'rxjs'
import { AdminService } from './admin.service'

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
    public createSupervisorForm!: FormGroup
    constructor(
        private formBuilder: FormBuilder,
        private readonly service: AdminService,
        private readonly _snackBar: MatSnackBar
    ) {}

    ngOnInit(): void {
        this.createSupervisorForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
        })
    }

    createSupervisor() {
        this.service
            .cadastrarSupervisor(this.createSupervisorForm.value)
            .pipe(
                tap((res) => {
                    if (res) {
                        this._snackBar.open(
                            'Supervisor cadastrado com sucesso!',
                            'Fechar',
                            {
                                duration: 3000,
                            }
                        )
                    } else {
                        this._snackBar.open(
                            'Erro ao cadastrar supervisor!',
                            'Fechar',
                            {
                                duration: 3000,
                            }
                        )
                    }
                })
            )
            .subscribe()
    }
}
