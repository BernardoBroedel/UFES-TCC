import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { CadastroService } from '../../../services/cadastro/cadastro.service'
import { MatDialogRef } from '@angular/material/dialog'
import { tap } from 'rxjs'
import { EdpEnum } from '../../../core/models/util.models'

@Component({
  selector: 'app-modal-novo-reabilitador',
  templateUrl: './modal-novo-reabilitador.component.html',
  styleUrls: ['./modal-novo-reabilitador.component.scss']
})
export class ModalNovoReabilitadorComponent implements OnInit {
    novoReabilitador: FormGroup
    edpEnum = EdpEnum;

    constructor(
        private readonly fb: FormBuilder,
        private readonly dialogRef: MatDialogRef<ModalNovoReabilitadorComponent>,
        private readonly cadastroService: CadastroService
    ) {}

    ngOnInit(): void {
        this.novoReabilitador = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(6)]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            matricula: ['', [Validators.required, Validators.minLength(6)]],
            semestre: ['', [Validators.required]],
            edp: [EdpEnum.EDP1, [Validators.required]],
        })
    }

    onSubmit(): void {
        if (this.novoReabilitador.valid) {
            this.cadastroService
                .cadastrarReabilitador(this.novoReabilitador.value)
                .pipe(
                    tap(() => {
                        this.dialogRef.close()
                    })
                )
                .subscribe()
        }
    }

}
