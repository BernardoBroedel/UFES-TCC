import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router'
import { BehaviorSubject, filter, map, Observable, switchMap } from 'rxjs'

@Component({
    selector: 'app-sistema-supervisor',
    templateUrl: './sistema-supervisor.component.html',
    styleUrls: ['./sistema-supervisor.component.scss'],
})
export class SistemaSupervisorComponent implements OnInit {
    segmentoRota$: Observable<string>
    paginaMap: Map<string, string> = new Map<string, string>([
        ['inicio', 'Início'],
        ['pacientes', 'Pacientes'],
        ['reabilitadores', 'Reabilitadores'],
        ['planejamentos', 'Planejamentos'],
        ['evolucoes', 'Evoluções'],
        ['paciente', 'Paciente'],
        ['usuario', 'Editar Informações'],
    ])
    nomePagina$: Observable<string>

    private segmentoRotaSubject = new BehaviorSubject<string>('')

    constructor(
        private readonly activatedRoute: ActivatedRoute,
        private readonly router: Router
    ) {
        this.segmentoRota$ = this.segmentoRotaSubject.asObservable()
        this.nomePagina$ = this.segmentoRota$.pipe(
            map((segmentoRota) => this.paginaMap.get(segmentoRota) || '')
        )
    }

    ngOnInit() {
        this.router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                map(() => this.activatedRoute),
                map((route) => {
                    while (route.firstChild) route = route.firstChild
                    return route
                }),
                switchMap((route) => route.url)
            )
            .subscribe((urlSegment) => {
                const segmentoRota = urlSegment[0]?.path.toLowerCase() || ''
                this.segmentoRotaSubject.next(segmentoRota)
            })
    }
}
