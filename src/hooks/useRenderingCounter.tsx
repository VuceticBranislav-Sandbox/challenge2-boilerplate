import { SearchContext } from 'context/search/SearchContext'
import { IProductDetails } from 'interfaces'
import { useEffect, useState, useContext } from 'react'
import productServices from 'services/product.services'

const useCategories = () => {
  const [categories, setCategories] = useState<string[]>(["All"])

  useEffect(() => {
    (async () => {
      setCategories(await productServices.getAllCategories())
    })()
  }, [])

  return categories
}

const useProducts = () => {
  const [products, setProducts] = useState([])
  const { searchState } = useContext(SearchContext)
  
  useEffect(() => {
    (async () => {
      setProducts(await productServices.getAllFiltered(searchState))
    })()
  }, [searchState])

  return products
}

const useAutocomplete = () => {  
  const [autocomplete, setAutocomplete] = useState<string[]>([])
  const { searchState } = useContext(SearchContext)

  useEffect(() => {
    (async () => {
      setAutocomplete(await productServices.getProductsAutocomplete(searchState))
    })()
  }, [searchState]) 

  return autocomplete
}

const useProductDetails = (id: string | undefined) => {  
  const [product, setProduct] = useState<IProductDetails>()

  useEffect(() => {
    (async () => {
      setProduct(await productServices.getById(parseInt(id as string)).then(json => json.data))
    })()
  }, [id])

  return product
}

const hooks = {
  useCategories,
  useProducts,
  useAutocomplete,
  useProductDetails
}

export default hooks