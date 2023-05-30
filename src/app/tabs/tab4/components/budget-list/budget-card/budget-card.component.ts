import {Component, Input, OnInit} from '@angular/core';
import {Category} from "../../../../tab5/components/profile-list/categorys-modal/categorys-modal.model";
import {Budget} from "./budget.model";
import {TransactionsService} from "../../../../../services/transactions/transactions.service";
import {CategorysService} from "../../../../../services/categories/categorys.service";

@Component({
  selector: 'budget-card',
  templateUrl: './budget-card.component.html',
  styleUrls: ['./budget-card.component.scss'],
})
export class BudgetCardComponent  implements OnInit {
  @Input() category!: Category;


  constructor(private categorysService: CategorysService) {
  }

  ngOnInit() {
  }

  onDeleteTransaction() {

    if (this.category.id) {
      this.categorysService.deleteBudget(this.category.id);
    } else {
      console.error("Category has no id");
    }
  }
}
