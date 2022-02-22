import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import IconButton from '@material-ui/core/IconButton';
import { useStateValue } from '../../shared/store/StoreProvider';
import './WishlistIcon.scss';

function WishlistIcon({ product }) {
  const [{ wishlist }, dispatch] = useStateValue();

  const inWishlist = wishlist.find((item) => item.id === product.id);

  const addToWishlist = () => {
    if (!inWishlist) {
      dispatch({
        type: 'ADD_TO_WISHLIST',
        item: product,
      });
    }
  };
  return (
    <div className="wishlistIcon">
      <IconButton className="cartIcon__button" onClick={addToWishlist}>
        <FavoriteBorderIcon />
      </IconButton>
    </div>
  );
}

export default WishlistIcon;
