import {DatePipe} from "@angular/common"

export class DateUtil {

  static getDateAsString(date){
    let datePipe = new DatePipe('en-us');
    let dateAux = datePipe.transform(date, 'yyyy-MM-dd');
    return dateAux;
  }

  static getStringAsDate(date: string){
    let dateAux = new Date(date);
    let utc = new Date(dateAux.getTime() + dateAux.getTimezoneOffset() * 60000);
    return utc;
  }

}
