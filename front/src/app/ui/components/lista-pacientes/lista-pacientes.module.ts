import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ListaPacientesComponent } from './lista-pacientes.component'
import { RouterModule } from '@angular/router'
import { MatInputModule } from '@angular/material/input'
import { FormsModule } from '@angular/forms'
import { FilterArrayModule } from '../../pipe/filter-array/filter-array.module'

@NgModule({
    declarations: [ListaPacientesComponent],
    imports: [
        CommonModule,
        RouterModule,
        MatInputModule,
        FormsModule,
        FilterArrayModule,
    ],
    exports: [ListaPacientesComponent],
})
export class ListaPacientesModule {}
