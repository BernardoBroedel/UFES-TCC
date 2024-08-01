import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-sistema-reabilitador',
  templateUrl: './sistema-reabilitador.component.html',
  styleUrls: ['./sistema-reabilitador.component.scss']
})
export class SistemaReabilitadorComponent implements OnInit {
    segmentoRota: string;
    paginaMap: Map<string, string> = new Map<string, string>([
        ['inicio', 'Início'],
        ['pacientes', 'Pacientes']
    ]);
    nomePagina: string;

    constructor(private readonly activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.segmentoRota = this.activatedRoute.snapshot.firstChild.url[0].path.toLowerCase();
        this.nomePagina = this.paginaMap.get(this.segmentoRota) || '';
    }
}
