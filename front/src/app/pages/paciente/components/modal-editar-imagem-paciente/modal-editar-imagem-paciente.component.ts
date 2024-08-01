import { Component, Inject, OnInit } from '@angular/core'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { PacienteService } from '../../../../services/paciente/paciente.service'
import { tap } from 'rxjs'

@Component({
    selector: 'app-modal-editar-imagem-paciente',
    templateUrl: './modal-editar-imagem-paciente.component.html',
    styleUrls: ['./modal-editar-imagem-paciente.component.scss'],
})
export class ModalEditarImagemPacienteComponent implements OnInit {
    formData: FormData
    pacienteId: string

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private readonly service: PacienteService,
        public dialogRef: MatDialogRef<ModalEditarImagemPacienteComponent>
    ) {
        this.pacienteId = data.id
    }

    ngOnInit(): void {
        this.formData = new FormData()
    }

    onFileSelected(event: any) {
        const file: File = event.target.files[0]

        if (file) {
            this.formData.append('datein', file)
        }
    }

    onSubmit(): void {
        this.service
            .updateImagemPaciente(this.pacienteId, this.formData)
            .pipe(
                tap((res) => {
                    this.dialogRef.close()
                })
            )
            .subscribe()
    }
}
