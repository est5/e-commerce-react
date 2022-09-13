function cartReducer(cart, action) {
  switch (action.type) {
    case 'changed': {
      if (action.amount == 0) {
        const out = cart.filter((ele) => ele.id !== action.id);
        return out;
      }
      const inCart = cart.find((ele) => ele.id == action.id);

      return inCart
        ? cart.map((prod) => {
            if (prod.id === action.id) {
              prod.total = action.total;
              prod.amount = action.amount;
            }
            return prod;
          })
        : [
            ...cart,
            {
              id: action.id,
              total: Number.parseFloat(action.total),
              amount: 1,
            },
          ];
    }

    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export default cartReducer;
