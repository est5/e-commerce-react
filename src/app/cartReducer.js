function cartReducer(cart, action) {
  switch (action.type) {
    case 'changed': {
      const inCart = cart.find((ele) => ele.id == action.id);

      return inCart
        ? cart.map((prod) => {
            if (prod.id === action.id) {
              if (action.total == 0) {
                return;
              }
              prod.total = action.total;
            }
            return prod;
          })
        : [...cart, { id: action.id, total: action.total }];
    }

    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export default cartReducer;
