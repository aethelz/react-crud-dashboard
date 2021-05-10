import type { Item } from './types';

export function calculateGross(net: number, tax: number): number {
  return net + tax;
}

export function calculateTotalSum(items: Item[]): number {
  return calculateArraySum(items.map(item => Number(item.net)));
}

export function calculateAverage(items: Item[]): number {
  return calculateTotalSum(items) / items.length;
}

export function calculateArraySum(arr: number[]): number {
  return arr.reduce((a, b) => a + b, 0)
}
