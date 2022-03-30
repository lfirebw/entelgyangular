import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'entelgyangular';
  dataCountry: any[] = [];

  constructor(
    private http: HttpClient
  ){}
  ngOnInit(): void{
    this.http.get("https://restcountries.com/v3.1/lang/spa").subscribe(data=>{
      const totalItems : number = Object.values(data).length;
      
      if(totalItems > 0){
        this.dataCountry = Object.values(data).map(element => element)
      }
    })
  }
}
