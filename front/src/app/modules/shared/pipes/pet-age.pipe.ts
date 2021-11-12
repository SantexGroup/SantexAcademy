import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'petAge'
})
export class PetAgePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    let stringifiedAge: string = ''
    const years = Math.floor(value / 12);
    const months = value % 12;
    
    // Si tiene un año o más:
    if (years === 1) {
      stringifiedAge = `${years} año `;
    } else if (years > 0) {
      stringifiedAge = `${years} años `;
    }

    // Si tiene un mes o más:
    if (months === 1) {
      stringifiedAge += `${months} mes`;
    } else if (months > 0) {
      stringifiedAge += `${months} meses`;
    }

    // Si ambos valores son cero
    if (years === 0 && months === 0) {
      stringifiedAge = 'Menos de un mes';
    }
    
    return stringifiedAge;
  }

}
