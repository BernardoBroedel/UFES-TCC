import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoSupervisorComponent } from './user-info-supervisor.component';
import { RouterModule } from '@angular/router'



@NgModule({
    declarations: [UserInfoSupervisorComponent],
    exports: [UserInfoSupervisorComponent],
    imports: [CommonModule, RouterModule],
})
export class UserInfoSupervisorModule {}
