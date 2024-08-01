import { Component, OnInit } from '@angular/core';
import { UserRole } from '../../../../core/models/auth.models'
import { UserInfo } from '../../../../core/models/user.models'
import { AuthService } from '../../../../services/auth/auth.service'
import { UserService } from '../../../../services/user/user.service'
import { tap } from 'rxjs'

@Component({
  selector: 'app-user-info-supervisor',
  templateUrl: './user-info-supervisor.component.html',
  styleUrls: ['./user-info-supervisor.component.scss']
})
export class UserInfoSupervisorComponent implements OnInit {
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
