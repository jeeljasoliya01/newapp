import { Directive } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective{

  isLogIn : boolean = false;
   isLogOut : boolean = true; 
  constructor() { }

}
