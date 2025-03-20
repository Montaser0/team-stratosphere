
// Dashboard metrics data
export const metricsData = {
  emailsSent: {
    value: 12360,
    change: 14,
    previousValue: 10842,
    icon: "mail",
  },
  totalSales: {
    value: 431322,
    change: 14,
    previousValue: 378352,
    icon: "dollar-sign",
  },
  newCustomers: {
    value: 32441,
    change: 5,
    previousValue: 30896,
    icon: "user-plus",
  },
  trafficInbound: {
    value: 1325134,
    change: 14,
    previousValue: 1162399,
    icon: "network",
  },
};

// Revenue data for the chart
export const revenueData = [
  { month: "Jan", revenue: 42500 },
  { month: "Feb", revenue: 47800 },
  { month: "Mar", revenue: 39500 },
  { month: "Apr", revenue: 52100 },
  { month: "May", revenue: 48900 },
  { month: "Jun", revenue: 62300 },
  { month: "Jul", revenue: 58400 },
  { month: "Aug", revenue: 73200 },
  { month: "Sep", revenue: 69100 },
  { month: "Oct", revenue: 78300 },
  { month: "Nov", revenue: 83200 },
  { month: "Dec", revenue: 91500 },
];

// Recent transactions for the dashboard
export const transactionsData = [
  {
    id: "tx1",
    name: "John Doe",
    date: "2025-03-01",
    amount: 250.75,
    status: "completed",
  },
  {
    id: "tx2",
    name: "Jane Smith",
    date: "2025-03-02",
    amount: 139.5,
    status: "completed",
  },
  {
    id: "tx3",
    name: "Michael Brown",
    date: "2025-03-03",
    amount: 500,
    status: "completed",
  },
  {
    id: "tx4",
    name: "Emma Johnson",
    date: "2025-03-04",
    amount: 80.25,
    status: "completed",
  },
  {
    id: "tx5",
    name: "Emma Johnson",
    date: "2025-03-04",
    amount: 80.25,
    status: "completed",
  },
];

// Team members data
export const teamMembers = [
  {
    id: 1,
    name: "Montaser Haj Omar",
    role: "Website Admin",
    email: "montaser@example.com",
    imageUrl: "/lovable-uploads/59eabdad-6cea-43e2-ab93-e2f5a501952f.png",
    dateJoined: "2022-05-15",
    status: "active",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Marketing Manager",
    email: "sarah@example.com",
    imageUrl: "",
    dateJoined: "2022-06-23",
    status: "active",
  },
  {
    id: 3,
    name: "David Miller",
    role: "Sales Lead",
    email: "david@example.com",
    imageUrl: "",
    dateJoined: "2022-08-12",
    status: "inactive",
  },
  {
    id: 4,
    name: "Emily Chen",
    role: "Content Creator",
    email: "emily@example.com",
    imageUrl: "",
    dateJoined: "2023-01-28",
    status: "active",
  },
  {
    id: 5,
    name: "Robert Wilson",
    role: "Customer Support",
    email: "robert@example.com",
    imageUrl: "",
    dateJoined: "2023-03-15",
    status: "active",
  },
];

// Contacts data
export const contactsData = [
  {
    id: 1,
    name: "Alice Brown",
    email: "alice@example.com",
    phone: "+1 (555) 123-4567",
    company: "TechCorp Inc.",
    status: "active",
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@example.com",
    phone: "+1 (555) 234-5678",
    company: "Global Industries",
    status: "active",
  },
  {
    id: 3,
    name: "Carol Davis",
    email: "carol@example.com",
    phone: "+1 (555) 345-6789",
    company: "Innovative Solutions",
    status: "inactive",
  },
  {
    id: 4,
    name: "Dan Williams",
    email: "dan@example.com",
    phone: "+1 (555) 456-7890",
    company: "Digital Ventures",
    status: "active",
  },
  {
    id: 5,
    name: "Eva Green",
    email: "eva@example.com",
    phone: "+1 (555) 567-8901",
    company: "Apex Consulting",
    status: "active",
  },
];

