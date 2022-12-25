import { AppLayout } from "components/Layouts";
import Headline from "components/Headline";
import CartItemList from "./components/ProductCardList";
import SearchPanel from "./components/SearchPanel";

const Home = () => {
  return (
    <AppLayout>
      <Headline title="Home" />
      <SearchPanel />
      <CartItemList />
    </AppLayout>
  );
};

export default Home;
