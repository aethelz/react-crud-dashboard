import './App.css';
import { useQuery } from 'react-query';
import { fetchItems } from './shared/api';
import Wrapper from './Wrapper';
import PageLoader from './PageLoader';
import PageError from './PageError';
import ItemTable from './ItemTable';

function App() {
  const { isLoading, data } = useQuery('movies', fetchItems);
  if (isLoading) return <PageLoader />;
  if (!data) return <PageError />;
  return (
    <Wrapper>
      <ItemTable items={data.items} />
    </Wrapper>
  );
}

export default App;
