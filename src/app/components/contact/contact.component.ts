import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  email:string = "emmyseco@gmail.com";
  cel:string = "927 214 825";

  constructor() { }

  ngOnInit(): void {
  }

}
