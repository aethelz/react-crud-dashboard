import { useState } from 'react';
import type { ClientItem } from '../shared/types';
import styles from './filteredItemTable.module.scss';
import ItemTable from '../ItemTable';

type Props = {
  items: ClientItem[];
  onItemRemove: (idx: number) => void;
  onItemToggleFavorite: (idx: number) => void;
};
const FilteredItemTable = ({
  items,
  onItemRemove,
  onItemToggleFavorite,
}: Props) => {
  const [isFiltered, setIsFiltered] = useState(false);
  const filteredItems = isFiltered
    ? items.filter(item => item.isFavourite)
    : items;
  return (
    <div className={styles.wrapper}>
      <button
        className={styles.filterButton}
        onClick={() => setIsFiltered(f => !f)}
      >
        Show {isFiltered ? 'all' : 'favourites'}
      </button>
      <div className={styles.tableWrapper}>
        <ItemTable
          items={filteredItems}
          onItemRemove={onItemRemove}
          onItemToggleFavorite={onItemToggleFavorite}
        />
      </div>
    </div>
  );
};

export default FilteredItemTable;
