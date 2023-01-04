import { AppLayout } from "components/Layouts";
import { useParams } from "react-router-dom";
import styles from "./styles.module.css";
import ProductDetailsCard from "./components/ProductDetailsCard";
import { Box, LinearProgress } from "@mui/material";
import hooks from "hooks/useRenderingCounter";
import Headline from "components/Headline";
import { useTranslation } from "react-i18next";

const Details = () => {
  const { id } = useParams();
  const product = hooks.useProductDetails(id);
  const { t } = useTranslation();

  return (
    <AppLayout>
      <Headline title={t("Details")} />
      <Box className={styles.productDetails}>
        {product !== undefined ? (
          <ProductDetailsCard
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            category={product.category}
            image={product.image}
            rating={{
              rate: product.rating.rate,
              count: product.rating.count,
            }}
          />
        ) : (
          <LinearProgress className={styles.productDetails_progress} />
        )}
      </Box>
    </AppLayout>
  );
};

export default Details;
