import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'readingTime',
  standalone: true
})
export class ReadingTimePipe implements PipeTransform {
  transform(minutes: number): string {
    if (!minutes || minutes <= 0) return 'Tempo di lettura non disponibile';

    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    if (hours === 0) {
      return `Tempo di lettura: ${remainingMinutes} minuti`;
    } else if (remainingMinutes === 0) {
      return `Tempo di lettura: ${hours} ${hours === 1 ? 'ora' : 'ore'}`;
    } else {
      return `Tempo di lettura: ${hours} ${hours === 1 ? 'ora' : 'ore'} e ${remainingMinutes} minuti`;
    }
  }
}