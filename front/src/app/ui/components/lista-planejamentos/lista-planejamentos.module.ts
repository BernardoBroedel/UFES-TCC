import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaPlanejamentosComponent } from './lista-planejamentos.component';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'



@NgModule({
    declarations: [ListaPlanejamentosComponent],
    imports: [CommonModule, MatButtonModule, MatIconModule],
})
export class ListaPlanejamentosModule {}
