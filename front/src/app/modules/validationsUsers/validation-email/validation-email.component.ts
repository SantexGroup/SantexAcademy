import { Component } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-validation-email',
  templateUrl: './validation-email.component.html',
  styleUrls: ['./validation-email.component.css'],
})
export class ValidationEmailComponent {
  email: string = '';
  code: string = '';
  validateOK: boolean = false;
  constructor(private userService: UserService, private route: ActivatedRoute) {
    if (
      this.route.snapshot.paramMap.get('email') != null &&
      this.route.snapshot.paramMap.get('code') != null
    ) {
      this.email = this.route.snapshot.paramMap.get('email')!;
      this.code = this.route.snapshot.paramMap.get('code')!;
    }
    this.validateCode();
  }
  validateCode() {
    const validate = this.userService.validateCode(this.email, this.code).subscribe(
      (data)=>{
        
      },
      (error)=>{
        this.validateOK=false;
        
      }
);
    
    if(validate){
      this.validateOK = true;
    }
  }
}
