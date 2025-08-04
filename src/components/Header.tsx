import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="bg-white border-b border-border">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">📊</span>
            </div>
            <h1 className="text-2xl font-bold text-foreground">
              HEALTHCARE ANALYSIS HQ
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Technology
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              About Us
            </a>
            <Button variant="ghost" className="text-primary hover:text-primary font-medium">
              Login
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};