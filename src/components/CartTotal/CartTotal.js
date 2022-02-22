import React, { useEffect } from 'react';
import './CartTotal.scss';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from "../../shared/store/StoreProvider";
import { getCartTotal } from '../../shared/store/reducer';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const StyledButton = withStyles({
  root: {
    backgroundColor: '#202124',
    color: '#fff',
    borderRadius: '2px',
    marginTop: '10px',
    marginBottom: '50px',
    padding: '10px 50px',
    '&:hover': {
      backgroundColor: '#202124',
    },
  },
  label: {
    fontSize: '0.8rem',
  },
})(Button);

function CartTotal() {
  const history = useHistory();
  const [{ cart }] = useStateValue();

  return (
    <div className="cartTotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart.length} items): <strong>{value}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'₹'}
      />
      <div>

        {cart.length > 0 ? (
          <StyledButton onClick={(e) => history.push('/checkout')}>
            Proceed to Checkout
          </StyledButton>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default CartTotal;
