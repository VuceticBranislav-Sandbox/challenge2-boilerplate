import { IProduct } from "interfaces"

const sortPriceAsc = (a: IProduct, b: IProduct) => {
    return a.price > b.price ? 1 : -1
}

const sortPriceDesc = (a: IProduct, b: IProduct) => {
    return a.price < b.price ? 1 : -1
}

const sortTitleAsc = (a: IProduct, b: IProduct) => {
    return a.title > b.title ? 1 : -1
}

const sortTitleDesc = (a: IProduct, b: IProduct) => {
    return a.title < b.title ? 1 : -1
}

const sortRatingAsc = (a: IProduct, b: IProduct) => {
    return a.rating.rate > b.rating.rate ? 1 : -1
}

const sortRatingDesc = (a: IProduct, b: IProduct) => {
    return a.rating.rate < b.rating.rate ? 1 : -1
}

const sortCountAsc = (a: IProduct, b: IProduct) => {
    return a.rating.count > b.rating.count ? 1 : -1
}

const sortCountDesc = (a: IProduct, b: IProduct) => {
    return a.rating.count < b.rating.count ? 1 : -1
}

const productSorter = {
  sortPriceAsc,
  sortPriceDesc,
  sortTitleAsc,
  sortTitleDesc,
  sortRatingAsc,
  sortRatingDesc,
  sortCountAsc,
  sortCountDesc
}

export default productSorter;