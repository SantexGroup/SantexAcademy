import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit{
  @Output() newItemEvent = new EventEmitter<boolean>(); 
  @Input() estado: boolean | undefined;
  
  constructor() { }

  ngOnInit(): void {
  }

  changeEstado():void{
    if(this.estado){
      this.newItemEvent.emit(false);
    }else{
      this.newItemEvent.emit(true);
    }
  }
}
