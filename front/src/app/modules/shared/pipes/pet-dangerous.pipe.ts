import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'petDangerous'
})
export class PetDangerousPipe implements PipeTransform {

  transform(value: boolean, ...args: unknown[]): unknown {
    let stringifiedDangerouness: string = ''
    
    const booleanValue = value;
    stringifiedDangerouness = booleanValue ? "Si" : "No";
    
    return stringifiedDangerouness;
  }

}
