import { useEffect, useState } from "react";
import { AppLayout } from "components/Layouts";
import { useParams } from "react-router-dom";
import styles from "./styles.module.css";
import ProductDetailsCard from "./components/ProductDetailsCard";
import productServices from "services/product.services";
import { IProductDetails } from "interfaces";

import { LinearProgress } from "@mui/material";

const Details = () => {
  let { id } = useParams();
  const [product, setProduct] = useState<IProductDetails>();

  useEffect(() => {
    (async () => {
      setProduct(await productServices.getById(parseInt(id as string)).then(json => json.data));
    })();
  }, [id]);

  return (
    <AppLayout>
      <div className={styles.productDetails}>
        {product !== undefined 
          ?
          <ProductDetailsCard 
            id={product.id} 
            title={product.title} 
            price={product.price} 
            description={product.description} 
            category={product.category} 
            image={product.image} 
            rating={{
              rate: product.rating.rate,
              count: product.rating.count
            }} 
          />
          : 
          <LinearProgress sx={{width: "100%"}} />
        }    
      </div>
    </AppLayout>
  );
};

export default Details;
