import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../../services/auth/auth.service";
import {Store} from "@ngxs/store";
import {Router} from "@angular/router";
import {LoginActions} from "../../../../core/state/auth/login.action";
import {MatDialog} from "@angular/material/dialog";
import {
    ModalNovoSupervisorComponent
} from "../../../../ui/components/modal-novo-supervisor/modal-novo-supervisor.component";
import {
    ModalNovoReabilitadorComponent
} from "../../../../ui/components/modal-novo-reabilitador/modal-novo-reabilitador.component";
import {ModalNovoPacienteComponent} from "../../../../ui/components/modal-novo-paciente/modal-novo-paciente.component";

@Component({
  selector: 'app-sidebar-supervisor',
  templateUrl: './sidebar-supervisor.component.html',
  styleUrls: ['./sidebar-supervisor.component.scss']
})
export class SidebarSupervisorComponent implements OnInit {

    constructor(
        private readonly authService: AuthService,
        private readonly store: Store,
        private readonly router: Router,
        private readonly dialog: MatDialog
    ) {}

    ngOnInit(): void {}

    logout(): void {
        this.authService.signOut()
        this.store.dispatch(new LoginActions.DeslogarUsuario())
        this.router.navigate(['/login']).then()
    }

    cadastrarSupervisor() {
        this.dialog.open(
            ModalNovoSupervisorComponent
        )
    }

    cadastrarReabilitador() {
        this.dialog.open(
            ModalNovoReabilitadorComponent
        )
    }

    cadastrarPaciente() {
        this.dialog.open(
            ModalNovoPacienteComponent
        )
    }
}
