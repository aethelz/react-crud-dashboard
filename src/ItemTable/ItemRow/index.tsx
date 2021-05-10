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
        <button
          data-cy={`deleteItemN${item.id}`}
          className={styles.remove}
          onClick={onCrossClick}
        >
          <img alt="delete item" src={cross} />
        </button>
        <button
          data-cy={`star${item.id}`}
          className={styles.favorite}
          onClick={onStarClick}
        >
          <Star painted={item.isFavourite} />
        </button>
      </td>
    </tr>
  );
};

export default ItemRow;
