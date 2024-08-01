import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PacienteComponent } from './paciente.component'
import { MatTabsModule } from '@angular/material/tabs'
import { AnexosPacienteComponent } from './components/anexos-paciente/anexos-paciente.component'
import { ModalNovoAnexoComponent } from './components/modal-novo-anexo/modal-novo-anexo.component'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { ModalModule } from '../../ui/components/modal/modal.module'
import { MatInputModule } from '@angular/material/input'
import { ReactiveFormsModule } from '@angular/forms';
import { SobrePacienteComponent } from './components/sobre-paciente/sobre-paciente.component';
import { ReabilitadoresPacienteComponent } from './components/reabilitadores-paciente/reabilitadores-paciente.component';
import { SessoesPacienteComponent } from './components/sessoes-paciente/sessoes-paciente.component';
import { HistoricoPacienteComponent } from './components/historico-paciente/historico-paciente.component'
import { FilledButtonModule } from '../../ui/components/button/filled-button/filled-button.module'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatOptionModule } from '@angular/material/core'
import { MatSelectModule } from '@angular/material/select'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ModalEditarImagemPacienteComponent } from './components/modal-editar-imagem-paciente/modal-editar-imagem-paciente.component';
import { ModalSessaoComponent } from './components/modal-sessao/modal-sessao.component';
import { ModalNovaSessaoComponent } from './components/modal-nova-sessao/modal-nova-sessao.component'

@NgModule({
    declarations: [
        PacienteComponent,
        AnexosPacienteComponent,
        ModalNovoAnexoComponent,
        SobrePacienteComponent,
        ReabilitadoresPacienteComponent,
        SessoesPacienteComponent,
        HistoricoPacienteComponent,
        ModalEditarImagemPacienteComponent,
        ModalSessaoComponent,
        ModalNovaSessaoComponent,
    ],
    imports: [
        CommonModule,
        MatTabsModule,
        MatButtonModule,
        MatIconModule,
        ModalModule,
        MatInputModule,
        ReactiveFormsModule,
        FilledButtonModule,
        MatDatepickerModule,
        MatOptionModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatSnackBarModule,
    ],
    exports: [
        PacienteComponent,
        AnexosPacienteComponent,
        ModalNovoAnexoComponent,
        ModalEditarImagemPacienteComponent,
        ModalSessaoComponent,
        ModalNovaSessaoComponent
    ],
})
export class PacienteModule {}
