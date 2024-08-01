import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoginSupervisorComponent } from './login-supervisor.component'
import { ReactiveFormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { FilledButtonModule } from '../../../../ui/components/button/filled-button/filled-button.module'
import { MatSnackBarModule } from '@angular/material/snack-bar'

@NgModule({
    declarations: [LoginSupervisorComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        FilledButtonModule,
        MatSnackBarModule,
    ],
    exports: [LoginSupervisorComponent],
})
export class LoginSupervisorModule {}
