import { Component, Input, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { EdpEnum } from '../../../../core/models/util.models'
import { tap } from 'rxjs'
import { PacienteService } from '../../../../services/paciente/paciente.service'
import { MatSnackBar } from '@angular/material/snack-bar'

@Component({
    selector: 'app-sobre-paciente',
    templateUrl: './sobre-paciente.component.html',
    styleUrls: ['./sobre-paciente.component.scss'],
})
export class SobrePacienteComponent implements OnInit {
    @Input() pacienteId: string
    pacienteForm: FormGroup
    edpEnum = EdpEnum

    constructor(
        private readonly fb: FormBuilder,
        private readonly pacienteService: PacienteService,
        private readonly _snackBar: MatSnackBar
    ) {
        this.pacienteForm = this.fb.group({
            nome: ['', [Validators.required, Validators.minLength(6)]],
            nascimento: ['', [Validators.required, Validators.minLength(6)]],
            prontuario: ['', [Validators.required, Validators.minLength(6)]],
            edp: [EdpEnum.EDP1, [Validators.required]],
            cpf: [''],
            rg: [''],
            sobre_orelha_direita: [''],
            marca_orelha_direita: [''],
            modelo_orelha_direita: [''],
            sobre_orelha_esquerda: [''],
            marca_orelha_esquerda: [''],
            modelo_orelha_esquerda: [''],
        })
    }

    ngOnInit(): void {
        this.pacienteService
            .getSobrePaciente(this.pacienteId)
            .pipe(
                tap((paciente) => {
                    this.pacienteForm.patchValue(paciente)
                })
            )
            .subscribe()
    }

    onSubmit(): void {
        if (this.pacienteForm.valid) {
            this.pacienteService
                .patchPaciente(this.pacienteForm.value, this.pacienteId)
                .pipe(
                    tap(() => {
                        this._snackBar.open(
                            'Paciente atualizado com sucesso!',
                            'Fechar',
                            {
                                duration: 3000,
                            }
                        )
                    }
                ))
                .subscribe()
        }
    }
}
