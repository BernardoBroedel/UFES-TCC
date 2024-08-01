import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoginComponent } from './login.component'
import { RouterModule, Routes } from '@angular/router'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FilledButtonModule } from '../../ui/components/button/filled-button/filled-button.module'
import { LoginSupervisorComponent } from './components/login-supervisor/login-supervisor.component'
import { LoginReabilitadorComponent } from './components/login-reabilitador/login-reabilitador.component'
import { LoginReabilitadorModule } from './components/login-reabilitador/login-reabilitador.module'
import { LoginSupervisorModule } from './components/login-supervisor/login-supervisor.module'

const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        children: [
            { path: '', redirectTo: 'supervisor', pathMatch: 'full' },
            { path: 'supervisor', component: LoginSupervisorComponent },
            { path: 'reabilitador', component: LoginReabilitadorComponent },
        ],
    },
]

@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        FormsModule,
        FilledButtonModule,
        ReactiveFormsModule,
        LoginReabilitadorModule,
        LoginSupervisorModule,
    ],
    exports: [LoginComponent],
})
export class LoginModule {}
