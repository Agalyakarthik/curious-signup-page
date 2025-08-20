import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LoginDialog } from "@/components/LoginDialog";

export const Header = () => {
  const [showLoginDialog, setShowLoginDialog] = useState(false);

  return (
    <>
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <ArrowUpRight className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">
              HEALTHCARE ANALYSIS HQ (HAQ)
            </span>
          </div>

          {/* Login Button */}
          <Button 
            variant="outline" 
            className="border-border hover:bg-muted"
            onClick={() => setShowLoginDialog(true)}
          >
            Login
          </Button>
        </div>
      </header>

      <LoginDialog 
        open={showLoginDialog} 
        onOpenChange={setShowLoginDialog} 
      />
    </>
  );
};