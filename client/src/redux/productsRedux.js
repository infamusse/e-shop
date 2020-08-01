import axios from "axios";

/* selectors */
export const getAllProducts = ({ products }) => products.data;
export const getOneProducts = ({ products }) => products.choosenOne;
export const getLoadingState = ({ products }) => products.loading;

/* action name creator */
const reducerName = "products";
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName("FETCH_START");
const FETCH_SUCCESS = createActionName("FETCH_SUCCESS");
const FETCH_SUCCESS_ONE = createActionName("FETCH_SUCCESS_ONE");
const FETCH_ERROR = createActionName("FETCH_ERROR");
const SEARCH_PRODUCT = createActionName("SEARCH_PRODUCT");

/* action creators */
export const fetchStarted = (payload) => ({ payload, type: FETCH_START });
export const fetchSuccess = (payload) => ({ payload, type: FETCH_SUCCESS });
export const fetchSuccessOneProduct = (payload) => ({
  payload,
  type: FETCH_SUCCESS_ONE,
});
export const fetchError = (payload) => ({ payload, type: FETCH_ERROR });
export const searchProduct = (payload) => ({ payload, type: SEARCH_PRODUCT });

/* thunk creators */
export const fetchProductsFromAPI = () => {
  return (dispatch) => {
    dispatch(fetchStarted());
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/product`)
      .then((response) => {
        const products = response.data;
        dispatch(fetchSuccess(products));
      })
      .catch((error) => fetchError(error.message));
  };
};

export const fetchOneProductFromAPI = (id) => {
  return function (dispatch) {
    dispatch(fetchStarted());
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/product/${id}`)
      .then((response) => {
        const product = response.data;
        dispatch(fetchSuccessOneProduct(product));
      })
      .catch((error) => fetchError(error.message));
  };
};

const filterProduct = (products, searchWord) => {
  const newProducts = products.filter(({ title }) => {
    return title.toLowerCase().includes(searchWord.toLowerCase());
  });
  return newProducts;
};

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_SUCCESS_ONE: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        choosenOne: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case SEARCH_PRODUCT: {
      return {
        ...statePart,
        data: filterProduct(statePart.data, action.payload),
      };
    }
    default:
      return statePart;
  }
};
