import {Budget} from "../../../../tab4/components/budget-list/budget-card/budget.model";

export interface Category {
  id?: string;
  iconName: string;
  label: string;
  color: string;
  budget?: Budget;
}
