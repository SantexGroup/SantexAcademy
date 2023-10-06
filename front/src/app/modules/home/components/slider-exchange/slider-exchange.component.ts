import { Component } from '@angular/core';

@Component({
  selector: 'app-slider-exchange',
  templateUrl: './slider-exchange.component.html',
  styleUrls: ['./slider-exchange.component.css']
})
export class SliderExchangeComponent {


  isModalOpen = false;

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }
}
