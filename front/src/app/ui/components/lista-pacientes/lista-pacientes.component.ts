import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { EdpEnum } from '../../../core/models/util.models'
import { tap } from 'rxjs'
import { PacienteService } from '../../../services/paciente/paciente.service'
import { PacienteLista, PacienteListaFormatado } from '../../../core/models/paciente.models'

@Component({
    selector: 'app-lista-pacientes',
    templateUrl: './lista-pacientes.component.html',
    styleUrls: ['./lista-pacientes.component.scss'],
})
export class ListaPacientesComponent implements OnInit {
    search = ''
    selectedValue: string = 'nome'
    public edpValue: EdpEnum
    pacientes: PacienteListaFormatado[] = []

    constructor(
        private readonly route: ActivatedRoute,
        private readonly pacienteService: PacienteService,
        private readonly router: Router
    ) {}

    ngOnInit(): void {
        const url = this.router.url

        const parts = url.split('/') // Divide a string nos separadores '/'
        const edp = parts[3]

        if (edp === 'edp1') {
            this.edpValue = EdpEnum.EDP1
        } else if (edp === 'edp2') {
            this.edpValue = EdpEnum.EDP2
        } else {
            console.warn(
                'Parâmetro EDP não corresponde a nenhum valor esperado.'
            )
        }

        this.pacienteService
            .getPacientes(this.edpValue)
            .pipe(
                tap((pacientes) => {
                    this.pacientes = pacientes
                })
            )
            .subscribe()
    }
}
