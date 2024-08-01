import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-reabilitadores',
  templateUrl: './lista-reabilitadores.component.html',
  styleUrls: ['./lista-reabilitadores.component.scss']
})
export class ListaReabilitadoresComponent implements OnInit {
    search = ''
    selectedValue: string = 'nome'

    reabilitadores: any[] = [
        {
            nome: 'Ana Maria Costa',
            semestre: '1',
            matricula: '202223456',
            imagem: 'assets/rosto-tres.jpg',
        },
        {
            nome: 'Beatriz Silva',
            semestre: '1',
            matricula: '202334567',
            imagem: 'assets/rosto-dois.jpg',
        },
        {
            nome: 'Carolina Ribeiro',
            semestre: '2',
            matricula: '202156789',
            imagem: null,
        },
        {
            nome: 'Diego Costa',
            semestre: '1',
            matricula: '202067890',
            imagem: 'assets/rosto-um.png',
        },
    ]

    constructor() { }

  ngOnInit(): void {
  }

}
