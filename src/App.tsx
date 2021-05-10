import './App.css';
import styles from './app.module.scss';
import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { fetchItems } from './shared/api';
import type { ClientItem, NewItem } from './shared/types';
import { makeClientItemList, generateID } from './shared/utils';
import Wrapper from './Wrapper';
import Header from './Header';
import PageLoader from './PageLoader';
import PageError from './PageError';
import Overview from './Overview';
import NewItemForm from './NewItemForm';
import FilteredItemTable from './FilteredItemTable';

function App() {
  const [clientItems, setClientItems] = useState<ClientItem[]>([]);
  const { isLoading, data } = useQuery('items', fetchItems, {
    staleTime: Number.POSITIVE_INFINITY,
  });
  useEffect(() => {
    if (data && !clientItems.length) {
      setClientItems(makeClientItemList(data.items));
    }
  }, [data]);

  function onItemRemove(id: number) {
    setClientItems(items => items.filter(item => item.id !== id));
  }
  function onItemToggleFavorite(id: number) {
    const updatedItems = [...clientItems];
    const changedItem = updatedItems.find(item => item.id === id)!;
    changedItem.isFavourite = !changedItem.isFavourite;
    setClientItems(updatedItems);
  }
  async function onItemAdd(item: NewItem) {
    const id = await generateID(clientItems);
    const itemWithID = { ...item, id };
    setClientItems(items => [itemWithID, ...items]);
  }

  if (isLoading) return <PageLoader />;
  if (!data) return <PageError />;

  return (
    <Wrapper>
      <Header />
      <div className={styles.bodyWrapper}>
        <div className={styles.nameOverviewWrapper}>
          <NewItemForm onItemAdd={onItemAdd} />
          <Overview items={clientItems} />
        </div>
        <FilteredItemTable
          items={clientItems}
          onItemRemove={onItemRemove}
          onItemToggleFavorite={onItemToggleFavorite}
        />
      </div>
    </Wrapper>
  );
}

export default App;
