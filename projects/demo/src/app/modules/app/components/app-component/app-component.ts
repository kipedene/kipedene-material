import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SharedModule } from '../../../shared/shared-module';

@Component({
  selector: 'app-root',
  imports: [
    SharedModule
  ],
  templateUrl: './app-component.html',
  styleUrl: './app-component.scss'
})
export class App {
  protected readonly title = signal('Kipedene Material');
}
