import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appColorMethod]'
})
export class ColorMethodDirective implements OnInit {

  @Input() appColorMethod = '';

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.el.nativeElement.classList.add(this.appColorMethod);
  }


}
