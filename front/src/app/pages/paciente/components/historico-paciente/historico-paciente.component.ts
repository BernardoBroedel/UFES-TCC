import { Component, Input, OnInit } from '@angular/core'

@Component({
    selector: 'app-historico-paciente',
    templateUrl: './historico-paciente.component.html',
    styleUrls: ['./historico-paciente.component.scss'],
})
export class HistoricoPacienteComponent implements OnInit {
    @Input() pacienteId: string
    constructor() {}

    ngOnInit(): void {}
}
