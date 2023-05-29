import {Category} from "../../../../tabs/tab5/components/profile-list/categorys-modal/categorys-modal.model";

export interface Transaction {
  id: string;
  category: Category;
  description: string;
  amount: number;
  timestamp: Date;
}
