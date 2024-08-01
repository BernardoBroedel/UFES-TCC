import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatDialogModule } from '@angular/material/dialog'
import { NgxsModule } from '@ngxs/store'
import { LoginState } from './core/state/auth/login.state'
import { HttpClientModule } from '@angular/common/http'
import { ModalNovoSupervisorModule } from './ui/components/modal-novo-supervisor/modal-novo-supervisor.module'
import { ModalNovoReabilitadorModule } from './ui/components/modal-novo-reabilitador/modal-novo-reabilitador.module'
import { ModalNovoPacienteModule } from './ui/components/modal-novo-paciente/modal-novo-paciente.module'
import { MatDatepickerModule } from '@angular/material/datepicker'
import {
    MAT_DATE_FORMATS,
    MAT_DATE_LOCALE,
    MatNativeDateModule,
} from '@angular/material/core'
import { UserEditorModule } from './ui/components/user-editor/user-editor.module'

export const MY_FORMATS = {
    parse: {
        dateInput: 'L',
    },
    display: {
        dateInput: 'L',
        monthYearLabel: 'MMMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
}

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatDialogModule,
        HttpClientModule,
        ModalNovoSupervisorModule,
        ModalNovoReabilitadorModule,
        ModalNovoPacienteModule,
        MatDatepickerModule,
        MatNativeDateModule,
        UserEditorModule,
        NgxsModule.forRoot([LoginState]),
    ],
    providers: [
        { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
        { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
