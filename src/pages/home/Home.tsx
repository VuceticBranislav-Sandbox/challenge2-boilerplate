import { AppLayout } from 'components/Layouts'
import Headline from 'components/Headline'
import CartItemList from './components/ProductCardList'
import SearchPanel from './components/SearchPanel'
import hooks from 'hooks/useRenderingCounter'

const Home = () => { 
  const products = hooks.useProducts()
  
  return (
    <AppLayout>
      <Headline title='Home' />
      <SearchPanel />
      <CartItemList products={products} />
    </AppLayout>
  )
}

export default Home