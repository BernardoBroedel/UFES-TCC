import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalNovoSupervisorComponent } from './modal-novo-supervisor.component';
import {ModalModule} from "../modal/modal.module";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FilledButtonModule} from "../button/filled-button/filled-button.module";



@NgModule({
    declarations: [ModalNovoSupervisorComponent],
    imports: [
        CommonModule,
        ModalModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        FilledButtonModule,
    ],
    exports: [ModalNovoSupervisorComponent],
})
export class ModalNovoSupervisorModule {}
