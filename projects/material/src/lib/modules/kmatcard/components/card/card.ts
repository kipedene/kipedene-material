import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared-module';

@Component({
  selector: 'kmat-card',
  imports: [
    SharedModule
  ],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class KmatCard {

}
