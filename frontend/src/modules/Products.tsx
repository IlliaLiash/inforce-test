import { useState } from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import {
  ICreateProduct,
  IProduct,
  IProductQueryParams,
} from "../shared/types/product.types.ts";
import {
  createProduct,
  deleteProduct,
  getListProduct,
} from "../api/product.api.ts";
import ProductsList from "./ProductsGrid.tsx";
import { showModal } from "../shared/state/modalSlice.ts";
import ModalManager from "../shared/components/ModalManager.tsx";

const Products = () => {
  const [data, setData] = useState<IProduct[]>(() => []);
  const [sortBy, setSortBy] = useState<"name" | "count">("name");

  const dispatch = useDispatch();

  const { refetch } = useQuery({
    queryKey: ["list", sortBy],
    queryFn: async () => {
      try {
        const queryParams: IProductQueryParams = {
          sortBy,
        };

        const response = await getListProduct(queryParams);

        const formattedData = response.data.map((product: IProduct) => ({
          id: product._id,
          name: product.name,
          count: product.count,
          imageUrl: product.imageUrl,
          width: product.width,
          height: product.height,
          weight: product.weight,
        }));

        setData(formattedData);
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    keepPreviousData: true,
    enabled: true,
  });

  const handleProductCreate = async (newProduct: ICreateProduct) => {
    try {
      await createProduct(newProduct);
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  const openAddProductModal = () => {
    dispatch(
      showModal({
        modalType: "ADD_PRODUCT",
        modalProps: {
          handleProductAdd: handleProductCreate,
          isUpdate: false,
        },
      })
    );
  };

  const handleProductDelete = async (id: string) => {
    try {
      await deleteProduct(id);
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value as "name" | "count");
    refetch();
  };

  return (
    <div className="flex flex-col gap-8 items-center py-[24px]">
      <button
        onClick={() => openAddProductModal()}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Add Product
      </button>

      <FormControl variant="outlined" className="min-w-[120px]">
        <InputLabel id="sort-by-label">Sort By</InputLabel>
        <Select
          labelId="sort-by-label"
          value={sortBy}
          onChange={handleSortChange}
          label="Sort By"
        >
          <MenuItem value="name">Name</MenuItem>
          <MenuItem value="count">Count</MenuItem>
        </Select>
      </FormControl>

      <ProductsList data={data} handleDelete={handleProductDelete} />

      <ModalManager />
    </div>
  );
};

export default Products;
