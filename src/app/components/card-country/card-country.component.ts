import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-country',
  templateUrl: './card-country.component.html',
  styleUrls: ['./card-country.component.css']
})
export class CardCountryComponent implements OnInit {
  @Input() country:any = {}

  constructor() { }

  ngOnInit(): void {
  }

  getSrcFlag(): string {
    let result = '';
    if(this.country != null && Object.values(this.country).length > 0){
      const countrySign = this.country.cca2.toLowerCase();
      result = String.prototype.concat("https://flagcdn.com/",countrySign,".svg");
    }
    return result;
  }
  getSrcSet(): string {
    let result = '';
    if(this.country != null && Object.values(this.country).length > 0){
      const countrySign = this.country.cca2.toLowerCase();
      result = String.prototype.concat("https://flagcdn.com/w320/",countrySign,".png");
    }
    return result;
  }

}
