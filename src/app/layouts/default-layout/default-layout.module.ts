import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { DefaultLayoutRoutes } from './default-layout.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { DefaultLayoutComponent } from './default-layout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DefaultLayoutRoutes),
    FormsModule,
    SharedModule
  ],
  declarations: [],
})
export class DefaultLayoutModule { }
