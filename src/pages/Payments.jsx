import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./PaymentPage.css";
import MainLayout from "../layouts/MainLayout";

import {
  getPaymentData,
  recentTransactions,
} from "../services/paymentService";

const paymentData = getPaymentData();
const transactions = recentTransactions;

function Payments() {
  const { id } = useParams();
  const navigate = useNavigate();

  const isTransactionView = !!id;

  const [selectedMilestone, setSelectedMilestone] =
    useState("");

  const [paymentMethod, setPaymentMethod] =
    useState("");

  const selectedTransaction =
    transactions.find(
      (item) => item.id === id
    );

  const selectedPayment =
    paymentData.milestones.find(
      (item) =>
        item.id === Number(selectedMilestone)
    );

  const progress =
    selectedTransaction?.progress || 0;

  const handlePayNow = () => {
    if (!selectedMilestone) {
      alert("Select Payment");
      return;
    }

    if (!paymentMethod) {
      alert("Select Payment Method");
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
    <MainLayout>
      <div className="payment-page">
        <div className="page-header">
          <button
            className="back-btn"
            onClick={() => navigate(-1)}
          >
            <FaArrowLeft />
          </button>

          <div>
            <h2>
              {isTransactionView
                ? "Transaction Details"
                : "Project Payments"}
            </h2>

            <p>
              Project ID : {paymentData.projectId}
            </p>
          </div>
        </div>

        {/* TRANSACTION VIEW */}

        {isTransactionView &&
          selectedTransaction && (
            <>
              <div
                className={`payment-banner ${selectedTransaction.status.toLowerCase()}`}
              >
                {selectedTransaction.status ===
                  "Completed" &&
                  "✅ Payment Successfully Completed"}

                {selectedTransaction.status ===
                  "Pending" &&
                  "⏳ Payment Pending"}

                {selectedTransaction.status ===
                  "Cancelled" &&
                  "❌ Payment Cancelled"}
              </div>

              <div className="transaction-card">
                <h3>
                  Transaction Details
                </h3>

                <div className="transaction-grid">
                  <div>
                    <span>
                      Transaction ID
                    </span>

                    <h4>
                      {
                        selectedTransaction.id
                      }
                    </h4>
                  </div>

                  <div>
                    <span>
                      Payment Name
                    </span>

                    <h4>
                      {
                        selectedTransaction.title
                      }
                    </h4>
                  </div>

                  <div>
                    <span>
                      Customer
                    </span>

                    <h4>
                      {
                        selectedTransaction.customer
                      }
                    </h4>
                  </div>

                  <div>
                    <span>
                      Amount
                    </span>

                    <h4>
                      ₹
                      {selectedTransaction.amount.toLocaleString()}
                    </h4>
                  </div>
                </div>
              </div>

              <div className="summary-grid">
                <div className="summary-card">
                  <span>
                    Transaction Amount
                  </span>

                  <h2>
                    ₹
                    {selectedTransaction.amount.toLocaleString()}
                  </h2>
                </div>

                <div className="summary-card">
                  <span>
                    Payment Method
                  </span>

                  <h2>
                    {
                      selectedTransaction.paymentMethod
                    }
                  </h2>
                </div>

                <div className="summary-card">
                  <span>Status</span>

                  <h2
                    className={
                      selectedTransaction.status ===
                        "Completed"
                        ? "paid-text"
                        : "pending-text"
                    }
                  >
                    {
                      selectedTransaction.status
                    }
                  </h2>
                </div>
              </div>

              <div className="progress-section">
                <div className="progress-header">
                  <span>
                    Transaction Progress
                  </span>

                  <span>
                    {progress}%
                  </span>
                </div>

                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{
                      width: `${progress}%`,
                    }}
                  />
                </div>
              </div>

              <div className="card">
                <h3>
                  Payment Timeline
                </h3>

                <div className="timeline">
                  {selectedTransaction.timeline.map(
                    (
                      item,
                      index
                    ) => (
                      <div
                        key={index}
                        className="timeline-item"
                      >
                        <div className="timeline-dot dot-paid"></div>

                        <div className="timeline-content">
                          <h4>
                            {
                              item.step
                            }
                          </h4>

                          <small>
                            {
                              item.date
                            }
                          </small>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </>
          )}

        {/* PROJECT PAYMENT VIEW */}

        {!isTransactionView && (
          <>
            <div className="summary-grid">
              <div className="summary-card">
                <span>
                  Total Amount
                </span>

                <h2>
                  ₹
                  {paymentData.totalAmount.toLocaleString()}
                </h2>
              </div>

              <div className="summary-card">
                <span>
                  Paid Amount
                </span>

                <h2 className="paid-text">
                  ₹
                  {paymentData.paidAmount.toLocaleString()}
                </h2>
              </div>

              <div className="summary-card">
                <span>
                  Pending Amount
                </span>

                <h2 className="pending-text">
                  ₹
                  {paymentData.pendingAmount.toLocaleString()}
                </h2>
              </div>
            </div>

            <div className="card">
              <h3>
                Project Payment Timeline
              </h3>

              <div className="timeline">
                {paymentData.milestones.map(
                  (item) => (
                    <div
                      key={item.id}
                      className="timeline-item"
                    >
                      <div
                        className={`timeline-dot ${item.status ===
                          "Paid"
                          ? "dot-paid"
                          : "dot-pending"
                          }`}
                      ></div>

                      <div className="timeline-content">
                        <h4>
                          {
                            item.title
                          }
                        </h4>

                        <p>
                          ₹
                          {item.amount.toLocaleString()}
                        </p>

                        <small>
                          Due Date :
                          {
                            item.dueDate
                          }
                        </small>
                      </div>

                      <span
                        className={
                          item.status ===
                            "Paid"
                            ? "status paid"
                            : "status pending"
                        }
                      >
                        {item.status}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="payment-panel">
              <h4>
                Make Payment
              </h4>

              <div className="payment-row">
                <select
                  value={
                    selectedMilestone
                  }
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
                      (
                        item
                      ) =>
                        item.status ===
                        "Pending"
                    )
                    .map(
                      (
                        item
                      ) => (
                        <option
                          key={
                            item.id
                          }
                          value={
                            item.id
                          }
                        >
                          {
                            item.title
                          }
                        </option>
                      )
                    )}
                </select>

                <select
                  value={
                    paymentMethod
                  }
                  onChange={(e) =>
                    setPaymentMethod(
                      e.target.value
                    )
                  }
                >
                  <option value="">
                    Payment Method
                  </option>

                  <option>
                    UPI
                  </option>

                  <option>
                    Credit Card
                  </option>

                  <option>
                    Debit Card
                  </option>

                  <option>
                    Net Banking
                  </option>
                </select>

                <input
                  readOnly
                  value={
                    selectedPayment
                      ? `₹${selectedPayment.amount.toLocaleString()}`
                      : ""
                  }
                  placeholder="Amount"
                />

                <button
                  className="pay-btn"
                  onClick={handlePayNow}
                >
                  Pay Now
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </MainLayout>
  );
}

export default Payments;