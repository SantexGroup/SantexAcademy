import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-optionregister',
  templateUrl: './card-optionregister.component.html',
  styleUrls: ['./card-optionregister.component.css'],
})
export class CardOptionregisterComponent {
  @Input() itemsList: string[] = [];
  @Input() textBtnOne: string = '';
  @Input() textBtnTwo: string = '';
  @Input() subtitle: string = '';
  @Input() route: string = '';

  constructor(private router: Router) {}

  navigateToRegister() {
    this.router.navigate([this.route]);
  }
}
