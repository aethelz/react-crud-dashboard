import type { Item, ClientItem } from './types';
import { CURRENCY } from './CONSTANTS';

export function calculateTax(net: number, taxPercent: number): number {
  return net * (1 + taxPercent);
}

export function calculateGross(net: number, calculatedTax: number): number {
  return net + calculatedTax;
}

export function calculateTotalSum(items: Item[]): number {
  return calculateArraySum(items.map(item => Number(item.net)));
}

export function calculateAverage(items: Item[]): number {
  return calculateTotalSum(items) / items.length;
}

export function calculateArraySum(arr: number[]): number {
  return arr.reduce((a, b) => a + b, 0);
}

export function makeClientItemList(items: Item[]): ClientItem[] {
  const clientItems: ClientItem[] = items.map(item => ({
    ...item,
    isFavourite: false,
  }));
  return clientItems;
}

// Simulate requesting UUID from backend
export function generateID(items: ClientItem[]): Promise<number> {
  const maxID = Math.max(...items.map(item => item.id));
  return Promise.resolve(maxID + 1);
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(value);
}
