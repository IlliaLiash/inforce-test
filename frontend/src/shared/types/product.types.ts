type IProductQueryParams = {
  sortBy?: "count" | "name";
};

type IProduct = {
  _id: string;
  name: string;
  count: number;
  imageUrl: string;
  width: number;
  height: number;
  weight: string;
};

type ICreateProduct = {
  name: string;
  count: number;
  imageUrl: string;
  width: number;
  height: number;
  weight: string;
};

type IUpdateProduct = {
  name?: string;
  count?: number;
  imageUrl?: string;
  width?: number;
  height?: number;
  weight?: string;
};

export type { IProduct, ICreateProduct, IUpdateProduct, IProductQueryParams };
