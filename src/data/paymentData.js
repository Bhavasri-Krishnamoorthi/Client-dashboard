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