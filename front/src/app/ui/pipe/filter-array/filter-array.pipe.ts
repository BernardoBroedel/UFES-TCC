import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'filterArray',
})
export class FilterArrayPipe implements PipeTransform {
    transform<T>(array: T[], propriedade: string, texto: string): T[] {
        if (!array || !propriedade || !texto) {
            return array
        }

        return array.filter((item) => (item as any)[propriedade].includes(texto))
    }
}
