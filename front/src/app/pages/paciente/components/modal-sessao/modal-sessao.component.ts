import { Component, OnInit } from '@angular/core'
import { MatDialog, MatDialogRef } from '@angular/material/dialog'
import { ModalConfirmacaoComponent } from '../../../sistema-supervisor/components/modal-confirmacao/modal-confirmacao.component'

@Component({
    selector: 'app-modal-sessao',
    templateUrl: './modal-sessao.component.html',
    styleUrls: ['./modal-sessao.component.scss'],
})
export class ModalSessaoComponent implements OnInit {
    constructor(
        private readonly dialogRef: MatDialogRef<ModalSessaoComponent>,
        private readonly dialog: MatDialog
    ) {}

    ngOnInit(): void {}

    realizarVisto() {
        this.dialog.open(ModalConfirmacaoComponent,
            {
                width: '400px'
            })
    }
}
