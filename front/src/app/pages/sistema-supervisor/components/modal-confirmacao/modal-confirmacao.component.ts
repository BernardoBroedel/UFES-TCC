import { Component, Inject } from '@angular/core'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'

@Component({
    selector: 'app-modal-confirmacao',
    templateUrl: './modal-confirmacao.component.html',
    styleUrls: ['./modal-confirmacao.component.scss'],
})
export class ModalConfirmacaoComponent {
    constructor(
        public dialogRef: MatDialogRef<ModalConfirmacaoComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {}

    onNoClick(): void {
        this.dialogRef.close(false)
    }

    onYesClick(): void {
        this.dialogRef.close(true)
    }
}

export interface DialogData {
    pergunta: string
    primario: string
    secundario: string
}
