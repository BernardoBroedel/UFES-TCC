import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { switchMap, tap } from 'rxjs'
import { PacienteService } from '../../services/paciente/paciente.service'
import { MatDialog } from '@angular/material/dialog'
import { ModalEditarImagemPacienteComponent } from './components/modal-editar-imagem-paciente/modal-editar-imagem-paciente.component'

@Component({
    selector: 'app-paciente',
    templateUrl: './paciente.component.html',
    styleUrls: ['./paciente.component.scss'],
})
export class PacienteComponent implements OnInit {
    pacienteId: string
    paciente: any

    constructor(
        private readonly route: ActivatedRoute,
        private readonly pacienteService: PacienteService,
        private readonly dialog: MatDialog
    ) {}

    ngOnInit(): void {
        this.route.paramMap
            .pipe(
                tap((params) => {
                    this.pacienteId = params.get('pacienteId')
                }),
                switchMap((params) =>
                    this.pacienteService.getPaciente(params.get('pacienteId'))
                ),
                tap((data) => {
                    this.paciente = data
                })
            )
            .subscribe()
    }

    abrirModalImgemPaciente() {
        this.dialog.open(ModalEditarImagemPacienteComponent, {
            data: {
                id: this.pacienteId,
            },
        })
    }
}
