function cartReducer(cart, action) {
  switch (action.type) {
    case 'added': {
      return [...cart, { id: action.id, amount: action.amount }];
    }

    case 'changed': {
      const out = cart.map((prod) => {
        if (prod.id === action.id) {
          if (action.amount == 0) {
            return;
          }
          prod.amount = action.amount;
        }
        return prod;
      });
      return out;
    }

    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export default cartReducer;
