
import { useState } from "react";
import { invoicesData as initialInvoicesData } from "@/data/mockData";
import { Edit, Plus, Search, Trash } from "lucide-react";

const Invoices = () => {
  const [invoices, setInvoices] = useState(initialInvoicesData);
  const [searchTerm, setSearchTerm] = useState("");
  
  // Filter invoices based on search term
  const filteredInvoices = invoices.filter(
    (invoice) =>
      invoice.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.client.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Format amount to currency
  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "paid":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300";
      case "overdue":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300";
    }
  };

  const handleDeleteInvoice = (id: string) => {
    setInvoices(invoices.filter((invoice) => invoice.id !== id));
  };

  return (
    <div className="page-transition">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Invoices</h1>
        <p className="text-muted-foreground mt-1">Manage your invoice balances</p>
      </div>

      <div className="bg-card rounded-xl border animate-scaleIn">
        <div className="p-4 border-b flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search invoices..."
              className="h-9 w-full md:w-[300px] rounded-md border border-input bg-background pl-8 pr-4 text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <button
            className="bg-primary text-primary-foreground px-4 py-2 rounded-md flex items-center gap-1.5 text-sm"
          >
            <Plus size={16} />
            <span>Create Invoice</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold text-sm">Invoice ID</th>
                <th className="px-4 py-3 text-left font-semibold text-sm">Client</th>
                <th className="px-4 py-3 text-left font-semibold text-sm">Issue Date</th>
                <th className="px-4 py-3 text-left font-semibold text-sm">Due Date</th>
                <th className="px-4 py-3 text-left font-semibold text-sm">Amount</th>
                <th className="px-4 py-3 text-left font-semibold text-sm">Status</th>
                <th className="px-4 py-3 text-right font-semibold text-sm">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredInvoices.map((invoice) => (
                <tr key={invoice.id} className="border-b last:border-b-0 hover:bg-muted/25 transition-colors">
                  <td className="px-4 py-3 font-medium">{invoice.id}</td>
                  <td className="px-4 py-3">{invoice.client}</td>
                  <td className="px-4 py-3 text-sm">{invoice.date}</td>
                  <td className="px-4 py-3 text-sm">{invoice.dueDate}</td>
                  <td className="px-4 py-3 font-medium">{formatAmount(invoice.amount)}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(invoice.status)}`}
                    >
                      {invoice.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-1 rounded-md hover:bg-muted">
                        <Edit size={16} />
                      </button>
                      <button 
                        className="p-1 rounded-md hover:bg-muted"
                        onClick={() => handleDeleteInvoice(invoice.id)}
                      >
                        <Trash size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Invoices;
