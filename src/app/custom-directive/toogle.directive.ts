import { Directive,HostListener,ElementRef } from '@angular/core';

@Directive({
  selector: '[appToogle]'
})
export class ToogleDirective {

  private elementSelected = false;
 
  constructor(private el: ElementRef) {
  }
 
  ngOnInit() {
  }
 
  @HostListener('click')
  private onClick() {
    this.elementSelected = !this.elementSelected;
    if (this.elementSelected) {
      this.el.nativeElement.classList.add('toggle')
    } else {
      this.el.nativeElement.classList.remove('toggle')
    }
  }
 
}

