import {Component, Input, OnInit} from '@angular/core';
import {Category} from "../../../../tab5/components/profile-list/categorys-modal/categorys-modal.model";
import {Budget} from "./budget.model";

@Component({
  selector: 'budget-card',
  templateUrl: './budget-card.component.html',
  styleUrls: ['./budget-card.component.scss'],
})
export class BudgetCardComponent  implements OnInit {
  @Input() category!: Category;


  constructor() { }

  ngOnInit() {}

}
