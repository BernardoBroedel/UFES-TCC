import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEditorComponent } from './user-editor.component';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { ReactiveFormsModule } from '@angular/forms'
import { FilledButtonModule } from '../button/filled-button/filled-button.module'



@NgModule({
    declarations: [UserEditorComponent],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        FilledButtonModule,
    ],
})
export class UserEditorModule {}
