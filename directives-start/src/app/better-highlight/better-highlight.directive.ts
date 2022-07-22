import { Directive,
         ElementRef,
         HostBinding,
         HostListener,
         Input,
         OnInit,
         Renderer2 }
from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = '#81a1c1';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elRef: ElementRef,
              private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement,
    //                        'background-color',
    //                        '#81a1c1');
    this.backgroundColor = this.defaultColor
  }

  @HostListener('mouseenter') mouseOver(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement,
    //                        'background-color',
    //                        '#81a1c1', false, false);
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement,
    //                        'background-color',
    //                        'transparent', false, false);
    this.backgroundColor = this.defaultColor;
  }
}
