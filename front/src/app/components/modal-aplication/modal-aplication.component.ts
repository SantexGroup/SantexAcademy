import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectToken } from 'src/app/core/auth.selectors';
import { VolunteeringService } from 'src/app/services/volunteering.service';

@Component({
  selector: 'app-modal-aplication',
  templateUrl: './modal-aplication.component.html',
  styleUrls: ['./modal-aplication.component.css'],
})
export class ModalAplicationComponent implements OnInit {
  @Output() closeModalQuestion = new EventEmitter();
  @Output() onModalAfterApplication = new EventEmitter();

  @Input() idOrg: string = '';
  @Input() idVol: string = '';
  @Input() nameOrg: string = '';
  @Input() nameVol: string = '';

  constructor(
    private store: Store,
    private volServices: VolunteeringService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  closeModal() {
    this.closeModalQuestion.emit();
  }

  generateApplication() {
    this.store.select(selectToken).subscribe((token) => {
      if (token) {
        this.volServices
          .applicationVoluntering(token, this.idOrg, this.idVol)
          .subscribe({
            next: (res) => {
              console.log(res);
              this.onModalAfterApplication.emit('success');
              this.closeModalQuestion.emit();
            },
            error: (err) => {
              this.onModalAfterApplication.emit('failed');
              this.closeModalQuestion.emit();
            },
          });
      }
    });
  }
}
