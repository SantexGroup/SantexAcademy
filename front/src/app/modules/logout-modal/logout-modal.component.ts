import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-logout-modal',
  templateUrl: './logout-modal.component.html',
  styleUrls: ['./logout-modal.component.css']
})
export class LogoutModalComponent implements OnInit {
  @Output() closeModal = new EventEmitter<boolean>();
  @Output() logoutConfirmed = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  confirmedLogout(){
    //Emitimos la confirmación de logout al componente padre
    this.logoutConfirmed.emit(true);
  }

  cancelLogout(){
    //Emitimos la cancelación de logout al componente padre
    this.closeModal.emit(false)
  }

}
