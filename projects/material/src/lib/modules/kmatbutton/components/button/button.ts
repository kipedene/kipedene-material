import { Component, Input, OnInit } from '@angular/core';
import { KmatBtn } from '../../models/button.model';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared-module';

@Component({
  selector: 'kmat-button',
  imports: [
    SharedModule
  ],
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class KmatButton implements OnInit{
  @Input() button!: KmatBtn;
  @Input() isDevelop = false;

  isDisabled = false;
  isHidden   = false;
  isEditing  = false;
  
  editableText = '';

  constructor(){}

  ngOnInit(): void {
    this.editableText = this.button.content;

    if(this.button.hideDuration){
      this.isHidden = true;
      setTimeout(() => this.isHidden = false, this.button.hideDuration);
    }

    if(this.button.disableDuration){
      this.isDisabled = true;
      setTimeout(()=> this.isDisabled = false, this.button.disableDuration)
    }
  }

  handleClick(): void {
    if(!this.isDisabled && this.button.onButtonClick){
      this.button.onButtonClick();
    }
  }

  handleDblClick(): void{
    if(this.isDevelop){
      this.isEditing = true;
    }
  }

  handleBlur(): void {
    this.isEditing = false;
    this.button.content = this.editableText;
  }

  isEnabled(): boolean {
    return this.button.checkButtonEnable ? this.button.checkButtonEnable() : true;
  }
}
