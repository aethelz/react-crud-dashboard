import type { ClientItem } from '../shared/types';
import { calculateTotalSum, calculateAverage, formatCurrency } from '../shared/utils';
import styles from './overview.module.scss';

type Props = {
  items: ClientItem[];
};
const Overview = ({ items }: Props) => {
  const sum = calculateTotalSum(items);
  const average = calculateAverage(items);
  const itemsCount = items.length;
  return (
    <div className={styles.wrapper}>
      <h2>Overview</h2>
      <div className={styles.tableWrapper}>
        <div>
          <div>Total Sum</div>
          <div>{formatCurrency(sum)}</div>
        </div>

        <div>
          <div>Average</div>
          <div>{formatCurrency(average)}</div>
        </div>

        <div>
          <div>Total Items</div>
          <div>{itemsCount}</div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
