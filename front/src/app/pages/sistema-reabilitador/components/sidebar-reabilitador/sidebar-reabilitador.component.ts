import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../../services/auth/auth.service";
import {Store} from "@ngxs/store";
import {Router} from "@angular/router";
import {LoginActions} from "../../../../core/state/auth/login.action";

@Component({
  selector: 'app-sidebar-reabilitador',
  templateUrl: './sidebar-reabilitador.component.html',
  styleUrls: ['./sidebar-reabilitador.component.scss']
})
export class SidebarReabilitadorComponent implements OnInit {

    constructor(
        private readonly authService: AuthService,
        private readonly store: Store,
        private readonly router: Router
    ) {}

    ngOnInit(): void {}

    logout(): void {
        this.authService.signOut()
        this.store.dispatch(new LoginActions.DeslogarUsuario())
        this.router.navigate(['/login']).then()
    }

}
