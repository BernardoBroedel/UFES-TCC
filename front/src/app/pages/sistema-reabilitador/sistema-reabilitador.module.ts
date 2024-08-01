import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SistemaReabilitadorComponent } from './sistema-reabilitador.component'
import { RouterModule, Routes } from '@angular/router'
import { DashboardSupervisorComponent } from '../sistema-supervisor/components/dashboard-supervisor/dashboard-supervisor.component'
import { UserInfoReabilitadorModule } from './components/user-info-reabilitador/user-info-reabilitador.module'
import { SidebarReabilitadorModule } from './components/sidebar-reabilitador/sidebar-reabilitador.module'

const routes: Routes = [
    {
        path: '',
        component: SistemaReabilitadorComponent,
        children: [
            { path: '', redirectTo: 'inicio', pathMatch: 'full' },
            { path: 'inicio', component: DashboardSupervisorComponent },
        ],
    },
]

@NgModule({
    declarations: [SistemaReabilitadorComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        UserInfoReabilitadorModule,
        SidebarReabilitadorModule,
    ],
    exports: [SistemaReabilitadorComponent],
})
export class SistemaReabilitadorModule {}
