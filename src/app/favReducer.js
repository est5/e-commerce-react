function favReducer(favorite, action) {
  switch (action.type) {
    case 'flip': {
      const inList = favorite.filter((e) => e.id == action.id);

      if (inList.length > 0) {
        return favorite.map((e) => {
          if (e.id == action.id) {
            e.fav = action.fav;
            return {
              id: action.id,
              fav: action.fav,
            };
          }
          return e;
        });
      } else {
        return [
          ...favorite,
          {
            id: action.id,
            fav: true,
          },
        ];
      }
    }
  }
}

export default favReducer;
