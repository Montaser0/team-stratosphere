
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  // Automatically redirect to dashboard after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center">
      <Card className="max-w-lg w-full p-6 text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to Your Admin Dashboard</h1>
        
        <p className="text-xl text-muted-foreground mb-8">
          Your centralized platform for managing your business operations.
        </p>

        <div className="space-y-4">
          <Button 
            size="lg" 
            className="w-full" 
            onClick={() => navigate("/")}
          >
            Go to Dashboard
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          
          <p className="text-sm text-muted-foreground">
            Redirecting you automatically in a few seconds...
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Index;
