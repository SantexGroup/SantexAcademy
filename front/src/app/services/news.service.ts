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
      id: 2,
      title: 'Curso bordado punto cruz',
      autor:'Equipo editorial indeed',
      description: ' Aprenderas a confeccionar bordados con punto cruz  ',
      sourceUrl: "https://www.facebook.com/permalink.php?story_fbid=pfbid02aM1vQtpVs9b49AK7ADYrHCkAMDa3QCKmLgHyvSbidGg9tHky7XrdT8qqqEyjxKQUl&id=100063640024874",
      imageUrl: "https://scontent.fcor10-3.fna.fbcdn.net/v/t39.30808-6/385069333_806004584864202_6610361793456488804_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5614bc&_nc_ohc=XepmxOCR2QQAX8f22M0&_nc_ht=scontent.fcor10-3.fna&oh=00_AfCo3vxGYsVsdTVMpPgyn6RpstDR75PpWmKbzgWUqn03ww&oe=652A5175"
    },
    {
      id: 3,
      title: 'Curso de cocina saludable',
      autor:'Incubadora del NOC',
      description: 'Hoy tan en auge la cocina saludable aprenderas a preparar platos deliciosos y sanos',
      sourceUrl: "https://www.facebook.com/permalink.php?story_fbid=pfbid0HY6hauCZjxBEji8Quq9hZff3pNsaYig6cSr89w8gVN3WEeUTXdbyLrBFmczftYBkl&id=100063640024874",
      imageUrl: "https://scontent.fcor10-3.fna.fbcdn.net/v/t39.30808-6/386339775_807981641333163_128921996252550808_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5614bc&_nc_ohc=tuVUOnhaOSUAX-4WAg5&_nc_ht=scontent.fcor10-3.fna&oh=00_AfB6shJZ3vBuEvC_QDeZGngGFGqsPxXU7QGAue6Q9VO8BQ&oe=652A3A1E"
    },
    {
      id: 4,
      title: 'Curso de electricidad basico',
      autor:'Incubadora del NOC',
      description: 'Aprenderas las conexiones basicas de un circuito electrico',
      sourceUrl: "https://www.facebook.com/permalink.php?story_fbid=pfbid02a6AUMLB9bzh5LrS3jQ95Epr6FmcMWBfwg5Kr8zMLF4e41FPVudaRAR9FYjJQYkUvl&id=100063640024874",
      imageUrl: "https://scontent.fcor10-4.fna.fbcdn.net/v/t39.30808-6/385253718_807981141333213_5250940909325400472_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5614bc&_nc_ohc=36MIzAyC4fkAX_2yMrX&_nc_ht=scontent.fcor10-4.fna&oh=00_AfBCJrlrOLlkuVU_Mn-4-fcpU8ed-ep_g_uWHMlk7uh9qg&oe=6528DA5C"
    },
    {
      id: 5,
      title: 'Curso de bartender',
      autor:'Incubadora del NOC',
      description: 'Aprenderas a preparar las mas ricas bebidas ',
      sourceUrl: "https://www.facebook.com/permalink.php?story_fbid=pfbid02VHTesMjQFFNgnifz4wSKv9n3TYPY2dzuUZCg7SW3TJRz6SGd9XAdehnFpvsexULSl&id=100063640024874",
      imageUrl: "https://scontent.fcor10-3.fna.fbcdn.net/v/t39.30808-6/386730726_807976764666984_4852883401303306437_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5614bc&_nc_ohc=oFSYoXonECAAX-wy2g3&_nc_ht=scontent.fcor10-3.fna&oh=00_AfCPSZ5ElvLQaX053ZMCD7QRnmIiUPleXLi-D_wRwGHN8w&oe=65297E46"
    },
    {
      id: 6,
      title: 'Cursos disponibles',
      autor:'Incubadora del NOC',
      description: 'Podes inscribirte en cualquiera de nuestros cursos disponibles',
      sourceUrl: "https://www.facebook.com/permalink.php?story_fbid=pfbid0Xa9j1azdohpDDjKNSfqKHimQWUvcS84Duk5hRyssDc7B267YwsfyHaTCJdh7oy6Ul&id=100063640024874",
      imageUrl: "https://scontent.fcor10-4.fna.fbcdn.net/v/t39.30808-6/386340307_806011981530129_5575405270560351854_n.jpg?stp=dst-jpg_s600x600&_nc_cat=111&ccb=1-7&_nc_sid=5614bc&_nc_ohc=0s2u_vBbvSsAX9YF7Tq&_nc_ht=scontent.fcor10-4.fna&oh=00_AfANWltRj1drcLnwS1DIKwckTS6a3SLhDq37mstkl-cjgw&oe=652A4A73"
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
