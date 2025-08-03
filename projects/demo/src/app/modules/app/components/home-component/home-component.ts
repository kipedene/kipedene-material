import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared-module';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss'
})
export class HomeComponent {
  constructor(
    private router: Router
  ){}

  handleGetStarted(){
    this.router.navigateByUrl("/components");
  }
}
