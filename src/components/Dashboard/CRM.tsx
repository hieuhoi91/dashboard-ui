import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

import { CmsApi } from "../../api/cms-api";
import { useAppDispatch } from "../../app/hooks";
import { Category } from "../../shared/types/categoryType";
import { ReqItem } from "../../shared/types/itemType";
import Alert from "../Common/Alert";
import Button from "../Common/Button";
import Editor from "../Common/Editor/Editor";
import Input from "../Common/Input";

interface A {
  isSuccess: boolean | null;
  message: string;
}
const CRM = () => {
  const [category, setCategory] = useState<Category[]>([]);
  const [message, setMessage] = useState<A>({
    isSuccess: null,
    message: "",
  });
  const dispatch = useAppDispatch();
  const [description, setDescription] = useState<any>();
  const initialValues: ReqItem = {
    name: "",
    description: "",
    price: 0,
    cost: 0,
    // images: [],
    categoryId: "",
    quantity: 0,
    sku: "",
  };

  const getItem = async () => {
    try {
      const res = await CmsApi.getCategory();

      setCategory(res.data.data);
    } catch (error: any) {
      console.log(error);
    }
  };

  getItem();

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: async (values) => {
      console.log(values);

      const reqCreateItem = {
        name: values.name,
        description: description,
        price: values.price,
        cost: values.cost,
        // images: values.image,
        categoryId: values.categoryId,
        quantity: values.quantity,
        sku: values.sku,
      };

      try {
        const res = await CmsApi.createItem(reqCreateItem);
        setMessage({
          isSuccess: true,
          message: "Success",
        });
      } catch (error: any) {
        setMessage({ message: error.data.message, isSuccess: false });
      }

      setTimeout(() => {
        setMessage({
          isSuccess: null,
          message: "",
        });
      }, 3000);
    },

    validationSchema: Yup.object().shape({
      name: Yup.string().required("You must enter your name."),
      price: Yup.string().required("You must enter your price."),
      cost: Yup.string().required("You must enter your cost."),
      categoryId: Yup.string().required("You must enter your categoryId."),
      quantity: Yup.string().required("You must enter your quantity."),
      sku: Yup.string().required("You must enter your sku."),
    }),
  });

  return (
    <div className="grid grid-flow-row-dense grid-cols-4 mx-10 mt-5 mb-10 gap-4 h-full">
      <div className="col-span-3 bg-white h-full rounded-xl shadow-lg px-10 py-8 font-semibold text-light-text-primary">
        <h2 className="text-xl mb-4">Create Product</h2>
        <form onSubmit={formik.handleSubmit} className="w-full">
          <label htmlFor="" className="text-sm">
            Product Name
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Enter Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-light-error text-sm">{formik.errors.name}</div>
          ) : null}

          <div className="flex justify-between items-center gap-4">
            <div className="w-full">
              <label htmlFor="" className="text-sm">
                SKU
              </label>
              <Input
                id="sku"
                name="sku"
                type="text"
                placeholder="Enter SKU"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.sku}
              />
              {formik.touched.sku && formik.errors.sku ? (
                <div className="text-light-error text-sm">{formik.errors.sku}</div>
              ) : null}
            </div>

            <div className="w-full">
              <label htmlFor="" className="text-sm">
                Quantity
              </label>
              <Input
                id="quantity"
                name="quantity"
                type="number"
                placeholder="Enter Quantity"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.quantity}
              />
              {formik.touched.quantity && formik.errors.quantity ? (
                <div className="text-light-error text-sm">{formik.errors.quantity}</div>
              ) : null}
            </div>
          </div>

          <div className="flex justify-between items-center gap-4">
            <div className="w-full">
              <label htmlFor="" className="text-sm">
                Cost
              </label>
              <Input
                id="cost"
                name="cost"
                type="number"
                placeholder="Enter Cost"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.cost}
              />
              {formik.touched.cost && formik.errors.cost ? (
                <div className="text-light-error text-sm">{formik.errors.cost}</div>
              ) : null}
            </div>

            <div className="w-full">
              <label htmlFor="" className="text-sm">
                Price
              </label>
              <Input
                id="price"
                name="price"
                type="number"
                placeholder="Enter Price"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.price}
              />
              {formik.touched.price && formik.errors.price ? (
                <div className="text-light-error text-sm">{formik.errors.price}</div>
              ) : null}
            </div>
          </div>

          <label htmlFor="" className="text-sm">
            Category
          </label>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={category.map((item) => item.name)}
            sx={{ width: "100%" }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                style={{ borderRadius: "30px" }}
                placeholder="Category"
              />
            )}
          />
          {formik.touched.categoryId && formik.errors.categoryId ? (
            <div className="text-light-error text-sm">{formik.errors.categoryId}</div>
          ) : null}

          <Editor setText={setDescription} />

          <div className="flex justify-end">
            <Button
              type="submit"
              large
              className="mb-4 w-[12%] bg-light-primary-light rounded-lg text-white hover:shadow-lg hover:bg-light-primary-main text-sm"
              title="SUBMIT"
            />
          </div>
        </form>
      </div>

      <div className="bg-white rounded-xl shadow-lg">03</div>
      {message.isSuccess === true && <Alert title={message.message} success />}
      {message.isSuccess === false && <Alert title={message.message} error />}
    </div>
  );
};

export default CRM;
