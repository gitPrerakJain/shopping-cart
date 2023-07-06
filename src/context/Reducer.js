export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    case "CHANGE_QTY":
      return {
        ...state,
        cart: state.cart.filter((prod) =>
          prod.id === action.payload.id
            ? (prod.qty = action.payload.qty)
            : prod.qty
        ),
      };
    default:
      return state;
  }
};

export const filterReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_PRICE":
      return {
        ...state,
        sort: action.payload,
      };
    case "FILTER_BY_STOCK":
      return { ...state, byStock: !state.byStock };
    case "FILTER_BY_NEW":
      return { ...state, byNew: !state.byNew };
    case "FILTER_BY_FASTDEL":
      return { ...state, byFastDel: !state.byFastDel };
    case "FILTER_BY_SEARCH":
      return { ...state, bySearch: action.payload };
    case "FILTER_BY_RATING":
      return { ...state, byRating: action.payload };
    case "CLEAR_FILTERS":
      return {
        ...state,
        byStock: false,
        byNew: false,
        byFastDel: false,
        // bySearch: "",
        byRating: 0,
        sort: "",
      };
    default:
      return state;
  }
};
