import { IProduct, ISearchData } from 'interfaces';
import BaseHttpService from './base-http.service'
import productSorter from './product.sorters';

const apiClient =  BaseHttpService();

const getAll = async () => {
    return await apiClient.get(`products`);
}

const getAllProducts = async () => {
    return await apiClient.get(`products`).then(json => json.data);
}

const getProductsAutocomplete = async (searchData: ISearchData) => {
    if (searchData.search === null || searchData.search === '') return [];
    let products = await getAllFiltered(searchData);
    products = products.map((x : IProduct) => x.title);

    return products;
}

const getAllFiltered = async (searchData: ISearchData) => {
    let products = await getAllProducts();

    if (searchData.category !== 'All') 
        products = products.filter((x : IProduct) => x.category === searchData.category);

    if (!(searchData.search === null || searchData.search === '')) 
        products = products.filter((x : IProduct)=> x.title.toLowerCase().includes(searchData.search.toLowerCase()));

    if (searchData.priceMin !== searchData.priceMax)
        products = products.filter((x : IProduct)=> (x.price >= searchData.priceMin && x.price <= searchData.priceMax));

    switch (searchData.sort) {
        case searchData.sortType[1]: products.sort(productSorter.sortPriceDesc); break;
        case searchData.sortType[2]: products.sort(productSorter.sortTitleAsc); break;
        case searchData.sortType[3]: products.sort(productSorter.sortTitleDesc); break;
        case searchData.sortType[4]: products.sort(productSorter.sortRatingAsc); break;
        case searchData.sortType[5]: products.sort(productSorter.sortRatingDesc); break;
        case searchData.sortType[6]: products.sort(productSorter.sortCountAsc); break;
        case searchData.sortType[7]: products.sort(productSorter.sortCountDesc); break;
        default:
            products.sort(productSorter.sortPriceAsc)
      }

    return products;
}

const getById = async (id:number) => {
    return await apiClient.get(`products/${id}`);
}

const getAllProductTitles = async () => {
    return await apiClient.get(`products`).then(json => json.data);
}

const getAllCategories = async () => {
    let categories = await apiClient.get(`products/categories`).then(json => json.data)
    categories.unshift("All");
    return categories;
}

const productServices = {
    getAll,
    getById,
    getAllProductTitles,
    getAllCategories,
    getAllFiltered,
    getProductsAutocomplete
}

export default productServices;