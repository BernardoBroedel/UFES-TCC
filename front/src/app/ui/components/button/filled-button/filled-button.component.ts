import { Component, ViewEncapsulation } from '@angular/core'

@Component({
    selector: 'button[filled-button]',
    template: '<ng-content></ng-content>',
    styleUrls: ['./filled-button.component.scss'],
    host: { '[class.filled-button]': 'true' },
    encapsulation: ViewEncapsulation.None,
})
export class FilledButtonComponent {}
