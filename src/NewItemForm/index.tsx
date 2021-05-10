import { useState } from 'react';
import type { NewItem } from '../shared/types';
import styles from './newItemForm.module.scss';
import { CURRENCY, TAX } from '../shared/CONSTANTS';
import { calculateGross, calculateTax, formatCurrency } from '../shared/utils';

type Props = {
  onItemAdd: (item: NewItem) => void;
};
const NewItemForm = ({ onItemAdd }: Props) => {
  const [name, setName] = useState('');
  const [net, setNet] = useState('');
  const numericNet = net !== '' ? Number(net) : 0;
  const gross = calculateGross(numericNet, TAX * numericNet);
  const calculatedTax = calculateTax(numericNet, TAX);

  function resetField() {
    setName('');
    setNet('');
  }
  return (
    <div className={styles.wrapper}>
      <div>Name *</div>
      <input
        type="text"
        value={name}
        placeholder="Enter a name"
        onChange={({ currentTarget: { value } }) => setName(value)}
      />
      <div>Net *</div>
      <input
        type="number"
        min="0"
        value={net}
        placeholder="Enter an amount"
        onChange={({ currentTarget: { value } }) => {
          const numVal = Number(value);
          const val = numVal >= 0 ? numVal : 0;
          setNet(String(val));
        }}
      />

      <div>Tax</div>
      <div>{TAX * 100}%</div>
      <div>Gross</div>
      <div>{formatCurrency(gross)}</div>

      <div>
        <button onClick={resetField} className={styles.reset}>
          Reset
        </button>
        <button
          disabled={!net || !name}
          onClick={() => {
            const newItem: NewItem = {
              net,
              name,
              tax: String(calculatedTax),
              isFavourite: false,
            };
            onItemAdd(newItem);
          }}
          className={styles.add}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default NewItemForm;
