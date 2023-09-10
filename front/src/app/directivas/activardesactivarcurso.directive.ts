import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appActivardesactivarcurso]'
})
export class ActivardesactivarcursoDirective {
  @Input('appActivardesactivarcurso') habilitado: boolean | undefined;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    const estadoTexto = this.habilitado ? 'Desactivar' : 'Activar';
    this.elementRef.nativeElement.innerText = estadoTexto;
  }

}
