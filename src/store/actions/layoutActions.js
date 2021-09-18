export const onSnackbar = (message) => {
    return {
      type: "onSnackbarOpen",
      payload: { message, open: true },
    };
  };
  
  export const handleSnackbarClose = () => {
    return {
      type: "onHandleSnackbarClose",
      payload: false,
    };
  };

  export const onInitialDone = () => {
    return {
      type: "onInitialDone"
    }
  }
  