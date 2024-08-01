import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { CadastroService } from '../../../services/cadastro/cadastro.service'
import { EdpEnum } from '../../../core/models/util.models'
import { tap } from 'rxjs'
import { MatDialogRef } from '@angular/material/dialog'

@Component({
  selector: 'app-modal-novo-paciente',
  templateUrl: './modal-novo-paciente.component.html',
  styleUrls: ['./modal-novo-paciente.component.scss']
})
export class ModalNovoPacienteComponent implements OnInit {
    novoPaciente: FormGroup
    edpEnum = EdpEnum;

    constructor(
        private readonly fb: FormBuilder,
        private readonly dialogRef: MatDialogRef<ModalNovoPacienteComponent>,
        private readonly cadastroService: CadastroService
    ) {}

    ngOnInit(): void {
        this.novoPaciente = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(6)]],
            dataNascimento: [new Date(), [Validators.required, Validators.minLength(6)]],
            numeroProntuario: ['', [Validators.required, Validators.minLength(6)]],
            edp: [EdpEnum.EDP1, [Validators.required]],
        })
    }

    onSubmit(): void {
        if (this.novoPaciente.valid) {
            this.cadastroService
                .cadastrarPaciente(this.novoPaciente.value)
                .pipe(
                    tap(() => {
                        this.dialogRef.close()
                    })
                )
                .subscribe()
        }
    }
}
