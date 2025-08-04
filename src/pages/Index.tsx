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
                  <span className="font-semibold text-foreground">SQL</span> and{" "}
                  <span className="font-semibold text-foreground">Python</span>.
                </p>
                <p>
                  Start your journey to mastery with us today.
                </p>
              </div>
            </div>

            {/* Why Healthcare Analysis HQ */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                Why Healthcare Analysis HQ?
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 text-primary font-bold text-lg flex-shrink-0 mt-0.5">✓</div>
                  <span className="text-lg text-muted-foreground">Specialized focus on healthcare data analysis challenges</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 text-primary font-bold text-lg flex-shrink-0 mt-0.5">✓</div>
                  <span className="text-lg text-muted-foreground">Interactive SQL and Python learning environment</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 text-primary font-bold text-lg flex-shrink-0 mt-0.5">✓</div>
                  <span className="text-lg text-muted-foreground">Daily practice routine to build consistent skills</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 text-primary font-bold text-lg flex-shrink-0 mt-0.5">✓</div>
                  <span className="text-lg text-muted-foreground">Real-world healthcare datasets and scenarios</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 text-primary font-bold text-lg flex-shrink-0 mt-0.5">✓</div>
                  <span className="text-lg text-muted-foreground">Progress tracking and gamification features</span>
                </div>
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