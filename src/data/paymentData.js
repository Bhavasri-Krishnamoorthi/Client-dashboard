export const paymentData = {
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

export const transactions = [
  {
    id: "TK-98421",

    title: "Advance Payment",

    amount: 25000,

    status: "Completed",

    date: "10 Apr 2024",

    paymentMethod: "UPI",

    customer: "Ethan Clarke",

    progress: 100,

    timeline: [
      {
        step: "Payment Created",
        date: "10 Apr 2024",
      },

      {
        step: "Payment Processing",
        date: "10 Apr 2024",
      },

      {
        step: "Payment Completed",
        date: "10 Apr 2024",
      },
    ],
  },

  {
    id: "TK-98422",

    title: "Design Approval",

    amount: 25000,

    status: "Cancelled",

    date: "25 Apr 2024",

    paymentMethod: "Credit Card",

    customer: "Ava Mitchell",

    progress: 40,

    timeline: [
      {
        step: "Payment Created",
        date: "25 Apr 2024",
      },

      {
        step: "Payment Verification",
        date: "25 Apr 2024",
      },

      {
        step: "Payment Cancelled",
        date: "25 Apr 2024",
      },
    ],
  },

  {
    id: "TK-98423",

    title: "Final Payment",

    amount: 50000,

    status: "Pending",

    date: "15 Jun 2025",

    paymentMethod: "Net Banking",

    customer: "Liam Parker",

    progress: 60,

    timeline: [
      {
        step: "Payment Created",
        date: "15 Jun 2025",
      },

      {
        step: "Waiting For Approval",
        date: "Pending",
      },
    ],
  },
];