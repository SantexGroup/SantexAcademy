import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHabilitardocente]'
})
export class HabilitardocenteDirective {
  @Input('appHabilitardocente') habilitado: boolean | undefined;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    const estadoTexto = this.habilitado ? 'Deshabilitar' : 'Habilitar';
    this.elementRef.nativeElement.innerText = estadoTexto;
  }

}
