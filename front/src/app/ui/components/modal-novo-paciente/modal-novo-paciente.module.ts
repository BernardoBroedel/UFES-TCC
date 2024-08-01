import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalNovoPacienteComponent } from './modal-novo-paciente.component';
import {ModalModule} from "../modal/modal.module";
import { FilledButtonModule } from '../button/filled-button/filled-button.module'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { ReactiveFormsModule } from '@angular/forms'
import { MatSelectModule } from '@angular/material/select'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core'



@NgModule({
    declarations: [ModalNovoPacienteComponent],
    imports: [
        CommonModule,
        ModalModule,
        FilledButtonModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
    exports: [ModalNovoPacienteComponent],
})
export class ModalNovoPacienteModule {}
