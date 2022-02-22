import React, { useState } from "react";
import "./Quantity.scss";
import { useStateValue } from '../../shared/store/StoreProvider';

const Quantity = () => {
  const [{ user, cart = [], wishlist }, dispatch] = useStateValue();
  // const [count, setCount] = useState(cart.length)
  const [count, setCount] = useState(1)

  const incrementCount = () => {
    setCount(count + 1)
  }
  const decrementCount = () => {
    if (count == 1) {
      return;
    }
    setCount(count - 1)
  }
  return (
    <div className="Quantity">
      <button type="button" className="removeQty" onClick={decrementCount}
      >
        -
      </button>
      <span data-test-id="quantitySpan" className="inputQty">{count}</span>
      <button type="button" className="addQty" onClick={incrementCount} data-test-id="quantityIncrease"
      >
        +
      </button>
    </div>
  );
};

export default Quantity;
