import React, { useState } from "react";
import { paymentData } from "../data/paymentData";
import "./PaymentPage.css";

function Payments() {
  const [selectedMilestone, setSelectedMilestone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const selectedPayment = paymentData.milestones.find(
    (item) => item.id === Number(selectedMilestone)
  );

  const handlePayNow = () => {
    if (!selectedMilestone) {
      alert("Select a payment");
      return;
    }

    if (!paymentMethod) {
      alert("Select payment method");
      return;
    }

    alert(
      `Payment : ${selectedPayment.title}
Amount : ₹${selectedPayment.amount.toLocaleString()}
Method : ${paymentMethod}

Razorpay Integration Pending`
    );
  };

  return (
    <div className="payment-page">
      <div className="page-header">
        <div>
          <h2>Payments</h2>
          <p>Project ID : {paymentData.projectId}</p>
        </div>
      </div>

      {/* Summary Cards */}

      <div className="summary-grid">
        <div className="summary-card">
          <span>Total Amount</span>

          <h2>
            ₹{paymentData.totalAmount.toLocaleString()}
          </h2>
        </div>

        <div className="summary-card">
          <span>Paid Amount</span>

          <h2 className="paid-text">
            ₹{paymentData.paidAmount.toLocaleString()}
          </h2>
        </div>

        <div className="summary-card">
          <span>Pending Amount</span>

          <h2 className="pending-text">
            ₹{paymentData.pendingAmount.toLocaleString()}
          </h2>
        </div>
      </div>

      {/* Milestones */}

      <div className="card">
        <h3>Payment Milestones</h3>

        <table>
          <thead>
            <tr>
              <th>Milestone</th>
              <th>Amount</th>
              <th>Due Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {paymentData.milestones.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>

                <td>
                  ₹{item.amount.toLocaleString()}
                </td>

                <td>{item.dueDate}</td>

                <td>
                  <span
                    className={
                      item.status === "Paid"
                        ? "status paid"
                        : "status pending"
                    }
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Payment Panel */}

        <div className="payment-panel">
          <h4>Make Payment</h4>

          <select
            value={selectedMilestone}
            onChange={(e) =>
              setSelectedMilestone(e.target.value)
            }
          >
            <option value="">
              Select Payment
            </option>

            {paymentData.milestones
              .filter(
                (item) =>
                  item.status === "Pending"
              )
              .map((item) => (
                <option
                  key={item.id}
                  value={item.id}
                >
                  {item.title}
                </option>
              ))}
          </select>

          <select
            value={paymentMethod}
            onChange={(e) =>
              setPaymentMethod(e.target.value)
            }
          >
            <option value="">
              Payment Method
            </option>

            <option value="UPI">
              UPI
            </option>

            <option value="Credit Card">
              Credit Card
            </option>

            <option value="Debit Card">
              Debit Card
            </option>

            <option value="Net Banking">
              Net Banking
            </option>
          </select>

          <input
            type="text"
            value={
              selectedPayment
                ? `₹${selectedPayment.amount.toLocaleString()}`
                : ""
            }
            placeholder="Amount"
            readOnly
          />

          <button
            className="pay-btn"
            onClick={handlePayNow}
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Payments;