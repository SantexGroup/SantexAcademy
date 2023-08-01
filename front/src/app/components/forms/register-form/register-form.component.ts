import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<boolean>(); 
  @Input() estado: boolean | undefined;
  
  constructor() { }

  ngOnInit(): void {
  }

  changeEstado():void{
    if(this.estado){
      this.newItemEvent.emit(false);
      console.log(false);
    }else{
      this.newItemEvent.emit(true);
      console.log(true);
    }
  }
}
