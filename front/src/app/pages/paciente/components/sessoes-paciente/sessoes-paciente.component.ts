import { Component, Input, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { ModalSessaoComponent } from '../modal-sessao/modal-sessao.component'
import { ModalNovaSessaoComponent } from '../modal-nova-sessao/modal-nova-sessao.component'

@Component({
    selector: 'app-sessoes-paciente',
    templateUrl: './sessoes-paciente.component.html',
    styleUrls: ['./sessoes-paciente.component.scss'],
})
export class SessoesPacienteComponent implements OnInit {
    @Input() pacienteId: string

    sessoes: any[] = [
        {
            id: 4,
            data: '03/07/2024',
            horario: '09:00',
        },
        {
            id: 3,
            data: '26/06/2024',
            horario: '09:00',
        },
        {
            id: 2,
            data: '19/06/2024',
            horario: '08:30',
        },
        {
            id: 1,
            data: '12/06/2024',
            horario: '08:30',
        },
    ]

    constructor(private readonly dialog: MatDialog) {}

    ngOnInit(): void {}

    abrirModalSessao() {
        this.dialog.open(ModalSessaoComponent, {
        })
    }

    abrirModalNovaSessao() {
        this.dialog.open(ModalNovaSessaoComponent, {})
    }
}
