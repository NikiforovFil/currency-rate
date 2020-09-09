import { Injectable } from '@angular/core';
import { BaseApi } from '../core/base-api';
import { HttpClient } from '@angular/common/http';
import { Observable, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CurrencyRateService extends BaseApi {
  //массив для добавления url.
  public url_list = [
    '',
    'https://www.cbr-xml-daily.ru/daily_json.js',
    'https://www.cbr-xml-daily.ru/daily_utf8.xml'
  ];

  public api_key = 0;
  private baseUrl = this.url_list[this.api_key];

  constructor(public http: HttpClient) {
    super(http);
  }

  changeApi(): void {
    this.baseUrl = this.url_list[++this.api_key]
  }

  getCurrency(): Observable<any> {
    return this.get(this.baseUrl)
  }

  getCurrencyInterval(): Observable<any> {
    return interval(10000)
      .pipe(
        switchMap(() => {
          console.log('refresh');
          return this.get(this.baseUrl)
        })
      )
  }
}
