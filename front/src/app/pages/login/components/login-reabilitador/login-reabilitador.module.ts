import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoginReabilitadorComponent } from './login-reabilitador.component'
import { MatButtonModule } from '@angular/material/button'
import { ReactiveFormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import { FilledButtonModule } from '../../../../ui/components/button/filled-button/filled-button.module'
import { MatSnackBarModule } from '@angular/material/snack-bar'

@NgModule({
    declarations: [LoginReabilitadorComponent],
    imports: [
        CommonModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatInputModule,
        MatIconModule,
        FilledButtonModule,
        MatSnackBarModule,
    ],
    exports: [LoginReabilitadorComponent],
})
export class LoginReabilitadorModule {}
