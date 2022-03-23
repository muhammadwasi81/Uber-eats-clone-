const initialState = {
  selectedItem: { items: [], restaurantName: '' },
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const newState = { ...state };

      if (action.payload.checkBoxValue) {
        console.log('Add to cart');

        newState.selectedItem = {
          items: [...newState.selectedItem.items, action.payload],
          resturantName: action.payload.restaurantName,
        };
      } else {
        console.log('remove cart items');
        newState.selectedItem = {
          items: [
            ...newState.selectedItem.items.filter(
              (item) => item.title !== action.payload.title
            ),
          ],
          restaurantName: action.payload.restaurantName,
        };
      }
      console.log(newState, '👉');
    }
    default:
      return state;
  }
};

export default cartReducer;
