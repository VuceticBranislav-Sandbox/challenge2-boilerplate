import { useContext, useEffect, useState } from 'react'
import { AppLayout } from 'components/Layouts'
import Headline from 'components/Headline';
import productServices from 'services/product.services';
import CartItemList from './components/ProductCardList';
import SearchPanel from './components/SearchPanel';
import { SearchContext } from 'context/search/SearchContext';

const Home = () => {
  const [products, setProducts] = useState([]);
  const { searchState } = useContext(SearchContext);
  
  useEffect(() => {
    (async () => {
      setProducts(await productServices.getAllFiltered(searchState));
    })();
  }, [searchState]);

  return (
    <AppLayout>
      <Headline title='Home' />
      <SearchPanel />
      <CartItemList products={products} />
    </AppLayout>
  )
}

export default Home