// Invoices data
export const invoicesData = [
  {
    id: "INV-001",
    client: "TechCorp Inc.",
    amount: 2500,
    date: "2025-02-15",
    dueDate: "2025-03-15",
    status: "paid",
  },
  {
    id: "INV-002",
    client: "Global Industries",
    amount: 1800,
    date: "2025-02-20",
    dueDate: "2025-03-20",
    status: "pending",
  },
  {
    id: "INV-003",
    client: "Innovative Solutions",
    amount: 3200,
    date: "2025-02-25",
    dueDate: "2025-03-25",
    status: "paid",
  },
  {
    id: "INV-004",
    client: "Digital Ventures",
    amount: 1500,
    date: "2025-03-01",
    dueDate: "2025-04-01",
    status: "overdue",
  },
  {
    id: "INV-005",
    client: "Apex Consulting",
    amount: 4000,
    date: "2025-03-05",
    dueDate: "2025-04-05",
    status: "pending",
  },
];

// FAQ data
export const faqData = [
  {
    id: 1,
    question: "How do I add a new team member?",
    answer: "Go to the 'Manage Team' page and click the 'Add New Member' button. Fill in the required information and click 'Save'.",
  },
  {
    id: 2,
    question: "How can I generate reports?",
    answer: "Navigate to the Dashboard page and click on the 'Download Reports' button in the top right corner. Select the type of report you want to generate.",
  },
  {
    id: 3,
    question: "Can I customize the dashboard layout?",
    answer: "Currently, the dashboard layout is fixed. However, we're working on a customizable dashboard feature that will be available in a future update.",
  },
  {
    id: 4,
    question: "How do I reset my password?",
    answer: "Click on your profile picture in the top right corner, select 'Settings', and then choose 'Change Password'. Follow the instructions to reset your password.",
  },
  {
    id: 5,
    question: "Is there a mobile app available?",
    answer: "Yes, we offer mobile apps for both iOS and Android platforms. You can download them from the App Store or Google Play Store by searching for 'Admin Dashboard'.",
  },
];

// Bar chart data
export const barChartData = [
  {
    name: "Q1",
    revenue: 18000,
    expenses: 12000,
  },
  {
    name: "Q2",
    revenue: 24000,
    expenses: 14000,
  },
  {
    name: "Q3",
    revenue: 31000,
    expenses: 18000,
  },
  {
    name: "Q4",
    revenue: 42000,
    expenses: 22000,
  },
];

// Pie chart data
export const pieChartData = [
  { name: "Product A", value: 35 },
  { name: "Product B", value: 25 },
  { name: "Product C", value: 20 },
  { name: "Product D", value: 15 },
  { name: "Others", value: 5 },
];

// Line chart data
export const lineChartData = [
  {
    name: "Jan",
    website: 4000,
    social: 2400,
    email: 1800,
  },
  {
    name: "Feb",
    website: 4500,
    social: 2800,
    email: 2000,
  },
  {
    name: "Mar",
    website: 3800,
    social: 2600,
    email: 1700,
  },
  {
    name: "Apr",
    website: 4200,
    social: 3000,
    email: 2300,
  },
  {
    name: "May",
    website: 5000,
    social: 3400,
    email: 2800,
  },
  {
    name: "Jun",
    website: 5500,
    social: 3800,
    email: 3100,
  },
  {
    name: "Jul",
    website: 6000,
    social: 4200,
    email: 3500,
  },
];

// Calendar events data
export const calendarEvents = [
  {
    id: "1",
    title: "Team Meeting",
    start: new Date(2025, 2, 15, 10, 0),
    end: new Date(2025, 2, 15, 11, 30),
  },
  {
    id: "2",
    title: "Client Presentation",
    start: new Date(2025, 2, 18, 14, 0),
    end: new Date(2025, 2, 18, 15, 30),
  },
  {
    id: "3",
    title: "Product Launch",
    start: new Date(2025, 2, 22, 9, 0),
    end: new Date(2025, 2, 22, 12, 0),
  },
  {
    id: "4",
    title: "Strategy Review",
    start: new Date(2025, 2, 25, 13, 0),
    end: new Date(2025, 2, 25, 14, 0),
  },
  {
    id: "5",
    title: "Monthly Report",
    start: new Date(2025, 2, 28, 9, 0),
    end: new Date(2025, 2, 28, 10, 0),
  },
];
