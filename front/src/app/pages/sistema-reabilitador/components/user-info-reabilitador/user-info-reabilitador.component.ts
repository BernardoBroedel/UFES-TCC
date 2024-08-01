import { Component, OnInit } from '@angular/core'
import { UserInfo } from '../../../../core/models/user.models'
import { UserService } from '../../../../services/user/user.service'
import { tap } from 'rxjs'
import { UserRole } from '../../../../core/models/auth.models'
import { AuthService } from '../../../../services/auth/auth.service'

@Component({
    selector: 'app-user-info-reabilitador',
    templateUrl: './user-info-reabilitador.component.html',
    styleUrls: ['./user-info-reabilitador.component.scss'],
})
export class UserInfoReabilitadorComponent implements OnInit {
    userId: string
    userRole: UserRole
    userInfo: UserInfo

    constructor(
        private readonly authService: AuthService,
        private readonly userService: UserService
    ) {}

    ngOnInit(): void {
        this.userId = this.authService.getId()
        this.userRole = this.authService.getRole()

        this.userService
            .getUserInfo(this.userId, this.userRole)
            .pipe(
                tap((info) => {
                    this.userInfo = info
                })
            )
            .subscribe()
    }
}
