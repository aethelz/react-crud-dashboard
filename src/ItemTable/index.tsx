import type { Item } from '../shared/types';
import ItemRow from './ItemRow';
import styles from './itemTable.module.scss';

type Props = {
  items: Item[];
};
const ItemTable = ({ items }: Props) => {
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
          <ItemRow key={item.id} item={item} />
        ))}
      </table>
    </div>
  );
};

export default ItemTable;
