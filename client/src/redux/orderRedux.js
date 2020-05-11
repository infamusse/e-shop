import axios from "axios";

/* selectors */
export const getOrderProducts = ({ order }) => order.products;
export const getSumPrice = ({ order }) => order.sumPrice;

/* action name creator */
const reducerName = "order";
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const ADD_PRODUCT = createActionName("ADD_PRODUCT");
const REMOVE_PRODUCT = createActionName("REMOVE_PRODUCT");
const CLEAR_ORDER = createActionName("CLEAR_ORDER");

/* action creators */
export const addProduct = (payload) => ({ payload, type: ADD_PRODUCT });
export const removeProduct = (payload) => ({ payload, type: REMOVE_PRODUCT });
export const clearOrder = (payload) => ({ payload, type: CLEAR_ORDER });

/* thunk creators */
export const sendOrder = (order) => {
  console.log("dispatch", order);
  return (dispatch) =>
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/order`, { ...order })
      .then((response) => {
        dispatch(clearOrder());
      })
      .catch((error) => console.log(error.message));
};

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  console.log("REDUCER", action.type, action.payload);
  switch (action.type) {
    case ADD_PRODUCT: {
      const addingPrice =
        Math.round(
          (action.payload.price * action.payload.count + Number.EPSILON) * 100
        ) / 100;
      const product = statePart.products.find(
        ({ id }) => id === action.payload.id
      );
      if (!product)
        return {
          ...statePart,
          products: [...statePart.products, action.payload],
          sumPrice: (statePart.sumPrice += addingPrice),
        };
      else {
        let addingProduct = product;
        addingProduct.count += action.payload.count;
        return {
          ...statePart,
          products: [
            ...statePart.products.filter(({ id }) => id !== action.payload.id),
            addingProduct,
          ],
          sumPrice: (statePart.sumPrice += addingPrice),
        };
      }
    }
    case REMOVE_PRODUCT: {
      const product = statePart.products.find(
        ({ id }) => id === action.payload
      );
      console.log("product", product);
      return {
        ...statePart,
        products: statePart.products.filter(({ id }) => id !== action.payload),
        sumPrice: (statePart.sumPrice -= product.price * product.count),
      };
    }
    case CLEAR_ORDER: {
      return {
        ...statePart,
        products: [],
        sumPrice: 0,
      };
    }
    default:
      return statePart;
  }
};
