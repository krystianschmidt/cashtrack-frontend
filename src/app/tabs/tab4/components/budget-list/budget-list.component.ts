import { Component, OnInit } from '@angular/core';
import {CategorysService} from "../../../../services/categories/categorys.service";
import {filter, map} from "rxjs";
import {Category} from "../../../tab5/components/profile-list/categorys-modal/categorys-modal.model";

@Component({
  selector: 'budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.scss'],
})
export class BudgetListComponent  implements OnInit {

  categories$ = this.categorysService.categories$.pipe(
    map( categories => categories.filter(c => c.budget?.amount != null))
  )

  constructor(private categorysService: CategorysService) { }

  ngOnInit() {
    this.categories$.subscribe()
  }

}
