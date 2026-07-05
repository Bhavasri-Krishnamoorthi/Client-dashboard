import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./PaymentPage.css";
import MainLayout from "../layouts/MainLayout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const paymentData = {
  projectId: "PRJ-2024-001",
  totalAmount: 125000,
  paidAmount: 75000,
  pendingAmount: 50000,

  milestones: [
    {
      id: 1,
      title: "Advance Payment",
      amount: 25000,
      dueDate: "10 Apr 2024",
      status: "Paid",
    },
    {
      id: 2,
      title: "Design Approval",
      amount: 25000,
      dueDate: "25 Apr 2024",
      status: "Paid",
    },
    {
      id: 3,
      title: "Development Start",
      amount: 25000,
      dueDate: "15 May 2024",
      status: "Paid",
    },
    {
      id: 4,
      title: "Final Payment",
      amount: 50000,
      dueDate: "15 Jun 2025",
      status: "Pending",
    },
  ],
};


function Payments() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState([]);
  const [timeline, setTimeline] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPayments();
    loadTimeline();
  }, []);

  const loadPayments = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/v2/payments"
      );

      const result = await response.json();
      console.log(result);

      const formatted = result.data.map((item) => ({
        id: item.id,
        transaction_id: item.transaction_id,
        title: item.payment_name,
        customer: item.customer_name,
        amount: Number(item.amount),
        paymentMethod: item.payment_method,
        status: item.status,
        progress:
          item.status === "Completed"
            ? 100
            : item.status === "Pending"
              ? 50
              : 0,
        timeline: [
          {
            step: "Payment Created",
            date: new Date(item.created_at).toLocaleString(),
          },
        ],
      }));

      console.log(formatted);

      setTransactions(formatted);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  const loadTimeline = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/v2/payments/timeline/${paymentData.projectId}`
      );

      const result = await response.json();

      if (result.success) {
        setTimeline(result.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const isTransactionView = !!id;

  const [selectedMilestone, setSelectedMilestone] =
    useState("");

  const [paymentMethod, setPaymentMethod] =
    useState("");

  const selectedTransaction = transactions.find(
    (item) => String(item.id) === String(id)
  );
  console.log("Route ID:", id);
  console.log("Transactions:", transactions);
  console.log("Selected Transaction:", selectedTransaction);

  const selectedPayment =
     timeline.find(
      (item) =>
        item.id === Number(selectedMilestone)
    );

  const progress =
    selectedTransaction?.progress || 0;

  const handlePayNow = async () => {
    if (!selectedMilestone) {
      toast.warning("Select Payment");
      return;
    }

    if (!paymentMethod) {
      toast.warning("Select Payment Method");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/api/v2/payments",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            transaction_id: `TXN${Date.now()}`,
            payment_name: selectedPayment.title,
            customer_name: "Bharath",
            amount: selectedPayment.amount,
            payment_method: paymentMethod,
            status: "Pending",
          }),
        }
      );

      const result = await response.json();

      if (result.success) {
        toast.success("Payment Created Successfully");

        loadPayments();
        loadTimeline();

        setSelectedMilestone("");
        setPaymentMethod("");
      } else {
        toast.error(result.message);
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  };
  if (loading) {
    return (
      <MainLayout>
        <div
          style={{
            padding: "40px",
            textAlign: "center",
            fontSize: "22px",
          }}
        >
          Loading Payments...
        </div>
      </MainLayout>
    );
  }

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
                        selectedTransaction.transaction_id
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
                {timeline.map((item) => (
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

                  {timeline
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
      <ToastContainer
        position="top-right"
        autoClose={3000}
      />
    </MainLayout>
  );
}

export default Payments;