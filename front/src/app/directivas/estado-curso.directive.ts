import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appEstadoCurso]'
})
export class EstadoCursoDirective {
  @Input('appEstadoCurso') habilitado: boolean | undefined;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    const estadoTexto = this.habilitado ? 'Activado' : 'Desactivado';
    this.elementRef.nativeElement.innerText = estadoTexto;
  }
}
