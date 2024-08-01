import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '../../../environments/environment'
import { map, Observable, of } from 'rxjs'
import { EdpEnum, OrelhaEnum } from '../../core/models/util.models'
import {
    PacienteLista,
    PacienteListaFormatado,
    SobrePaciente, SobrePacienteRequest,
} from '../../core/models/paciente.models'
import { AuthService } from '../auth/auth.service'
import { calculateAge } from '../../core/utils/functions'
import { UserRole } from '../../core/models/auth.models'
import { UpdateUserInfoResponse } from '../../core/models/user.models'

@Injectable({
    providedIn: 'root',
})
export class PacienteService {
    constructor(
        private http: HttpClient,
        private readonly authService: AuthService
    ) {}

    url = environment.apiURL

    headers = new HttpHeaders({
        Authorization: this.authService.getToken(),
    })

    getPacientes(edp: EdpEnum): Observable<PacienteListaFormatado[]> {
        return this.http
            .get<PacienteLista[]>(`${this.url}pacientes/${edp}`, {
                headers: this.headers,
            })
            .pipe(
                map((res) => {
                    return res.map((paciente) => {
                        return {
                            id: paciente.id,
                            nome: paciente.nome,
                            imagem: paciente.imagem,
                            idade: calculateAge(paciente.nascimento),
                            dataNascimento: new Date(paciente.nascimento),
                        }
                    })
                })
            )
    }

    getPaciente(id: string): Observable<any> {
        return this.http.get<any>(`${this.url}paciente/${id}`, {
            headers: this.headers,
        })
    }

    getSobrePaciente(id: string): Observable<SobrePaciente> {
        return this.http.get<SobrePacienteRequest>(`${this.url}sobrepaciente/${id}`, {
            headers: this.headers,
        }).pipe(
            map((paciente) => {
                return {
                    nome: paciente.nome,
                    nascimento: new Date(paciente.nascimento),
                    prontuario: paciente.prontuario,
                    edp: paciente.edp,
                    cpf: paciente.cpf,
                    rg: paciente.rg,
                    sobre_orelha_direita: paciente.sobre_orelha_direita,
                    marca_orelha_direita: paciente.marca_orelha_direita,
                    modelo_orelha_direita: paciente.modelo_orelha_direita,
                    sobre_orelha_esquerda: paciente.sobre_orelha_esquerda,
                    marca_orelha_esquerda: paciente.marca_orelha_esquerda,
                    modelo_orelha_esquerda: paciente.modelo_orelha_esquerda,
                }
            })
        )
    }

    getAnexosPaciente(id: string): Observable<any> {
        return of({
            nome: 'Joao',
        })

        // return this.http.get<PacienteLista>(`${this.url}pacientes/${id}`, {
        //     headers: this.headers,
        // })
    }

    getAnexoPaciente(id: string): Observable<any> {
        return of({
            nome: 'Joao',
        })

        // return this.http.get<PacienteLista>(`${this.url}pacientes/${id}`, {
        //     headers: this.headers,
        // })
    }

    cadastrarAnexo(data: any, id: string): Observable<any> {
        return this.http.post<any>(`${this.url}cadastrarAnexo/${id}`, data, {
            headers: this.headers,
        })
    }

    //TODO: TIPAGEM
    patchPaciente(paciente: any, id: string): Observable<any> {
        return this.http.patch<any>(`${this.url}paciente/${id}`, paciente, { headers: this.headers })
    }

    updateImagemPaciente(id: string, data: any): Observable<any> {
        return this.http.post<any>(`${this.url}pacienteimagem/${id}`, data, { headers: this.headers })

    }
}
