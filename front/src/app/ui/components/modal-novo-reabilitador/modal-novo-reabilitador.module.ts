import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalNovoReabilitadorComponent } from './modal-novo-reabilitador.component';
import {ModalModule} from "../modal/modal.module";
import { FilledButtonModule } from '../button/filled-button/filled-button.module'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { ReactiveFormsModule } from '@angular/forms'
import { MatOptionModule } from '@angular/material/core'
import { MatSelectModule } from '@angular/material/select'



@NgModule({
    declarations: [ModalNovoReabilitadorComponent],
    imports: [
        CommonModule,
        ModalModule,
        FilledButtonModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatOptionModule,
        MatSelectModule,
    ],
    exports: [ModalNovoReabilitadorComponent],
})
export class ModalNovoReabilitadorModule {}
