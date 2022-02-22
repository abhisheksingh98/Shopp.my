import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Cart from '../../shared/assets/img/icons/cart.svg';
import { useStateValue } from '../../shared/store/StoreProvider';
import './CartIcon.scss';

function CartIcon({ product }) {
  const [{ cart }, dispatch] = useStateValue();
  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      item: product,
    });
  };
  return (
    <div className="cartIcon">
      <IconButton className="cartIcon__button" onClick={addToCart}>
        <img src={Cart} alt="" />
      </IconButton>
    </div>
  );
}

export default CartIcon;
