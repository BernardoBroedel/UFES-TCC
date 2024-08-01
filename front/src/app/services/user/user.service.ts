import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { AuthService } from '../auth/auth.service'
import { environment } from '../../../environments/environment'
import { Observable } from 'rxjs'
import { UpdateUserInfoResponse, UserInfo } from '../../core/models/user.models'
import { UserRole } from '../../core/models/auth.models'

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(
        private http: HttpClient,
        private readonly authService: AuthService
    ) {}

    url = environment.apiURL

    headers = new HttpHeaders({
        Authorization: this.authService.getToken(),
    })

    getUserInfo(id: string, role: UserRole): Observable<UserInfo> {
        return this.http.get<UserInfo>(`${this.url}user/${id}/${role}`, {
            headers: this.headers,
        })
    }

    updateUserInfo(id: string, role: UserRole, data: any): Observable<UpdateUserInfoResponse> {
        return this.http.post<UpdateUserInfoResponse>(`${this.url}user/${id}/${role}`, data, { headers: this.headers })

    }
}
