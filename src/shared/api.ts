import type { ItemList } from './types';

export const fetchItems = () =>
  fetch(
    'https://dl5mns5bwg.execute-api.eu-central-1.amazonaws.com/prod',
  ).then(res => res.json() as Promise<ItemList>);

