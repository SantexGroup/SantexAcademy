import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AboutUsService } from 'src/app/core/services/about-us.service';
import { AboutUS } from 'src/app/core/interfaces/about-us';

@Component({
  selector: 'app-edit-about-us',
  templateUrl: './edit-about-us.component.html',
  styleUrls: ['./edit-about-us.component.css']
})
export class EditAboutUsComponent implements OnInit {
  form: FormGroup;
  id: number;
  aboutus: AboutUS = {
    id: 0,
    title: '',
    subtitle: '',
    description: '',
    image: '',
    priority: 0,
    active: false,
  };

  constructor(
    private fb: FormBuilder,
    private aboutusService: AboutUsService,
    private router: Router,
    private aRouter: ActivatedRoute,
  ) {
    this.form = this.fb.group({
      title: '',
      subtitle: '',
      description: ['', Validators.required],
      image: '',
      priority: '',
      active: ['', Validators.required],
    });
    this.id = Number(aRouter.snapshot.paramMap.get('id')),
    this.getById(this.id);
  }

  ngOnInit(): void {}
  getById(id: number) {
    this.aboutusService.getAboutById(id).subscribe((data) => {
      this.form.setValue({
        title: data.title,
        subtitle: data.subtitle,
        description: data.description,
        image: data.image,
        priority: data.priority,
        active: data.active,
      });
    });
  }
  update() {
    this.aboutus = {
      id: this.id,
      description: this.form.value.description,
      image: this.form.value.image,
      title: this.form.value.title,
      subtitle: this.form.value.subtitle,
      active: this.form.value.active,
      priority: this.form.value.priority,
    };
    this.aboutusService.putAbout(this.aboutus, this.id).subscribe(
      (data) => {
        this.router.navigate(['/admin/panel/about-us']);
      },
      (error) => {
        console.log(error);
      }
    );
  }


}
