import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaEvolucoesComponent } from './lista-evolucoes.component';
import { FilledButtonModule } from '../button/filled-button/filled-button.module'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'



@NgModule({
    declarations: [ListaEvolucoesComponent],
    imports: [CommonModule, FilledButtonModule, MatButtonModule, MatIconModule],
})
export class ListaEvolucoesModule {}
