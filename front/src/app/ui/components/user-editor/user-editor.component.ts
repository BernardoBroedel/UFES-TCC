import { Component, OnInit } from '@angular/core'
import { UserService } from '../../../services/user/user.service'
import { AuthService } from '../../../services/auth/auth.service'
import { tap } from 'rxjs'
import { UserInfo } from '../../../core/models/user.models'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { UserRole } from '../../../core/models/auth.models'

@Component({
    selector: 'app-user-editor',
    templateUrl: './user-editor.component.html',
    styleUrls: ['./user-editor.component.scss'],
})
export class UserEditorComponent implements OnInit {
    userId: string
    userRole: UserRole
    userInfo: UserInfo

    userForm: FormGroup
    formData: FormData

    constructor(
        private readonly fb: FormBuilder,
        private readonly authService: AuthService,
        private readonly userService: UserService
    ) {}

    ngOnInit(): void {
        this.userId = this.authService.getId()
        this.userRole = this.authService.getRole()
        this.formData = new FormData()

        this.userForm = this.fb.group({
            nome: ['', Validators.required],
            imagem: [],
        })

        this.userService
            .getUserInfo(this.userId, this.userRole)
            .pipe(
                tap((info) => {
                    this.userInfo = info
                    this.userForm = this.fb.group({
                        nome: [info.nome, Validators.required],
                        imagem: [],
                    })
                })
            )
            .subscribe()
    }

    onFileSelected(event: any) {
        const file: File = event.target.files[0]

        if (file) {
            this.formData.append('datein', file)
        }
    }

    onSubmit(): void {
        if (this.userForm.valid) {
            this.formData.append(
                'nome',
                this.userForm.get('nome')?.value
            )

            this.userService
                .updateUserInfo(this.userId, this.userRole, this.formData)
                .pipe(
                    tap((res) => {
                        if(res.imagem.length > 0) this.userInfo.imagem = res.imagem
                        this.userInfo.nome = this.userForm.get('nome')?.value
                        this.resetForm();
                    })
                )
                .subscribe()
        }
    }

    resetForm(): void {
        this.formData = new FormData();
    }
}
