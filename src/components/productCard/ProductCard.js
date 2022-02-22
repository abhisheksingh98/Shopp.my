import React from 'react';
import './ProductCard.scss';
import { useHistory } from 'react-router-dom';
import ProductRating from '../ProductRating/ProductRating';
import Tooltip from '@material-ui/core/Tooltip';
import { useStateValue } from '../../shared/store/StoreProvider';
import WishlistIcon from '../WishlistIcon/WishlistIcon';
import CartIcon from '../CartIcon/CartIcon';
import { useLocation } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const location = useLocation();

  const [{ user }] = useStateValue();
  const history = useHistory();

  const renderProduct = (e) => {
    history.push(
      `/products/${product?.category}/${product.name}/${product?.id}`
    );
  };

  function toTitleCase(str) {
    return str?.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  let getProductName = (str, length) => {
    let productTitle = str?.substring(0, length);
    let productName = toTitleCase(productTitle) + '...';
    return productName;
  };

  let productName = getProductName(product?.name, 20);

  return (
    <div className="ProductCard">
      <div className="ImgContainer">
        <img src={product?.imageUrl} alt="" onClick={(e) => renderProduct(e)} />
      </div>
      <div className="ProductDetailContainer">
        <div className="ProductContent">
          <Tooltip title={toTitleCase(product?.name)}>
            <p onClick={(e) => renderProduct(e)}>{productName}</p>
          </Tooltip>
          {user ? <WishlistIcon product={product} /> : <></>}
        </div>
        <div className="productBuyContainer">
          <div className="priceRating">
            <p>₹ {product?.price}</p>
            <div className="Rating">
              <ProductRating rating={product?.rating} />
            </div>
          </div>
          <CartIcon product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
