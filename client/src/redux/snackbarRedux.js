/* selectors */
export const getSnackbarStatus = ({ snackbar }) => snackbar;

/* action name creator */
const reducerName = "snackbar";
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const SHOW_SNACKBAR_SUCCESS = createActionName("SHOW_SNACKBAR_SUCCESS");
const SHOW_SNACKBAR_ERROR = createActionName("SHOW_SNACKBAR_ERROR");
const HIDE_SNACKBAR = createActionName("HIDE_SNACKBAR");

/* action creators */
export const snackbarSuccess = (payload) => ({
  payload,
  type: SHOW_SNACKBAR_SUCCESS,
});
export const snackbarError = (payload) => ({
  payload,
  type: SHOW_SNACKBAR_ERROR,
});
export const hideSnackbar = () => ({ type: HIDE_SNACKBAR });

/* reducer */
export const reducer = (statePart = [], action = {}) => {
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
    case HIDE_SNACKBAR: {
      return {
        text: "",
        variant: "success",
        show: false,
      };
    }
    default:
      return statePart;
  }
};
