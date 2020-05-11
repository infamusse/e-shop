/* selectors */
export const getSnackbarStatus = ({ snackbar }) => snackbar;

/* action name creator */
const reducerName = "snackbar";
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const SHOW_SNACKBAR_SUCCESS = createActionName("SHOW_SNACKBAR_SUCCESS");
const SHOW_SNACKBAR_ERROR = createActionName("SHOW_SNACKBAR_ERROR");

/* action creators */
export const snackbarSuccess = (payload) => ({
  payload,
  type: SHOW_SNACKBAR_SUCCESS,
});
export const snackbarError = (payload) => ({
  payload,
  type: SHOW_SNACKBAR_ERROR,
});

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  console.log("snackbarReducer", action.payload);
  switch (action.type) {
    case SHOW_SNACKBAR_SUCCESS: {
      return {
        text: action.payload,
        variant: "success",
        show: true,
      };
    }
    case SHOW_SNACKBAR_ERROR: {
      return {
        text: action.payload,
        variant: "error",
        show: true,
      };
    }
    default:
      return statePart;
  }
};
