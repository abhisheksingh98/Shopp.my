import React from "react";
import "./PaymentSuccess.scss";

export default function PaymentFailed() {
  return (
    <div className="payment-failed">
      <img
        src="https://cdnl.iconscout.com/lottie/premium/preview-watermark/payment-failed-3571089-3024882.mp4"
        alt=""
      />
      <div>Payment Failed</div>
    </div>
  );
}
