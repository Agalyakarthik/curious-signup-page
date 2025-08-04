import { Header } from "@/components/Header";
import { InterestCapture } from "@/components/InterestCapture";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Ready to master the{" "}
                <span className="text-primary">technologies</span>{" "}
                that power healthcare analysis?
              </h2>
              
              <div className="space-y-4 text-xl text-muted-foreground leading-relaxed">
                <p>
                  Being a healthcare analyst comes down to mastering{" "}
                  <span className="font-semibold text-foreground">SQL</span>,{" "}
                  <span className="font-semibold text-foreground">Python</span>, and{" "}
                  <span className="font-semibold text-foreground">Statistics</span>.
                </p>
                <p>
                  Start your journey to mastery with us today.
                </p>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-sm font-medium text-muted-foreground">Real Healthcare Data</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-sm font-medium text-muted-foreground">Expert-Designed Curriculum</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-sm font-medium text-muted-foreground">Career-Focused Learning</span>
              </div>
            </div>
          </div>

          {/* Right side - Interest Capture Form */}
          <div className="flex justify-center lg:justify-end">
            <InterestCapture />
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2024 Healthcare Analysis HQ. Building the future of healthcare data education.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;