import { Component, Inject, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { PacienteService } from '../../../../services/paciente/paciente.service'

@Component({
    selector: 'app-modal-novo-anexo',
    templateUrl: './modal-novo-anexo.component.html',
    styleUrls: ['./modal-novo-anexo.component.scss'],
})
export class ModalNovoAnexoComponent implements OnInit {
    public itemForm!: FormGroup
    formData!: FormData
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private readonly service: PacienteService,
        private formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<ModalNovoAnexoComponent>
    ) {}
    ngOnInit(): void {
        this.itemForm = this.formBuilder.group({
            nomeAnexo: [''],
            anexo: [],
        })
    }
    onFileSelected(event: any) {
        const file: File = event.target.files[0]

        if (file) {
            this.formData = new FormData()

            this.formData.append('datein', file)
        }
    }
    createItem() {
        if (this.formData) {
            this.formData.append(
                'nomeAnexo',
                this.itemForm.get('nomeAnexo')?.value
            )
            this.service
                .cadastrarAnexo(this.formData, this.data.id)
                .subscribe((res) => console.log(res))
            this.dialogRef.close()
        }
    }
}
