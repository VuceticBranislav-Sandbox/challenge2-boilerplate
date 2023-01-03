import { IProduct } from "interfaces";
import { useEffect, useState } from "react";
import productServices from "services/product.services";

const useProductDetails = (id: string | undefined) => {
  const [product, setProduct] = useState<IProduct>();

  useEffect(() => {
    (async () => {
      setProduct(
        await productServices
          .getById(parseInt(id as string))
          .then((json) => json.data)
      );
    })();
  }, [id]);

  return product;
};

const hooks = {
  useProductDetails,
};

export default hooks;
