import type { ClientItem } from '../shared/types';
import ItemRow from './ItemRow';
import styles from './itemTable.module.scss';

type Props = {
  items: ClientItem[];
  onItemRemove: (idx: number) => void;
  onItemToggleFavorite: (idx: number) => void;
};
const ItemTable = ({ items, onItemRemove, onItemToggleFavorite }: Props) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Net</th>
          <th>Tax</th>
          <th>Gross</th>
          <th></th>
        </tr>
      </thead>
      <tbody data-cy="itemContainer">
        {items.map(item => (
          <ItemRow
            onCrossClick={() => onItemRemove(item.id)}
            onStarClick={() => onItemToggleFavorite(item.id)}
            key={item.id}
            item={item}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ItemTable;
