import type { Item } from './types';

export function calculateGross(net: number, tax: number): number {
  return net + tax;
}

