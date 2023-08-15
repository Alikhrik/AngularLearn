import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cli-project';
  hello = "Hello, world!";
  rates: NbuRate[] = [];   // Типизированный массив (от TypeScript)
  sortCCFlag = "none";
  sortRateFlag = "none";

  currencies = ["UAH", "USD", "EUR", "XAU"];
  currencyRate = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {  // LiveCycle event - событие "встраивания" компонента в HTML
    // this.loadClick();
  }
  
  changeCurrency(event: any) {
    let currency = event.target.value;
    this.http.get(`https://api.exchangerate.host/latest?base=BTC`)
     .subscribe((BTCrate: any) => {
       this.currencyRate = BTCrate.rates[`${currency}`];
       console.log(this.currencyRate);
    });
  }

  currencyRequest(currency: any) {
    this.http.get(`https://api.exchangerate.host/latest?base=BTC`)
     .subscribe((BTCrate: any) => {
       this.currencyRate = BTCrate.rates[`${currency}`];
       console.log(this.currencyRate);
    });
  }

  loadClick() {
    this.http.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
      .subscribe((resp: any) => { this.rates = resp });
  }

  rateClick(rate: any) {
    alert(`${rate.r030}, ${rate.txt}, ${rate.rate}, ${rate.cc}, ${rate.exchangedate}`);
  }

  sortCCClick() {
    if (this.sortCCFlag == "up") {
      this.rates = this.rates.sort((r1, r2) => r1.cc.localeCompare(r2.cc, "uk"));
      this.sortCCFlag = "down";
    }
    else {
      this.rates = this.rates.sort((r1, r2) => -r1.cc.localeCompare(r2.cc, "uk"));
      this.sortCCFlag = "up";
    }
  }

  sortRateClick() {
    if (this.sortRateFlag == "up") {
      this.rates = this.rates.sort((r1, r2) => r1.rate - r2.rate);
      this.sortRateFlag = "down";
    }
    else {
      this.rates = this.rates.sort((r1, r2) => r2.rate - r1.rate);
      this.sortRateFlag = "up";
    }
  }
}

export interface NbuRate {  // интерфейсы - дополнение от TypeScript
  r030: number,
  txt: String,
  rate: number,
  cc: string,
  exchangedate: String
}