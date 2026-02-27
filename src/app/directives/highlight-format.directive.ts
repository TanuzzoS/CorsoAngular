import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightFormat]',
  standalone: true
})
export class HighlightFormatDirective {

  constructor(private el: ElementRef) {}

  @HostListener('click')
  onClick() {
    // Rimuove evidenziazione da tutti i fratelli
    const parent = this.el.nativeElement.parentElement;
    if (parent) {
      parent.querySelectorAll('[appHighlightFormat]').forEach((el: HTMLElement) => {
        el.style.backgroundColor = '';
        el.style.border = '';
      });
    }
    // Applica azzurro all'elemento cliccato
    this.el.nativeElement.style.backgroundColor = '#e8f4fd';
    this.el.nativeElement.style.border = '2px solid #007bff';
  }
}