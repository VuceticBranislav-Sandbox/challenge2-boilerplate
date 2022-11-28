import React, { useEffect, useState } from 'react'
import { AppLayout } from 'components/Layouts'
import Headline from 'components/Headline';
import productServices from 'services/product.services';
import CartItemList from './components/ProductCardList';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      setProducts(await productServices.getAll().then(json => json.data));
    })();
  }, []);

  return (
    <AppLayout>
      <Headline title='Home' />
      <CartItemList products={products} />
    </AppLayout>
  )
}

export default Home