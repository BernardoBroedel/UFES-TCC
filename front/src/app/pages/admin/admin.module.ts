import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AdminComponent } from './admin.component'
import { RouterModule, Routes } from '@angular/router'
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatSnackBarModule} from "@angular/material/snack-bar";

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
    },
]

@NgModule({
    declarations: [AdminComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        MatSnackBarModule
    ],
    exports: [AdminComponent],
})
export class AdminModule {}
