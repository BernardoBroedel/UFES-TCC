import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoReabilitadorComponent } from './user-info-reabilitador.component';
import { RouterModule } from '@angular/router'



@NgModule({
    declarations: [UserInfoReabilitadorComponent],
    exports: [UserInfoReabilitadorComponent],
    imports: [CommonModule, RouterModule],
})
export class UserInfoReabilitadorModule {}
