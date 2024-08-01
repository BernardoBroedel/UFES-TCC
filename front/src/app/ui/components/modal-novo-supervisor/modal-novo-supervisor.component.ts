import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { CadastroService } from '../../../services/cadastro/cadastro.service'
import { tap } from 'rxjs'
import { MatDialogRef } from '@angular/material/dialog'

@Component({
    selector: 'app-modal-novo-supervisor',
    templateUrl: './modal-novo-supervisor.component.html',
    styleUrls: ['./modal-novo-supervisor.component.scss'],
})
export class ModalNovoSupervisorComponent implements OnInit {
    novoSupervisor: FormGroup

    constructor(
        private readonly fb: FormBuilder,
        private readonly dialogRef: MatDialogRef<ModalNovoSupervisorComponent>,
        private readonly cadastroService: CadastroService
    ) {}

    ngOnInit(): void {
        this.novoSupervisor = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(6)]],
            username: ['', [Validators.required, Validators.minLength(6)]],
            password: ['', [Validators.required, Validators.minLength(6)]],
        })
    }

    onSubmit(): void {
        if (this.novoSupervisor.valid) {
            this.cadastroService
                .cadastrarSupervisor(this.novoSupervisor.value)
                .pipe(
                    tap(() => {
                        this.dialogRef.close()
                    })
                )
                .subscribe()
        }
    }
}
