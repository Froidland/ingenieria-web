import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColores]'
})
export class ColoresDirective {

  constructor(el: ElementRef) { 
    el.nativeElement.backgroundColor = 'pink';
  }

}
