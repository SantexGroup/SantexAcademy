import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registeranswer',
  templateUrl: './registeranswer.component.html',
  styleUrls: ['./registeranswer.component.css']
})
export class RegisteranswerComponent implements OnInit {
  
      showRegisterAnswer: boolean = false;
   constructor(private route: ActivatedRoute) {}

   ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const showRegisterAnswer = params.get('showRegisterAnswer') === 'true'; // Captura y compara el valor del parámetro
      this.showRegisterAnswer = showRegisterAnswer; // Establece showRegisterAnswer
    });
  }
 }
