import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatDividerModule, 
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatSlideToggleModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatSelectModule,
    MatButtonToggleModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatDividerModule, 
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatSlideToggleModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatSelectModule,
    MatButtonToggleModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class SharedModule { }
