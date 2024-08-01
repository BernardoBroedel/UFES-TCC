import { Injectable } from '@angular/core'
import { environment } from '../../../environments/environment'
import { HttpClient } from '@angular/common/http'
import {
    LoginPayload,
    LoginSession,
    UserRole,
} from '../../core/models/auth.models'
import { Observable } from 'rxjs'

const TOKEN_KEY = 'auth-token'

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private http: HttpClient) {}

    url = environment.apiURL

    signOut(): void {
        window.sessionStorage.clear()
    }

    public saveStorage(storage: LoginSession): void {
        window.sessionStorage.removeItem(TOKEN_KEY)
        window.sessionStorage.setItem(TOKEN_KEY, storage.token)
        window.sessionStorage.setItem('STATE', 'true')
        window.sessionStorage.setItem('ID', `${storage.id}`)
        window.sessionStorage.setItem('USERNAME', `${storage.username}`)
        window.sessionStorage.setItem('ROLE', `${storage.role}`)
    }

    public getToken(): string | null {
        return window.sessionStorage.getItem(TOKEN_KEY)
    }

    public getId(): string | null {
        return window.sessionStorage.getItem('ID')
    }

    public getUsername(): string | null {
        return window.sessionStorage.getItem('USERNAME')
    }

    public getRole(): UserRole | null {
        const roleString = window.sessionStorage.getItem('ROLE')
        if (roleString == '0') {
            return UserRole.supervisor
        } else if (roleString == '1') {
            return UserRole.reabilitador
        } else if (roleString == '2') {
            return UserRole.paciente
        }
        return null
    }

    login(payload: LoginPayload): Observable<LoginSession> {
        return this.http.post<LoginSession>(`${this.url}session`, payload)
    }
}
