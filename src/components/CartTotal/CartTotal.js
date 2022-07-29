import React, { useEffect } from "react";
import "./CartTotal.scss";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../shared/store/StoreProvider";
import { getCartTotal } from "../../shared/store/reducer";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { loadStripe } from "@stripe/stripe-js";
import "@stripe/stripe-js";

const StyledButton = withStyles({
  root: {
    backgroundColor: "#202124",
    color: "#fff",
    borderRadius: "2px",
    marginTop: "10px",
    marginBottom: "50px",
    padding: "10px 50px",
    "&:hover": {
      backgroundColor: "#202124",
    },
  },
  label: {
    fontSize: "0.8rem",
  },
})(Button);

function CartTotal() {
  const history = useHistory();
  const [{ cart }] = useStateValue();
  let stripePromise;

  const getStripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
    }

    return stripePromise;
  };

  const item = {
    price: "price_1LQoz9SGKths5LRNelOytbcP",
    quantity: 1,
  };

  const checkoutOptions = {
    lineItems: [item],
    mode: "payment",
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/cancel`,
  };

  const redirectToCheckout = async () => {
    // setLoading(true);
    console.log("redirectToCheckout");

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log("Stripe checkout error", error);

    // if (error) setStripeError(error.message);
    // setLoading(false);
  };

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
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <div>
        {cart.length > 0 ? (
          <StyledButton onClick={(e) => redirectToCheckout()}>
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
