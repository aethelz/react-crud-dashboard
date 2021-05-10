export type Item = {
  id: number;
  name: string;
  net: string;
  tax: string;
};

export type ClientItem = Item & {
  isFavourite: boolean;
};

export type NewItem = Omit<ClientItem, 'id'>;

export type ItemList = {
  items: Item[];
};
