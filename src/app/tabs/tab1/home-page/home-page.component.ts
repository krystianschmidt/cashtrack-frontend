import { Component, OnInit } from '@angular/core';
import {InfiniteScrollCustomEvent, IonInfiniteScroll} from "@ionic/angular";
import {exampleData} from "../../../example-data/transaction-card";

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  transactions = exampleData;

  constructor() {
  }


  ngOnInit() {

  }





}
