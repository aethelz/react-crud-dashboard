import type { ItemList } from './types';
import { mockResponse } from './mocks';

export const fetchItems = () =>
  fetch(
    'https://dl5mns5bwg.execute-api.eu-central-1.amazonaws.com/prod',
  ).then(res => res.json() as Promise<ItemList>);

export const mockItems = () => Promise.resolve(mockResponse);
