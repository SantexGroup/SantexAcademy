import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appEstadoUsuario]'
})
export class EstadoUsuarioDirective implements OnInit {
  @Input('appEstadoUsuario') activoactualmente: boolean | undefined;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    const estadoTexto = this.activoactualmente ? 'Activado' : 'Desactivado';
    this.elementRef.nativeElement.innerText = estadoTexto;
  }
}

