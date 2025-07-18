import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'alarmType'
})
export class AlarmTypePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    const alarmType: string = value as string;
    switch (alarmType) {
      case "CHARGING_INTERRUPTED":
        return "Przerwano ładowanie";
      case "CART_NOT_MATCH" :
        return "Ładownie na niewłaściwym prostowniku";
      case "CHARGING_WITHOUT_CART":
        return "Ładownie bez tagu RFID"
      case "CONNECTION_LOST":
        return "Utracono połączenie z siecią";
      case "CONNECTION_RESTORE":
        return "Przywrócono połączenie z siecią";
      default:
        return "Nie rozpoznano błędu";
    }
  }

}
