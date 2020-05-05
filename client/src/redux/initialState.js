export const initialState = {
  products: {
    data: [],
    choosenOne: {},
    loading: {
      active: false,
      error: false,
    },
  },
  order: {
    products: [],
    sumPrice: 0,
  },
};
