import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-evolucoes',
  templateUrl: './lista-evolucoes.component.html',
  styleUrls: ['./lista-evolucoes.component.scss']
})
export class ListaEvolucoesComponent implements OnInit {
    sessoes: any[] = [
        {
            nome: 'Maria Oliveira',
            data: '18/03/2024',
            horario: '10:00',
        },
        {
            nome: 'Carlos Pereira',
            data: '02/04/2024',
            horario: '15:15',
        },
        {
            nome: 'Ana Souza',
            data: '27/05/2024',
            horario: '09:45',
        },
        {
            nome: 'Felipe Lima',
            data: '10/06/2024',
            horario: '11:30',
        },
        {
            nome: 'Beatriz Santana',
            data: '22/07/2024',
            horario: '13:00',
        },
        {
            nome: 'Lucas Ferreira',
            data: '08/08/2024',
            horario: '16:20',
        },
    ]

  constructor() { }

  ngOnInit(): void {
  }

}
