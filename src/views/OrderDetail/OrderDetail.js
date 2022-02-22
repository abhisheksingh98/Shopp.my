import React from 'react';
import DATA from '../../shared/utils/Data';
import './OrderDetail.scss';

import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { useStateValue } from '../../shared/store/StoreProvider';

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

const OrderDetail = () => {
  const [{ userDetails }, dispatch] = useStateValue();
  const history = useHistory();
  const data = DATA.FEATURED_PRODUCTS;
  const handleShopping = (e) => {
    dispatch({
      type: 'EMPTY_CART',
    });
    history.push('/');
  };
  return (
    <div className="OrderDetail">
      <div className="orderDetailHeader">
        <h3>Your Order Details</h3>
        <p>Order No : 102665</p>
        <span>
          A copy of your order summary has been emailed to you at
          john.doe@example.com
        </span>
      </div>
      <div className="orderDetailContent">
        <div className="orderDetailLeft">
          <h3>Order details</h3>
          <div className="orderDetailCard">
            <div className="cardLeft">
              <div className="imageContainer">
                <img src={data[0].imageUrl} alt="" />
              </div>
              <div className="detailContent">
                <div className="nameDate">
                  <p className="orderName">{data[0].name}</p>
                  <p>15-03-2021</p>
                </div>
                <p>QTY: 1</p>
              </div>
            </div>
            <div className="cardRight">
              <p>₹ {data[0].price}</p>
            </div>
          </div>
          <br />
          <hr />
          <div className="orderTotal">
            <div className="totalGroup">
              <p>Subtotal:</p>
              <p>₹ {data[0].price}</p>
            </div>
            <div className="totalGroup">
              <p>Tax:</p>
              <p>₹ {data[0].price * 0.18}</p>
            </div>
            <div className="totalGroup">
              <p>Subtotal:</p>
              <p>₹ {data[0].price + data[0].price * 0.18}</p>
            </div>
          </div>
        </div>
        <div className="orderDetailRight">
          <h3>Order Review</h3>
          <div className="orderRightContent">
            <h4>Personal Details</h4>
            <div className="nameEmail">
              <h5>Name</h5>
              <p>{userDetails.name}</p>
              <h5>Email</h5>
              <p>user.name@gmail.com</p>
              <h5>Phone</h5>
              <p>9999991122</p>
            </div>
            <h4>Shipping</h4>
            <p className="shippingAddress">Delhi</p>
            <h4>Payment Method</h4>
            <p>Cash on Delivery</p>

            <StyledButton onClick={(e) => handleShopping(e)}>
              Continue Shopping
            </StyledButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
