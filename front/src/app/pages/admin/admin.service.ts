import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '../../../environments/environment'

@Injectable({
    providedIn: 'root',
})
export class AdminService {
    constructor(private http: HttpClient) {}

    url = environment.apiURL

    cadastrarSupervisor(data: NovoSupervisor): Observable<boolean> {
        return this.http.post<boolean>(
            `${this.url}novosupervisor`,
            data
        )
    }
}

export interface NovoSupervisor {
    username: string;
    password: string;
}
