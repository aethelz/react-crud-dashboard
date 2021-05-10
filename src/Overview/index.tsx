import type { ClientItem } from '../shared/types';
import {
  calculateTotalSum,
  calculateAverage,
  formatCurrency,
} from '../shared/utils';
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
        <div>Overview</div>
        <div>
          <div>Total Sum</div>
          <div data-cy="overviewSum">{formatCurrency(sum)}</div>
        </div>

        <div>
          <div>Average</div>
          <div data-cy="overviewAverage">{formatCurrency(average)}</div>
        </div>

        <div>
          <div>Total Items</div>
          <div data-cy="overviewItemCount">{itemsCount}</div>
        </div>
    </div>
  );
};

export default Overview;
