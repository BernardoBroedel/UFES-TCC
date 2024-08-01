import { Component, Input, OnInit } from '@angular/core'
import { ModalNovoAnexoComponent } from '../modal-novo-anexo/modal-novo-anexo.component'
import { PacienteService } from '../../../../services/paciente/paciente.service'
import { MatDialog } from '@angular/material/dialog'
import { tap } from 'rxjs'

@Component({
    selector: 'app-anexos-paciente',
    templateUrl: './anexos-paciente.component.html',
    styleUrls: ['./anexos-paciente.component.scss'],
})
export class AnexosPacienteComponent implements OnInit {
    @Input() pacienteId: string;

    anexos: any[] = [
        {
            id: 1,
            nome: 'Relatório de Avaliação Auditiva Pré-Implante - 2024',
        },
        {
            id: 2,
            nome: 'Exame de Imagem de Tomografia Computadorizada - 2023',
        },
        {
            id: 3,
            nome: 'Teste de Potenciais Evocados Auditivos - 2024',
        },
    ]
    constructor(
        private readonly pacienteService: PacienteService,
        private readonly dialog: MatDialog
    ) {}

    ngOnInit(): void {
        this.pacienteService
            .getAnexosPaciente(this.pacienteId)
            .pipe(
                tap((anexos) => {
                    // this.anexos = anexos
                })
            )
            .subscribe()
    }

    cadastrarAnexo() {
        this.dialog.open(ModalNovoAnexoComponent, {
            data: {
                id: this.pacienteId,
            },
        })
    }

    baixarAnexo(anexo: any) {
        this.pacienteService.getAnexoPaciente(anexo.id).subscribe((data) => {
            const downloadLink = document.createElement('a')
            const fileName = data.nome
            downloadLink.href = data.url
            downloadLink.download = fileName
            downloadLink.click()
        })
    }
}
