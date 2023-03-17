export interface Filter {
  filterBy: 'income' | 'expense' | 'all';
  sortBy: 'highest' | 'lowest' | 'newest' | 'oldest';
  category: string | null;
}
