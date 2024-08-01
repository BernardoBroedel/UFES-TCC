import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SistemaSupervisorComponent } from './sistema-supervisor.component'
import { RouterModule, Routes } from '@angular/router'
import { UserInfoSupervisorModule } from './components/user-info-supervisor/user-info-supervisor.module'
import { SidebarSupervisorModule } from './components/sidebar-supervisor/sidebar-supervisor.module'
import { DashboardSupervisorComponent } from './components/dashboard-supervisor/dashboard-supervisor.component'
import { ListaPacientesComponent } from '../../ui/components/lista-pacientes/lista-pacientes.component'
import { ListaReabilitadoresComponent } from '../../ui/components/lista-reabilitadores/lista-reabilitadores.component'
import { ListaPlanejamentosComponent } from '../../ui/components/lista-planejamentos/lista-planejamentos.component'
import { ListaEvolucoesComponent } from '../../ui/components/lista-evolucoes/lista-evolucoes.component'
import { PacienteComponent } from '../paciente/paciente.component'
import { UserEditorComponent } from '../../ui/components/user-editor/user-editor.component'
import { PacienteModule } from '../paciente/paciente.module'
import { ListaPacientesModule } from '../../ui/components/lista-pacientes/lista-pacientes.module'
import { ListaReabilitadoresModule } from '../../ui/components/lista-reabilitadores/lista-reabilitadores.module'
import { ListaPlanejamentosModule } from '../../ui/components/lista-planejamentos/lista-planejamentos.module'
import { ListaEvolucoesModule } from '../../ui/components/lista-evolucoes/lista-evolucoes.module';
import { ModalConfirmacaoComponent } from './components/modal-confirmacao/modal-confirmacao.component'
import { ModalModule } from '../../ui/components/modal/modal.module'
import { MatDialogModule } from '@angular/material/dialog'
import { FilledButtonModule } from '../../ui/components/button/filled-button/filled-button.module'

const routes: Routes = [
    {
        path: '',
        component: SistemaSupervisorComponent,
        children: [
            { path: '', redirectTo: 'inicio', pathMatch: 'full' },
            { path: 'inicio', component: DashboardSupervisorComponent },
            {
                path: 'edp1',
                children: [
                    {
                        path: 'pacientes',
                        component: ListaPacientesComponent,
                    },
                    {
                        path: 'reabilitadores',
                        component: ListaReabilitadoresComponent,
                    },
                    {
                        path: 'planejamentos',
                        component: ListaPlanejamentosComponent,
                    },
                    {
                        path: 'evolucoes',
                        component: ListaEvolucoesComponent,
                    },

                ],
            },
            {
                path: 'edp2',
                children: [
                    {
                        path: 'pacientes',
                        component: ListaPacientesComponent,
                    },
                    {
                        path: 'reabilitadores',
                        component: ListaReabilitadoresComponent,
                    },
                    {
                        path: 'planejamentos',
                        component: ListaPlanejamentosComponent,
                    },
                    {
                        path: 'evolucoes',
                        component: ListaEvolucoesComponent,
                    },

                ],
            },
            {
                path: 'paciente/:pacienteId',
                component: PacienteComponent,
            },
            {
                path: 'usuario',
                component: UserEditorComponent,
            },
        ],
    },
]

@NgModule({
    declarations: [SistemaSupervisorComponent, ModalConfirmacaoComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        UserInfoSupervisorModule,
        SidebarSupervisorModule,
        PacienteModule,
        ListaPacientesModule,
        ListaReabilitadoresModule,
        ListaPlanejamentosModule,
        ListaEvolucoesModule,
        ModalModule,
        MatDialogModule,
        FilledButtonModule,
    ],
    exports: [SistemaSupervisorComponent],
})
export class SistemaSupervisorModule {}
