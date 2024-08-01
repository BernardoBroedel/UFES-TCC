import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-planejamentos',
  templateUrl: './lista-planejamentos.component.html',
  styleUrls: ['./lista-planejamentos.component.scss']
})
export class ListaPlanejamentosComponent implements OnInit {
    sessoes: any[] = [
        {
            nome: 'Rafael Costa',
            data: '05/03/2024',
            horario: '08:30',
        },
        {
            nome: 'Daniela Gomes',
            data: '12/04/2024',
            horario: '14:50',
        },
        {
            nome: 'Gabriel Almeida',
            data: '19/05/2024',
            horario: '17:10',
        },
        {
            nome: 'Juliana Barros',
            data: '23/06/2024',
            horario: '10:45',
        },
        {
            nome: 'Rodrigo Martins',
            data: '29/07/2024',
            horario: '09:00',
        },
        {
            nome: 'Larissa Rodrigues',
            data: '03/08/2024',
            horario: '12:15',
        },
        {
            nome: 'Marcos Silva',
            data: '16/03/2024',
            horario: '11:00',
        },
        {
            nome: 'Renata Pereira',
            data: '21/04/2024',
            horario: '15:30',
        },

    ]

  constructor() { }

  ngOnInit(): void {
  }

}
