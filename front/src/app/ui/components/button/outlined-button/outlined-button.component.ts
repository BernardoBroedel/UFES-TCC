import { Component, ViewEncapsulation } from '@angular/core'

@Component({
    selector: 'button[outlined-button]',
    templateUrl: '<ng-content></ng-content>',
    styleUrls: ['./outlined-button.component.scss'],
    host: { '[class.outlined-button]': 'true' },
    encapsulation: ViewEncapsulation.None,
})
export class OutlinedButtonComponent {}
