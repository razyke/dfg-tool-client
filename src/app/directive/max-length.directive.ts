import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appMaxLength]'
})
export class MaxLengthDirective {

  constructor(private el: ElementRef) { }
  @Input() maxLength: number;

  @HostListener('keydown', ['$event'])
  preventTypingIfMoreThanMaxLength(event): void {
    if (event.key === 'Enter' || event.key === 'Escape' || event.key === 'Backspace'
      || event.key === 'Delete' || event.key === 'ArrowLeft' || event.key === 'ArrowRight') { return; }
    if (this.el.nativeElement.innerText.length > this.maxLength ?? 40) {
      event.preventDefault();
    }
  }
}
