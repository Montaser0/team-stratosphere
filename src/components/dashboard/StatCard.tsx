
import { formatShortNumber, getPercentageChangeColor, getPercentageChangeIcon } from "@/lib/utils";
import { 
  DollarSign, Mail, Network, UserPlus, BarChart3, LineChart, PieChart 
} from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: number;
  percentageChange: number;
  icon: string;
  ringColor: string;
}

const iconMap: Record<string, React.ReactNode> = {
  "mail": <Mail className="h-6 w-6" />,
  "dollar-sign": <DollarSign className="h-6 w-6" />,
  "user-plus": <UserPlus className="h-6 w-6" />,
  "network": <Network className="h-6 w-6" />,
  "bar-chart": <BarChart3 className="h-6 w-6" />,
  "line-chart": <LineChart className="h-6 w-6" />,
  "pie-chart": <PieChart className="h-6 w-6" />,
};

const StatCard = ({ title, value, percentageChange, icon, ringColor }: StatCardProps) => {
  const changeColorClass = getPercentageChangeColor(percentageChange);
  const changeIcon = getPercentageChangeIcon(percentageChange);
  
  return (
    <div className="stat-card animate-scaleIn">
      <div className={cn("stat-card-ring", ringColor)}>
        <div className="bg-white dark:bg-gray-800 rounded-full h-12 w-12 flex items-center justify-center shadow-sm m-1">
          {iconMap[icon] || <Mail className="h-6 w-6" />}
        </div>
      </div>
      
      <div className="mt-1">
        <p className="text-sm text-muted-foreground">{title}</p>
        <h3 className="text-2xl font-bold mt-1">{formatShortNumber(value)}</h3>
        <div className={cn("flex items-center mt-2 text-sm", changeColorClass)}>
          <span>{changeIcon}</span>
          <span className="ml-1">{Math.abs(percentageChange)}%</span>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
