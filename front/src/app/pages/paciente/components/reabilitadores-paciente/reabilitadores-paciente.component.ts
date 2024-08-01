import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ReabilitadorService } from '../../../../services/reabilitador/reabilitador.service'

@Component({
    selector: 'app-reabilitadores-paciente',
    templateUrl: './reabilitadores-paciente.component.html',
    styleUrls: ['./reabilitadores-paciente.component.scss'],
})
export class ReabilitadoresPacienteComponent implements OnInit {
    @Input() pacienteId: string;

    patiente: any;
    allRehabilitators: any[] = [];
    availableRehabilitators: any[] = [];


    constructor(private route: ActivatedRoute, private reabilitadorService: ReabilitadorService) {}

    ngOnInit(): void {
        this.loadPatientDetails();
        this.loadRehabilitators();
    }

    loadPatientDetails(): void {
        this.reabilitadorService.getPatiente(this.pacienteId).subscribe(
            response => {
                this.patiente = response;
                this.filterAvailableRehabilitators();
            },
            error => {
                console.error('Error loading patient details', error);
            }
        );
    }

    loadRehabilitators(): void {
        this.reabilitadorService.getListaReabilitadores().subscribe(
            response => {
                this.allRehabilitators = response;
                this.filterAvailableRehabilitators();
            },
            error => {
                console.error('Error loading rehabilitators', error);
            }
        );
    }

    filterAvailableRehabilitators(): void {
        if (this.patiente && this.allRehabilitators.length > 0) {
            const patientRehabilitatorIds = this.patiente.reabilitadores.map((rehab: any) => rehab.id);
            this.availableRehabilitators = this.allRehabilitators.filter(
                (rehab: any) => !patientRehabilitatorIds.includes(rehab.id)
            );
        }
    }

    addRehabilitator(rehabilitatorId: string): void {
        this.reabilitadorService.addRehabilitator(this.pacienteId, rehabilitatorId).subscribe(
            response => {
                this.patiente = response;
                this.filterAvailableRehabilitators();
            },
            error => {
                console.error('Error adding rehabilitator', error);
            }
        );
    }

    removeRehabilitator(rehabilitatorId: number): void {
        this.reabilitadorService.removeRehabilitator(this.pacienteId, rehabilitatorId).subscribe(
            response => {
                this.patiente = response;
                this.filterAvailableRehabilitators();
            },
            error => {
                console.error('Error removing rehabilitator', error);
            }
        );
    }
}
