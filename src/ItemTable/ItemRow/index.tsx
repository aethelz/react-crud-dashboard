import Star from './Star';
import type { ClientItem } from '../../shared/types';
import { calculateGross, formatCurrency } from '../../shared/utils';
import cross from './cross.svg';
import styles from './itemRow.module.scss';

type Props = {
  item: ClientItem;
  onCrossClick: () => void;
  onStarClick: () => void;
};
const ItemRow = ({ item, onCrossClick, onStarClick }: Props) => {
  const { name, net, tax } = item;
  const numericNet = Number(net);
  const numericTax = Number(tax);
  const gross = calculateGross(numericNet, numericTax);
  return (
    <tr>
      <td>{name}</td>
      <td>{formatCurrency(numericNet)}</td>
      <td>{formatCurrency(numericTax)}</td>
      <td>{formatCurrency(gross)}</td>
      <td>
        <button className={styles.remove} onClick={onCrossClick}>
          <img src={cross} />
        </button>
        <button className={styles.favorite} onClick={onStarClick}>
          <Star painted={item.isFavourite} />
        </button>
      </td>
    </tr>
  );
};

export default ItemRow;
