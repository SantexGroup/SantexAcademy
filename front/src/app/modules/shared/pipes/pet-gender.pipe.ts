import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'petGender'
})
export class PetGenderPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    const DBValue = value;
    let viewingFormat : string = '';
    if (DBValue === "M") {
      viewingFormat = "Macho";
    } else {
      viewingFormat = "Hembra"
    }
    return viewingFormat;
  }

}
