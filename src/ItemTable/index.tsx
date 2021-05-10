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
    <div className={styles.wrapper}>
      <table>
        <tr>
          <th>Name</th>
          <th>Net</th>
          <th>Tax</th>
          <th>Gross</th>
          <th></th>
        </tr>
        {items.map(item => (
          <ItemRow
            onCrossClick={() => onItemRemove(item.id)}
            onStarClick={() => onItemToggleFavorite(item.id)}
            key={item.id}
            item={item}
          />
        ))}
      </table>
    </div>
  );
};

export default ItemTable;
