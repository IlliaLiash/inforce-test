import { Field, Form } from "react-final-form";
import { FormApi } from "final-form";
import { useDispatch } from "react-redux";
import { IAddForm } from "../types/add-form.types.ts";
import {
  validateFormValues,
  validateNumberValue,
} from "../utils/validation/validate-form-values.ts";
import { ICreateProduct, IUpdateProduct } from "../types/product.types.ts";
import { hideModal } from "../state/modalSlice.ts";

interface IAddProductFormModalProps {
  handleProductAdd: (product: ICreateProduct) => void;
  handleProductUpdate: (id: string, product: IUpdateProduct) => void;
  initialValues?: IAddForm;
  isUpdate?: boolean;
}

const AddProductFormModal = ({
  handleProductAdd,
  handleProductUpdate,
  initialValues,
  isUpdate,
}: IAddProductFormModalProps) => {
  const dispatch = useDispatch();

  const handleFormSubmit = (formValues: IAddForm, form: FormApi<any>) => {
    const productObj = {
      name: formValues.name,
      width: +formValues.width,
      height: +formValues.height,
      imageUrl: formValues.imageUrl,
      count: +formValues.count,
      weight: formValues.weight,
    };

    if (isUpdate) {
      handleProductUpdate(initialValues!.id, productObj);
    } else {
      handleProductAdd(productObj);
    }

    dispatch(hideModal());

    form.reset();
  };

  return (
    <div className="flex flex-col gap-2 w-4/5">
      <h2 className="text-3xl text-dark-grey-100">
        {isUpdate ? "Update Product" : "Create New Product"}
      </h2>
      <Form<IAddForm> onSubmit={handleFormSubmit} initialValues={initialValues}>
        {({ handleSubmit, dirty, hasValidationErrors }) => (
          <form
            className="flex flex-col border bg-light-grey-10 p-[36px] gap-4 rounded-md"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-row gap-2">
              <div className="flex flex-col gap-1 w-3/5">
                <label htmlFor="name">Name</label>
                <Field
                  name="name"
                  id="name"
                  component="input"
                  type="text"
                  className="py-1 px-2 rounded-md border border-light-grey-30"
                  maxLength={99}
                />
              </div>
              <div className="flex flex-col gap-1 w-1/5">
                <label htmlFor="rooms">Width</label>
                <Field
                  name="width"
                  id="width"
                  component="input"
                  type="text"
                  placeholder="99"
                  className="py-1 px-2 rounded-md border border-light-grey-30"
                  parse={validateNumberValue}
                />
              </div>
              <div className="flex flex-col gap-1 w-1/5">
                <label htmlFor="price">Height</label>
                <Field
                  name="height"
                  id="height"
                  component="input"
                  type="text"
                  placeholder="99"
                  className="py-1 px-2 rounded-md border border-light-grey-30"
                  parse={validateNumberValue}
                />
              </div>
            </div>

            <div className="flex flex-row gap-2">
              <div className="flex flex-col gap-1 w-3/5">
                <label htmlFor="name">Image Url</label>
                <Field
                  name="imageUrl"
                  id="imageUrl"
                  component="input"
                  type="text"
                  className="py-1 px-2 rounded-md border border-light-grey-30"
                  maxLength={99}
                />
              </div>
              <div className="flex flex-col gap-1 w-1/5">
                <label htmlFor="rooms">Count</label>
                <Field
                  name="count"
                  id="count"
                  component="input"
                  type="text"
                  placeholder="99"
                  className="py-1 px-2 rounded-md border border-light-grey-30"
                  parse={validateNumberValue}
                />
              </div>
              <div className="flex flex-col gap-1 w-1/5">
                <label htmlFor="price">Weight</label>
                <Field
                  name="weight"
                  id="weight"
                  component="input"
                  type="text"
                  placeholder="99g"
                  className="py-1 px-2 rounded-md border border-light-grey-30"
                />
              </div>
            </div>

            <button
              type="submit"
              className="py-[8px] px-[16px] bg-primary text-white rounded-md hover:bg-dark-primary transition-colors duration-200 ease-in-out disabled:bg-light-grey-30 disabled:text-light-grey-100 disabled:cursor-not-allowed"
              disabled={!dirty || hasValidationErrors}
            >
              {isUpdate ? "Update" : "Create"}
            </button>
            <button
              type="button"
              onClick={() => dispatch(hideModal())}
              className="py-[8px] px-[16px] bg-red-300 text-dark-grey-100 rounded-md hover:bg-red-600 transition-colors duration-200 ease-in-out"
            >
              Cancel
            </button>
          </form>
        )}
      </Form>
    </div>
  );
};

export default AddProductFormModal;
