import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlights]'
})
export class HighlightsDirective {
  @Input() appHighlight = '';

  //   constructor(private el: ElementRef) {
  //     this.el.nativeElement.style.backgroundColor = 'lightblue';
  //  }

  //===============mouse over and out==============
  // constructor(private el: ElementRef) { }

  // @HostListener('mouseenter') onMouseEnter() {
  //   this.highlight('lightpink');
  // }

  // @HostListener('mouseleave') onMouseLeave() {
  //   this.highlight('');
  // }

  // private highlight(color: string) {
  //   this.el.nativeElement.style.backgroundColor = color;
  // }

  constructor(private el: ElementRef) { }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight);
  }
}
