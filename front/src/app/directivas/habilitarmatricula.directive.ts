import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHabilitarmatricula]'
})
export class HabilitarmatriculaDirective {
  @Input('appHabilitarmatricula') habilitado: boolean | undefined;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    const estadoTexto = this.habilitado ? 'Deshabilitar' : 'Habilitar';
    this.elementRef.nativeElement.innerText = estadoTexto;
  }

}
