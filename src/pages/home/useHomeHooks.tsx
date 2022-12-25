import { useEffect, useState, useContext } from "react";
import { SearchContext } from "context/search/SearchContext";
import productServices from "services/product.services";

const useCategories = () => {
  const [categories, setCategories] = useState<string[]>(["All"]);

  useEffect(() => {
    (async () => {
      setCategories(await productServices.getAllCategories());
    })();
  }, []);

  return categories;
};

const useAutocomplete = () => {
  const [autocomplete, setAutocomplete] = useState<string[]>([]);
  const { searchState } = useContext(SearchContext);

  useEffect(() => {
    (async () => {
      setAutocomplete(
        await productServices.getProductsAutocomplete(searchState)
      );
    })();
  }, [searchState]);

  return autocomplete;
};

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const { searchState } = useContext(SearchContext);

  useEffect(() => {
    (async () => {
      setProducts(await productServices.getAllFiltered(searchState));
    })();
  }, [searchState]);

  return products;
};

const homeHooks = {
  useCategories,
  useAutocomplete,
  useProducts,
};

export default homeHooks;
