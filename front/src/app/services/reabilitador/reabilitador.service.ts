import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { AuthService } from '../auth/auth.service'
import { environment } from '../../../environments/environment'
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ReabilitadorService {
    constructor(
        private http: HttpClient,
        private readonly authService: AuthService
    ) {}

    url = environment.apiURL

    headers = new HttpHeaders({
        Authorization: this.authService.getToken(),
    })

    getListaReabilitadores(): Observable<any>{
        return of([
            {
                id: 1,
                name: 'Beatriz Silva',
            },
            {
                id: 2,
                name: 'Diego Costa',
            },
        ])

        // return this.http.get(`${this.url}reabilitadores`, {
        //     headers: this.headers,
        // })
    }

    getPatiente(patientId: string): Observable<any> {
        return of(
            {
                id: 1,
                name: 'Patient Name',
                reabilitadores: [
                    {
                        id: 1,
                        name: 'Beatriz Silva',
                    },
                    {
                        id: 2,
                        name: 'Diego Costa',
                    },
                ],
            }
        )
    }

    addRehabilitator(patientId: string, rehabilitatorId: string): Observable<any> {
        return of()
    }

    removeRehabilitator(patientId: string, rehabilitatorId: number): Observable<any> {
        return of()
    }
}
