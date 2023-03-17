import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Filter} from "./filter-transaction-list.model";
import {IonModal} from "@ionic/angular";

@Component({
  selector: 'filter-transaction-list',
  templateUrl: './filter-transaction-list.component.html',
  styleUrls: ['./filter-transaction-list.component.scss'],
})
export class FilterTransactionListComponent  implements OnInit {
  @Output() filterApplied = new EventEmitter<Filter>();
  @ViewChild('filterModal', { static: false }) filterModal!: IonModal;
  resetPending: boolean = false;


  filter: Filter = {
    filterBy: 'all',
    sortBy: 'newest',
    category: null,
  };

  constructor() { }

  ngOnInit() { }

  async openModal() {
    await this.filterModal.present();
  }

  applyFilter() {
    const updatedFilter: Filter = { ...this.filter };
    this.filterApplied.emit(updatedFilter);
    this.filterModal.dismiss();
  }

  resetFilter() {
    this.filter = {
      filterBy: 'all',
      sortBy: 'newest',
      category: null,
    };
  }

  setFilterBy(filterBy: 'income' | 'expense' | 'all') {
    this.filter.filterBy = filterBy;
  }

  setSortBy(sortBy: 'highest' | 'lowest' | 'newest' | 'oldest') {
    this.filter.sortBy = sortBy;
  }

  setCategory(category: string | null) {
    this.filter.category = category;
  }
}
