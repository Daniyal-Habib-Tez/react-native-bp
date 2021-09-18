const initState = {
    snackbarState: false,
    snackbarMessage: "",
    initial: false
  };
  
  const LayoutReducer = (state = initState, action) => {
    switch (action.type) {
      case "onSnackbarOpen":
        return {
          ...state,
          snackbarMessage: action.payload.message,
          snackbarState: action.payload.open,
        };
      case "onHandleSnackbarClose":
        return {
          ...state,
          snackbarState: action.payload,
        };
      case "onInitialDone":
        return {
          ...state,
          initial: true
        }
      default:
        return state;
    }
  };
  
  export default LayoutReducer;
  