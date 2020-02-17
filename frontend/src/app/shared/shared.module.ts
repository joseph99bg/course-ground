import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidateEqualDirective } from './directives/validate-equal.directive';



@NgModule({
  declarations: [ValidateEqualDirective],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
