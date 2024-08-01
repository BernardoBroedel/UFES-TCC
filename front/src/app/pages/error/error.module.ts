import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ErrorComponent } from './error.component'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
    {
        path: '',
        component: ErrorComponent,
    },
]
@NgModule({
    declarations: [ErrorComponent],
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [ErrorComponent],
})
export class ErrorModule {}
