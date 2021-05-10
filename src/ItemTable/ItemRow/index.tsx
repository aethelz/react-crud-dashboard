import Star from './Star';
import type { Item } from '../../shared/types';
import { calculateGross } from '../../shared/utils';
import cross from './cross.svg';
import styles from './itemRow.module.scss';

type Props = {
  item: Item;
};
const ItemRow = ({ item }: Props) => {
  const { name, net, tax } = item;
  const gross = calculateGross(Number(net), Number(tax));
  return (
    <tr>
      <td>{name}</td>
      <td>{net}</td>
      <td>{tax}</td>
      <td>{gross}</td>
      <td>
        <button className={styles.remove}>
          <img src={cross} />
        </button>
        <button className={styles.favorite}>
          <Star painted={false} />
        </button>
      </td>
    </tr>
  );
};

export default ItemRow;
