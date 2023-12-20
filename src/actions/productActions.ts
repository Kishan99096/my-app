import axios from "axios";
import {
  ADD_PRODUCTS_SUCCESS,
  GET_PRODUCTS_SUCCESS,
} from "../reducers/productReducer";
import { ProductFormValuesType } from "../components/product/AddProduct";
import { error } from "console";

export const getProductsList = (dispatch: any) => {
  axios
    .get("https://dummyjson.com/products")
    .then((response) => {
      console.log(response);
      // when use with component state
      // setProducts(response?.data?.products);
      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: response?.data?.products,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const addProduct = (
  dispatch: any,
  productFormData: ProductFormValuesType
) => {
  console.log(productFormData);
  dispatch({ type: ADD_PRODUCTS_SUCCESS, payload: productFormData });
  axios
    .post(
      "https://dummyjson.com/products/add",
      JSON.stringify(productFormData),
      {
        headers: { "Content-Type": "application/json" },
      }
    )
    .then((response) => {
      dispatch({ type: ADD_PRODUCTS_SUCCESS, payload: response.data });
    })
    .catch((error) => console.error);
};
