import { Component, OnInit, Input } from '@angular/core';
import { Curso } from '../../../components/models/curso.interface';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  @Input() curso: Curso = {
    id: '',
    name: '',
    price: 0,
    image: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
