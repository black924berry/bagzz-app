// **  Initial State
const initialState = {
  productsData: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return state.productsData;
    default:
      return state;
  }
};

export default productsReducer;
