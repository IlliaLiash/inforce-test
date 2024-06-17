import { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  List,
  Paper,
  Typography,
} from "@mui/material";
import { Edit } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { IProduct } from "../shared/types/product.types";
import { getByIdProduct, updateProduct } from "../api/product.api";
import { showModal } from "../shared/state/modalSlice";
import ModalManager from "../shared/components/ModalManager";

const ProductItem = () => {
  const [product, setProduct] = useState<IProduct | null>(null);

  const dispatch = useDispatch();

  const { id: productId } = useParams();

  const { refetch } = useQuery({
    queryKey: [`product-${productId}`],
    queryFn: async () => {
      try {
        const response = await getByIdProduct(productId as string);

        console.log(productId);
        setProduct(response.data);
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    keepPreviousData: true,
    enabled: true,
  });

  const handleProductUpdate = async (id: string, data: IProduct) => {
    try {
      await updateProduct(id, data);
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
          handleProductUpdate,
          isUpdate: true,
          initialValues: {
            id: product?._id,
            name: product?.name,
            count: product?.count,
            height: product?.height,
            weight: product?.weight,
            imageUrl: product?.imageUrl,
            width: product?.width,
          },
        },
      })
    );
  };

  return (
    <div style={{ padding: 16 }}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            {product?.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Count: {product?.count}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            WproductIdth: {product?.wproductIdth}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Height: {product?.height}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Weight: {product?.weight}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Image Url: {product?.imageUrl}
          </Typography>
        </CardContent>
        <CardActions>
          <Button startIcon={<Edit />} onClick={() => openAddProductModal()}>
            Edit
          </Button>
        </CardActions>
      </Card>

      {/* <Paper style={{ marginTop: 16, padding: 16 }}>
        <Typography variant="h6" component="div">
          Comments
        </Typography>
        <List>
          {product.comments.map((comment) => (
            <ListItem
              key={comment.productId}
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleDeleteComment(comment.productId)}
                >
                  <Delete />
                </IconButton>
              }
            >
              <ListItemText primary={comment.text} />
            </ListItem>
          ))}
        </List>
        <TextField
          label="Add a comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          fullWproductIdth
          variant="outlined"
          style={{ marginTop: 8 }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddComment}
          style={{ marginTop: 8 }}
        >
          Add Comment
        </Button>
      </Paper> */}

      {/* <Dialog open={editModalOpen} onClose={handleEditClose}>
        <DialogTitle>Edit Product</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Product Name"
            name="name"
            value={editedProduct.name}
            onChange={handleEditChange}
            fullWproductIdth
            variant="outlined"
          />
          <TextField
            margin="dense"
            label="Description"
            name="description"
            value={editedProduct.description}
            onChange={handleEditChange}
            fullWproductIdth
            variant="outlined"
            multiline
            rows={4}
          />
          <TextField
            margin="dense"
            label="Price"
            name="price"
            type="number"
            value={editedProduct.price}
            onChange={handleEditChange}
            fullWproductIdth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleEditSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog> */}

      <ModalManager />
    </div>
  );
};

export default ProductItem;
