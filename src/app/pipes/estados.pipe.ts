import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estados',
  standalone: true
})
export class EstadosPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    const text = value === 0 ? "Pending" : "Aprobado";
    return text
  }

}
