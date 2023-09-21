import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HostListener } from '@angular/core';

@Component({
   selector: 'app-registeranswer',
   templateUrl: './registeranswer.component.html',
   styleUrls: ['./registeranswer.component.css']
})

export class RegisteranswerComponent implements OnInit {
      showRegisterAnswer: boolean = false;
      showFloatingPopup: boolean = false;

    constructor(
      private router: Router,
      private route: ActivatedRoute,
      ) {}

    ngOnInit(): void {
      }

      @HostListener('document:mousemove', ['$event'])
onMouseMove(event: MouseEvent) {
  if (!this.showFloatingPopup) {
    const showPopupTimeout = setTimeout(() => {
      this.showFloatingPopup = true;
    }, 3000);

    document.addEventListener('mousemove', () => {
      if (!this.showFloatingPopup) {
        clearTimeout(showPopupTimeout);
        this.showFloatingPopup = true;
      }
    }, { once: true });
  }
}

  closePopup() {
    this.showFloatingPopup = false;
    
    this.router.navigate(['login']);
  }
}
