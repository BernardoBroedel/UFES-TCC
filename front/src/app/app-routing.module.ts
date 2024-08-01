import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AuthGuard } from './core/guards/auth.guard'
import {SessionGuard} from "./core/guards/session.guard";

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },

    {
        path: 'login',
        canActivate: [SessionGuard],
        loadChildren: () =>
            import('./pages/login/login.module').then((m) => m.LoginModule),
    },

    {
        path: 'admin',
        loadChildren: () =>
            import('./pages/admin/admin.module').then((m) => m.AdminModule),
    },

    {
        path: 'sistema/supervisor',
        canActivate: [AuthGuard],
        loadChildren: () =>
            import('./pages/sistema-supervisor/sistema-supervisor.module').then(
                (m) => m.SistemaSupervisorModule
            ),
    },

    {
        path: 'sistema/reabilitador',
        canActivate: [AuthGuard],
        loadChildren: () =>
            import(
                './pages/sistema-reabilitador/sistema-reabilitador.module'
            ).then((m) => m.SistemaReabilitadorModule),
    },

    {
        path: '404',
        loadChildren: () =>
            import('./pages/error/error.module').then((m) => m.ErrorModule),
    },
    { path: '**', redirectTo: '/404' },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
