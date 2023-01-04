import { AppLayout } from "components/Layouts";
import Headline from "components/Headline";
import CartItemList from "./components/ProductCardList";
import SearchPanel from "./components/SearchPanel";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <AppLayout>
      <Headline title={t("Home")} />
      <SearchPanel />
      <CartItemList />
    </AppLayout>
  );
};

export default Home;
