import {
  ICreateProduct,
  IProductQueryParams,
  IUpdateProduct,
} from "../shared/types/product.types.ts";
import api from "./api.ts";

const getListProduct = (params: IProductQueryParams) =>
  api.get("product", {
    params,
  });

const getByIdProduct = (id: string) => api.get(`product/${id}`);

const createProduct = (data: ICreateProduct) => api.post("product", data);

const updateProduct = (id: string, data: IUpdateProduct) =>
  api.patch(`product/${id}`, data);

const deleteProduct = (id: string) => api.delete(`product/${id}`);

export {
  getListProduct,
  getByIdProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
