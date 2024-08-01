import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaReabilitadoresComponent } from './lista-reabilitadores.component';
import { FilterArrayModule } from '../../pipe/filter-array/filter-array.module'
import { FormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { RouterModule } from '@angular/router'



@NgModule({
    declarations: [ListaReabilitadoresComponent],
    imports: [
        CommonModule,
        FilterArrayModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        RouterModule,
    ],
})
export class ListaReabilitadoresModule {}
