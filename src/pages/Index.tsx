import { Header } from "@/components/Header";
import { InterestCapture } from "@/components/InterestCapture";

const Index = () => {
  return (
    <div className="h-screen bg-background overflow-hidden flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-4">
        <div className="grid lg:grid-cols-3 gap-6 h-full max-h-[calc(100vh-80px)]">
          
          {/* Left Column - Main Content (2/3 width) */}
          <div className="lg:col-span-2 space-y-4">
            {/* Hero Section */}
            <div className="space-y-3">
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                Ready to master the{" "}
                <span className="text-primary">technologies</span>{" "}
                that power healthcare analysis?
              </h1>
              
              <p className="text-lg text-muted-foreground">
                Being a healthcare analyst comes down to mastering{" "}
                <span className="font-semibold text-foreground">SQL</span> and{" "}
                <span className="font-semibold text-foreground">Python</span>.
              </p>
            </div>

            {/* Why HAQ Section */}
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-foreground">
                Why Healthcare Analysis HQ?
              </h3>
              
              <div className="grid md:grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 text-primary font-bold">✓</div>
                  <span className="text-muted-foreground">Healthcare data focus</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 text-primary font-bold">✓</div>
                  <span className="text-muted-foreground">Interactive learning</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 text-primary font-bold">✓</div>
                  <span className="text-muted-foreground">Daily practice routine</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 text-primary font-bold">✓</div>
                  <span className="text-muted-foreground">Real datasets</span>
                </div>
                <div className="flex items-center gap-2 md:col-span-2">
                  <div className="w-4 h-4 text-primary font-bold">✓</div>
                  <span className="text-muted-foreground">Progress tracking & gamification</span>
                </div>
              </div>
            </div>

            {/* Example Section - Compact */}
            <div className="bg-card border border-border rounded-lg p-4 flex-1">
              <div className="space-y-3">
                {/* Challenge Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-600 rounded"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Daily Challenge (7/30/25)</h4>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span>⏱️ 5 mins</span>
                        <span>📊 Intermediate</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                    SQL Challenge
                  </div>
                </div>

                {/* Question */}
                <div>
                  <h5 className="font-medium text-sm mb-2">
                    How many patients in this dataset are farmers?
                  </h5>
                </div>

                {/* SQL Editor Mock - Compact */}
                <div className="bg-slate-900 rounded p-3">
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-slate-400 text-xs ml-1">SQL Editor</span>
                  </div>
                  <div className="font-mono text-xs space-y-1">
                    <div><span className="text-purple-400">SELECT</span> <span className="text-blue-400">COUNT(*)</span></div>
                    <div><span className="text-purple-400">FROM</span> <span className="text-blue-400">PUBLIC.DEMOGRAPHY</span></div>
                    <div><span className="text-purple-400">WHERE</span> <span className="text-blue-400">OCCUPATION = <span className="text-green-400">'farmer'</span></span></div>
                  </div>
                  <button className="bg-primary hover:bg-primary/90 text-white px-3 py-1 rounded mt-2 text-xs">
                    SUBMIT
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Interest Capture (1/3 width) */}
          <div className="space-y-4 flex flex-col">
            {/* Interest Capture Header */}
            <div className="text-center space-y-2">
              <h2 className="text-xl font-bold text-foreground">
                Start Learning Today
              </h2>
              <p className="text-sm text-muted-foreground">
                Join thousands mastering healthcare analytics
              </p>
            </div>
            
            {/* Interest Capture Form */}
            <div className="flex-1">
              <InterestCapture />
            </div>
            
            {/* Bottom CTA */}
            <div className="text-center">
              <p className="text-xs text-muted-foreground">
                Start your journey to mastery with us today.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;