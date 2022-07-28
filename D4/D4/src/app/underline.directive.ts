import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appUnderline]'
})
export class UnderlineDirective {

  constructor(private el:ElementRef, private renderer:Renderer2) {

    renderer.setStyle(el.nativeElement, "textDecoration", "underline");
    renderer.setStyle(el.nativeElement, "text-transform", "uppercase");
  }

}
