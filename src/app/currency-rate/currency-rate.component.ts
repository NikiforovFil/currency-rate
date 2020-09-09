import { Component, OnInit } from '@angular/core';
import { CurrencyRateService } from '../services/currency-rate.service';

@Component({
  selector: 'app-currency-rate',
  templateUrl: './currency-rate.component.html',
  styleUrls: ['./currency-rate.component.scss']
})
export class CurrencyRateComponent implements OnInit {
  currency: number;
  isLoaded = false;

  constructor(private currencyService: CurrencyRateService) { }

  ngOnInit(): void {
    this.loadCurrencyRate()
  }

  loadCurrencyRate(): void {
    this.currencyService.getCurrency()
      .subscribe(data => {
        this.currency = data.Valute.USD.Value;
        this.isLoaded = true;
        this.currencyService.getCurrencyInterval()
          .subscribe(data => this.currency = data.Valute.USD.Value)
      },
        error => {
          if (this.currencyService.api_key < this.currencyService.url_list.length) {
            console.log(error.message)
            this.currencyService.changeApi();
            this.loadCurrencyRate()
          }
        },
      );
  }
}
