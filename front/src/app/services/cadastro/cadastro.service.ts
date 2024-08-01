import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '../../../environments/environment'
import { Observable } from 'rxjs'
import {
    NovoPaciente,
    NovoReabilitador,
    NovoSupervisor,
} from '../../core/models/cadastro.models'
import { AuthService } from '../auth/auth.service'

@Injectable({
    providedIn: 'root',
})
export class CadastroService {
    constructor(
        private http: HttpClient,
        private readonly authService: AuthService
    ) {}

    url = environment.apiURL

    headers = new HttpHeaders({
        Authorization: this.authService.getToken(),
    })

    cadastrarSupervisor(payload: NovoSupervisor): Observable<string> {
        return this.http.post<string>(`${this.url}novosupervisor`, payload, {
            headers: this.headers,
        })
    }

    cadastrarReabilitador(payload: NovoReabilitador): Observable<string> {
        return this.http.post<string>(`${this.url}novoreabilitador`, payload, {
            headers: this.headers,
        })
    }

    cadastrarPaciente(payload: NovoPaciente): Observable<string> {
        return this.http.post<string>(`${this.url}novopaciente`, payload, {
            headers: this.headers,
        })
    }
}
