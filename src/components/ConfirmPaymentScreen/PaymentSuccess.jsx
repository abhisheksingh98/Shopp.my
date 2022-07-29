import React from "react";
import "./PaymentSuccess.scss";

export default function PaymentSuccess() {
  return (
    <div className="payment-success">
      <img
        src="https://fcs3pub.s3.amazonaws.com/photo-book/images/payment/success.gif"
        alt=""
      />
      <div>Payment Successful</div>
    </div>
  );
}
