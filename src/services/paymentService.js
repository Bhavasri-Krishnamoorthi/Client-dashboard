export const getPaymentData = () => {
  return {
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
};
export const recentTransactions = [
  {
    id: "TK-98421",
    productName: "Project1",
    dateTime: "19 Nov 2025, 10:32",
    customer: "TrendCart",
    price: "$79.00",
    status: "Completed",
    amount: 25000,
    paymentMethod: "UPI",
    progress: 100,
   timeline: [
  {
    step: "Payment Initiated",
    date: "19 Nov 2025, 09:45 AM",
  },
  {
    step: "Payment Verified",
    date: "19 Nov 2025, 10:10 AM",
  },
  {
    step: "Payment Completed",
    date: "19 Nov 2025, 10:32 AM",
  },
],
  },

  {
    id: "TK-98422",
    productName: "Project2",
    dateTime: "20 Nov 2025, 11:15",
    customer: "TrendCart",
    price: "$159.00",
    status: "Cancelled",
    amount: 15000,
    paymentMethod: "Card",
    progress: 0,
    timeline: [
  {
    step: "Payment Initiated",
    date: "20 Nov 2025, 10:50 AM",
  },
  {
    step: "Payment Verification Failed",
    date: "20 Nov 2025, 11:10 AM",
  },
  {
    step: "Payment Cancelled",
    date: "20 Nov 2025, 11:15 AM",
  },
],
  },

  {
    id: "TK-98423",
    productName: "Project3",
    dateTime: "21 Nov 2025, 09:45",
    customer: "TrendCart",
    price: "$55.00",
    status: "Pending",
    amount: 10000,
    paymentMethod: "Net Banking",
    progress: 50,
    timeline: [
  {
    step: "Payment Initiated",
    date: "21 Nov 2025, 09:20 AM",
  },
  {
    step: "Awaiting Approval",
    date: "21 Nov 2025, 09:45 AM",
  },
],
  },
];