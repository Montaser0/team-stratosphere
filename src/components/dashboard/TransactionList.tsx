
interface Transaction {
  id: string;
  name: string;
  date: string;
  amount: number;
  status: string;
}

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList = ({ transactions }: TransactionListProps) => {
  // Format date: 2025-03-01 -> 2025-03-01
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  };

  // Format amount: 250.75 -> $250.75
  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <div className="overflow-hidden">
      <div className="animate-fadeIn">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between py-3 border-b last:border-0"
          >
            <div className="flex items-center">
              <div className="ml-3">
                <p className="font-medium">{transaction.name}</p>
                <p className="text-sm text-muted-foreground">{formatDate(transaction.date)}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-emerald-500">{formatAmount(transaction.amount)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionList;
