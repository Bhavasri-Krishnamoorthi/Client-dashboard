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
    customer: "Ethan Clarke",
    price: "$79.00",
    status: "Completed",
  },

  {
    id: "TK-98422",
    productName: "Project2",
    dateTime: "19 Nov 2025, 11:05",
    customer: "Ava Mitchell",
    price: "$159.00",
    status: "Cancelled",
  },

  {
    id: "TK-98423",
    productName: "Project3",
    dateTime: "19 Nov 2025, 11:44",
    customer: "Liam Parker",
    price: "$55.00",
    status: "Pending",
  },
];