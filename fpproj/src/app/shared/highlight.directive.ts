import { Directive, ElementRef, Renderer2, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[fpHighlight]'
})
export class HighlightDirective implements OnInit {

  @Input() fpHighlight;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    console.log('directive');
    console.log(el);
  }

  ngOnInit() {
    this.fpHighlight = this.fpHighlight || 'pink';
  }

  @HostListener('click')
  handleClick() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.fpHighlight);

  }

}
