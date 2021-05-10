import './App.css';
import { useQuery } from 'react-query';
import { fetchItems } from './shared/api';
import Wrapper from './Wrapper';
import PageLoader from './PageLoader';
import PageError from './PageError';
// import ItemTable from './ItemTable';
import Overview from './Overview';
import FilteredItemTable from './FilteredItemTable';

function App() {
  const { isLoading, data } = useQuery('movies', fetchItems);
  if (isLoading) return <PageLoader />;
  if (!data) return <PageError />;
  return (
    <Wrapper>
      <Overview items={data.items}/>
      <FilteredItemTable items={data.items} />
    </Wrapper>
  );
}

export default App;
