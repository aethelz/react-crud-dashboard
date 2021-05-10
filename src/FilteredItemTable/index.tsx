import { useState } from 'react';
import type { Item } from '../shared/types';
import styles from './filteredItemTable.module.scss';
import ItemTable from '../ItemTable';

type Props = {
  items: Item[];
};
const FilteredItemTable = ({ items }: Props) => {
  const [isFiltered, setIsFiltered] = useState(false);
  const filteredItems = isFiltered
    ? items.filter((item, idx) => idx === 1)
    : items;
  return (
    <div className={styles.wrapper}>
      <button onClick={() => setIsFiltered(f => !f)}>Show favourites</button>
      <ItemTable items={filteredItems} />
    </div>
  );
};

export default FilteredItemTable;
