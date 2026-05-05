import { useLocation} from "react-router-dom";
import React, { useState } from "react";
import "./PaymentPage.css";

const PaymentPage = () => {

  const location = useLocation();
  const price = location.state?.total||0;    

  const [upi, setUpi] = useState("")
 
  const handlePay = () => {
    if (!upi.includes("@")) {
      alert("Enter a valid UPI ID");
      return;
    }

    alert("Payment Successful");
  };

  return (
    <div className="payment-container">

      <div className="payment-wrapper">
        <div className="payment-card">
            <h1>UPI Payment</h1>

            <p>Total Amount: ₹{price}</p>



            <input type="text" placeholder="Enter UPI ID (example@upi)" className="upi-input" value={upi} onChange={(e) => setUpi(e.target.value)}/>

            <button className="pay-btn" onClick={handlePay}>Pay Now</button>
        </div>
      </div>

    </div>


  );
};

export default PaymentPage;

