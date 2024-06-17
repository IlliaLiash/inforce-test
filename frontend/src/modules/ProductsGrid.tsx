import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { useDispatch } from "react-redux";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../shared/types/product.types";
import DeleteIcon from "../../public/delete.svg?react";
import { showModal } from "../shared/state/modalSlice";
import ModalManager from "../shared/components/ModalManager";

interface ProductsListProps {
  data: IProduct[];
  handleDelete: (id: string) => void;
}

const ProductsGrid = ({ data, handleDelete }: ProductsListProps) => {
  const dispatch = useDispatch();

  const openConfirmDeleteModal = (productId: string, productName: string) => {
    dispatch(
      showModal({
        modalType: "CONFIRM_DELETE",
        modalProps: {
          itemName: productName,
          onDelete: () => handleDelete(productId),
        },
      })
    );
  };

  const gridCols = useMemo(
    () => [
      {
        field: "name",
        headerName: "Name",
        flex: 1.2,
        renderCell: (params) => (
          <Link to={`/${params.row.id}`} className="text-blue-500">
            {params.value}
          </Link>
        ),
      },
      { field: "count", headerName: "Count", flex: 1 },
      { field: "imageUrl", headerName: "ImageUrl", flex: 1.5 },
      { field: "width", headerName: "Width", flex: 1 },
      { field: "height", headerName: "Height", flex: 1 },
      { field: "weight", headerName: "Weight", flex: 1 },
      {
        field: "actions",
        flex: 0.5,
        type: "actions",
        width: 100,
        getActions: (params) => [
          <GridActionsCellItem
            icon={<DeleteIcon className="w-8" />}
            label="Delete"
            onClick={() =>
              openConfirmDeleteModal(params.id as string, params.row.name)
            }
          />,
        ],
      },
    ],
    []
  );

  return (
    <div className="flex items-center m-4 flex-col w-full">
      {!data.length ? (
        <div className="text-center">No data found</div>
      ) : (
        <div className="mt-10 w-4/5">
          <DataGrid
            rows={data}
            columns={gridCols}
            disableColumnMenu
            disableColumnSorting
            disableColumnSelector
            disableMultipleRowSelection
            disableRowSelectionOnClick
            disableColumnResize
          />
        </div>
      )}
      <ModalManager />
    </div>
  );
};

export default ProductsGrid;
