import { Transaction } from '../shared/components/transaction-list/transaction-card/transaction-card.model';

export const exampleData: Transaction[] = [
  {
    id: '1',
    description: 'Grocery shopping at the supermarket',
    category: {
      color: '#ff00ff',
      iconName: 'cart',
      label: 'test',
      id: '1',
    },
    amount: -50.25,
    timestamp: new Date('2023-03-15T12:30:00'),
  },
  {
    id: '2',
    description: 'Monthly bus ticket',
    amount: -60,
    timestamp: new Date('2023-03-14T09:15:00'),
    category: {
      color: '#ff00ff',
      iconName: 'cart',
      label: 'test',
      id: '1',
    },
  },
  {
    id: '3',
    description: 'March salary',
    amount: 2500,
    timestamp: new Date('2023-03-01T00:00:00'),
    category: {
      color: '#ff00ff',
      iconName: 'cart',
      label: 'test',
      id: '1',
    },
  },
];

// Add 27 more example transactions
for (let i = 4; i <= 30; i++) {
  const date = `2023-03-${i < 10 ? '0' + i : i}`;
  exampleData.push({
    id: `${i}`,
    description: `Transaction ${i} description`,
    amount: i % 2 === 0 ? i * 10 : -i * 10,
    timestamp: new Date(`${date}T10:00:00`),
    category: {
      color: '#ff00ff',
      iconName: 'cart',
      label: 'test',
      id: '1',
    },
  });
}
