import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KmatCard } from './components/card/card'
import { SharedModule } from '../../shared/shared-module';


@NgModule({
  declarations: [
    KmatCard
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    KmatCard
  ]
})
export class KmatCardModule { }
