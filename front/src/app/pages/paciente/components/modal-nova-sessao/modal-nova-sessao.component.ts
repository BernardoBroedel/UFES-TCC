import { Component, OnInit } from '@angular/core'
import { MatDialogRef } from '@angular/material/dialog'
import { EdpEnum } from '../../../../core/models/util.models'

@Component({
    selector: 'app-modal-nova-sessao',
    templateUrl: './modal-nova-sessao.component.html',
    styleUrls: ['./modal-nova-sessao.component.scss'],
})
export class ModalNovaSessaoComponent implements OnInit {
    constructor(
        private readonly dialogRef: MatDialogRef<ModalNovaSessaoComponent>
    ) {}

    ngOnInit(): void {}

    protected readonly edpEnum = EdpEnum
}
