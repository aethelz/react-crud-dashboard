import { useState } from 'react';
import type { NewItem } from '../shared/types';
import styles from './newItemForm.module.scss';
import { TAX } from '../shared/CONSTANTS';
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

  function netValidator(n: number): number {
    // Prevent net from going below zero
    const validatedNet = n >= 0 ? n : 0;
    return validatedNet;
  }

  function onItemAddClick() {
    const newItem: NewItem = {
      net,
      name,
      tax: String(calculatedTax),
      isFavourite: false,
    };
    onItemAdd(newItem);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputWrapper}>
        <label>
          Name *<br />
          <input
            id="name"
            data-cy="nameInput"
            type="text"
            value={name}
            placeholder="Enter a name"
            onChange={({ currentTarget: { value } }) => setName(value)}
          />
        </label>
        <label>
          Net *<br />
          <input
            id="net"
            data-cy="netInput"
            type="number"
            min="0"
            value={net}
            placeholder="Enter an amount"
            onChange={({ currentTarget: { value } }) => {
              const validatetNet = netValidator(Number(value));
              setNet(String(validatetNet));
            }}
          />
        </label>
      </div>

      <div className={styles.totalWrapper}>
        <div>
          <div>Tax</div>
          <div>{(TAX * 100).toFixed(2)} %</div>
        </div>
        <div>
          <div>Gross</div>
          <div>{formatCurrency(gross)}</div>
        </div>
      </div>

      <div className={styles.buttonWrapper}>
        <button onClick={resetField} className={styles.reset}>
          Reset
        </button>
        <button
          disabled={!net || !name}
          data-cy="addItem"
          onClick={onItemAddClick}
          className={styles.add}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default NewItemForm;
