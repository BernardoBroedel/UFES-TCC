import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarSupervisorComponent } from './sidebar-supervisor.component';
import { RouterModule } from '@angular/router'



@NgModule({
    declarations: [SidebarSupervisorComponent],
    exports: [SidebarSupervisorComponent],
    imports: [CommonModule, RouterModule],
})
export class SidebarSupervisorModule {}
