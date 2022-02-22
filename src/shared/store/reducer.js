import { actionTypes } from "./actionTypes";

export const initialState = {
  user: null,
  cart: [],
  wishlist: [],
  userDetails: [],
};

export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => {
    return item.price + amount;
  }, 0);

export const reducer = (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.SET_LOCALE:
      return {
        ...state,
        locale: action.locale,
      };


    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.item],
      };


    case actionTypes.REMOVE_FROM_CART:
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );
      let newCart = [...state.cart];
      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as its not in cart!`
        );
      }
      return {
        ...state,
        cart: newCart,
      };

    case actionTypes.EMPTY_CART:
      return {
        ...state,
        cart: [],
      };

    case actionTypes.ADD_TO_WISHLIST:
      return {
        ...state,
        wishlist: [...state.wishlist, action.item],
      };

    case actionTypes.INCREMENT:
      let updatedCart = state.item.find((currElem) => {
        if (currElem.id === action.payload) {
          return {
            ...currElem, quantity: currElem.quantity + 1
          }
          return currElem;
        }
        return { ...state, item: updatedCart }
      })


    case actionTypes.REMOVE_FROM_WISHLIST:
      const wishlistIndex = state.wishlist.findIndex(
        (wishlistItem) => wishlistItem.id === action.id
      );
      let newWishlist = [...state.wishlist];
      if (wishlistIndex >= 0) {
        newWishlist.splice(wishlistIndex, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as its not in wishlist!`
        );
      }
      return {
        ...state,
        wishlist: newWishlist,
      };

    case actionTypes.EMPTY_WISHLIST:
      return {
        ...state,
        wishlist: [],
      };

    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    case actionTypes.SET_USER_DETAILS:
      return {
        ...state,
        user: action.userDetails,
      };
    default:
      return state;
  }
};

export default reducer;
