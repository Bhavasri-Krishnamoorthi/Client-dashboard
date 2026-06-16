import React, { useState } from "react";
import { paymentData } from "../data/paymentData";
import "./PaymentPage.css";

function Payments() {
  const [selectedMilestone, setSelectedMilestone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const selectedPayment = paymentData.milestones.find(
    (item) => item.id === Number(selectedMilestone)
  );

  const progress = Math.round(
    (paymentData.paidAmount / paymentData.totalAmount) * 100
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
      `Payment: ${selectedPayment.title}
Amount: ₹${selectedPayment.amount.toLocaleString()}
Method: ${paymentMethod}

Razorpay Integration Pending`
    );
  };

  return (
    <div className="payment-page">
      {/* Header */}

      <div className="page-header">
        <div>
          <h2>Payments</h2>
          <p>Project ID: {paymentData.projectId}</p>
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

      {/* Progress */}

      <div className="progress-section">
        <div className="progress-header">
          <span>Payment Progress</span>
          <span>{progress}%</span>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Main Content */}

      <div className="card">
        <h3>Payment Timeline</h3>

        <div className="timeline">
          {paymentData.milestones.map((item) => (
            <div
              className="timeline-item"
              key={item.id}
            >
              <div
                className={`timeline-dot ${
                  item.status === "Paid"
                    ? "dot-paid"
                    : "dot-pending"
                }`}
              ></div>

              <div className="timeline-content">
                <h4>{item.title}</h4>

                <p>
                  ₹{item.amount.toLocaleString()}
                </p>

                <small>
                  Due Date: {item.dueDate}
                </small>
              </div>

              <span
                className={
                  item.status === "Paid"
                    ? "status paid"
                    : "status pending"
                }
              >
                {item.status}
              </span>
            </div>
          ))}
        </div>

        {/* Payment Panel */}

        <div className="payment-panel">
          <h4>💳 Make Payment</h4>

          <select
            value={selectedMilestone}
            onChange={(e) =>
              setSelectedMilestone(
                e.target.value
              )
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
              setPaymentMethod(
                e.target.value
              )
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

        {/* Payment History */}

        <div className="history-card">
          <h4>Payment History</h4>

          {paymentData.milestones
            .filter(
              (item) =>
                item.status === "Paid"
            )
            .map((item) => (
              <div
                className="history-item"
                key={item.id}
              >
                <span>{item.title}</span>

                <span>
                  ₹{item.amount.toLocaleString()}
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Payments;