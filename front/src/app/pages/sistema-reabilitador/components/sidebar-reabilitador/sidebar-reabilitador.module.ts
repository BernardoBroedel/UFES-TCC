import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarReabilitadorComponent } from './sidebar-reabilitador.component';



@NgModule({
    declarations: [SidebarReabilitadorComponent],
    exports: [SidebarReabilitadorComponent],
    imports: [CommonModule],
})
export class SidebarReabilitadorModule {}
