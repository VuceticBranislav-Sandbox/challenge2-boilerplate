export interface IProduct {
   id: number;
   title: string;
   price: number;
   description: string;
   category: string;
   image: string;
   rating: {
      rate: number;
      count: number;
   }
}

export interface IProductDetails {
   id: number;
   title: string;
   price: number;
   description: string;
   category: string;
   image: string;
   rating: {
      rate: number;
      count: number;
   }
}

export interface IProductList {
   products: Array<IProduct>
}

export interface ICartItem {
   id: number;
   title: string;
   price: number;
   image: string;
   quantity:number;
}