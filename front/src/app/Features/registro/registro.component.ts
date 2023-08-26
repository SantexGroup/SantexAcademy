import { Component, OnInit } from '@angular/core';
import { RegistroService } from 'src/app/core/services/registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  corReg: string = '';
  pasReg: string = '';
  pas2Reg: string = '';
  nomReg: string = '';
  apeReg: string = '';
  dniReg: string = '';
  nacReg: string = '';
  dirReg: string = '';
  codReg: string = '';

  constructor(private service: RegistroService) { }

  ngOnInit(): void {
  }

  botReg() {
    console.log(this.corReg + this.pasReg);
    this.service.registro(
      this.corReg,
      this.pasReg, 
      this.pas2Reg, 
      this.nomReg, 
      this.apeReg, 
      this.dniReg,
      this.nacReg,
      this.dirReg,
      this.codReg).subscribe(respuesta => {
      console.log(respuesta)
    })
  }

}
