import React, { useEffect } from 'react';
import './Wishlist.scss';
import { useStateValue } from "../../shared/store/StoreProvider";
import CartProduct from '../../components/CartProduct/CartProduct';

function Wishlist() {
  const [{ wishlist, user }, dispatch] = useStateValue();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="wishlist">
      <div className="wishlist__left">
        <div>
          {/* <h3>Hello, {user ? user.email : 'Guest'}</h3> */}
          <h2 className="wishlist__title">Your Shopping Wishlist</h2>
          {wishlist.map((item, i) => (
            <CartProduct
              key={i}
              id={item.id}
              name={item.name}
              price={item.price}
              category={item.category}
              rating={item.rating}
              imageUrl={item.imageUrl}
              hideButton={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
