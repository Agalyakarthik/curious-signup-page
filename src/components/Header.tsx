import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="bg-white border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">🩺</span>
            </div>
            <h1 className="text-xl font-bold text-foreground">
              HEALTHCARE ANALYSIS HQ (HAQ)
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Technology
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              About Us
            </a>
            <Button variant="ghost" className="text-primary hover:text-primary">
              Login
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};