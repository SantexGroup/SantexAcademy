import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private news = [
    {
      id: 1,
      title: '20 lenguajes de programación más usados',
      autor: 'Maricela Ochoa Serafín',
      description: 'Entre las 10 habilidades IT más solicitadas en el mercado, aparece la programación con estas plataformas.',
      sourceUrl: "https://www.itmastersmag.com/noticias-analisis/12-lenguajes-de-programacion-mas-usados/",
      imageUrl: "https://www.itmastersmag.com/wp-content/uploads/2022/02/programador-tres-pantallas.png"
    },
    {
      id: 1,
      title: '',
      autor:'',
      description: '',
      sourceUrl: "",
      imageUrl: ""
    },
    {
      id: 1,
      title: '',
      autor:'',
      description: '',
      sourceUrl: "",
      imageUrl: ""
    },
    {
      id: 1,
      title: '',
      autor:'',
      description: '',
      sourceUrl: "",
      imageUrl: ""
    },
    {
      id: 1,
      title: '',
      autor:'',
      description: '',
      sourceUrl: "",
      imageUrl: ""
    },
    {
      id: 1,
      title: '',
      autor:'',
      description: '',
      sourceUrl: "",
      imageUrl: ""
    },

  ];

  constructor() { }

  getNews(): any[] {
    return this.news;
  }

  getNewsById(id: number) {
    return this.news.find(news => news.id === id);
  }
}
