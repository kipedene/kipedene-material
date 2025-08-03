import { NgModule } from '@angular/core';
import { KmatCard } from './components/card/card'
import { SharedModule } from '../../shared/shared-module';


@NgModule({
  declarations: [
  ],
  imports: [
    KmatCard
  ],
  exports: [
    KmatCard
  ]
})
export class KmatCardModule { }
