import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../../core/services/spinner.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  constructor(spinnerService:SpinnerService) { 

    this.mostrarSpinner = spinnerService.getMostrarSpinner;

  }

  mostrarSpinner:Observable<boolean>;

  ngOnInit(): void {

  }

}
