import {Component, Input, OnInit} from '@angular/core';
import {Category} from "../../tab5/components/profile-list/categorys-modal/categorys-modal.model";

@Component({
  selector: 'budget-page',
  templateUrl: './budget-page.component.html',
  styleUrls: ['./budget-page.component.scss'],
})
export class BudgetPageComponent  implements OnInit {

  @Input() selectedMonth: number;


  constructor() {
    this.selectedMonth = new Date().getMonth();
  }

  ngOnInit() {}

}
