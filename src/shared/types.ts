export type Item = {
  id: number;
  name: string;
  net: string;
  tax: string
};

export type ItemList = {
  items: Item[];
};
