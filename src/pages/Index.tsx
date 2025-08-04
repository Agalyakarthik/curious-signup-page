import { Header } from "@/components/Header";
import { InterestCapture } from "@/components/InterestCapture";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Interest Capture Section - Moved to top */}
      <section className="bg-primary/5 border-b border-border">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Start Your Healthcare Analytics Journey Today
              </h2>
              <p className="text-muted-foreground">
                Join thousands learning SQL and Python for healthcare data analysis
              </p>
            </div>
            <div className="flex justify-center">
              <InterestCapture />
            </div>
          </div>
        </div>
      </section>
      
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="text-center space-y-8 mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Ready to master the{" "}
              <span className="text-primary">technologies</span>{" "}
              that power healthcare analysis?
            </h1>
            
            <div className="space-y-4 text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
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
          <div className="space-y-8 mb-20">
            <h3 className="text-3xl font-bold text-foreground text-center">
              Why Healthcare Analysis HQ?
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 text-primary font-bold text-xl flex-shrink-0 mt-1">✓</div>
                <span className="text-lg text-muted-foreground">Specialized focus on healthcare data analysis challenges</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 text-primary font-bold text-xl flex-shrink-0 mt-1">✓</div>
                <span className="text-lg text-muted-foreground">Interactive SQL and Python learning environment</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 text-primary font-bold text-xl flex-shrink-0 mt-1">✓</div>
                <span className="text-lg text-muted-foreground">Daily practice routine to build consistent skills</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 text-primary font-bold text-xl flex-shrink-0 mt-1">✓</div>
                <span className="text-lg text-muted-foreground">Real-world healthcare datasets and scenarios</span>
              </div>
              <div className="flex items-start gap-3 md:col-span-2 justify-center">
                <div className="w-6 h-6 text-primary font-bold text-xl flex-shrink-0 mt-1">✓</div>
                <span className="text-lg text-muted-foreground">Progress tracking and gamification features</span>
              </div>
            </div>
          </div>

          {/* Example Section */}
          <div className="max-w-4xl mx-auto mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              See What You'll Be Learning
            </h3>
            <p className="text-lg text-muted-foreground">
              Daily challenges with real healthcare data
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
            {/* Challenge Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-blue-600 rounded"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Question of the Day (7/30/25)</h4>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>⏱️ 5 mins</span>
                    <span>📊 Intermediate</span>
                  </div>
                </div>
              </div>
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                SQL Challenge
              </div>
            </div>

            {/* Question */}
            <div className="mb-6">
              <h5 className="text-lg font-medium text-foreground mb-4">
                1. How many patients in this dataset are farmers?
              </h5>
              <p className="text-muted-foreground mb-4">Type your query below</p>
            </div>

            {/* SQL Editor Mock */}
            <div className="bg-slate-900 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-slate-400 text-sm ml-2">SQL Query Editor</span>
              </div>
              <div className="font-mono text-sm">
                <div className="text-purple-400">SELECT</div>
                <div className="text-blue-400 ml-4">COUNT(*)</div>
                <div className="text-purple-400">FROM</div>
                <div className="text-blue-400 ml-4">PUBLIC.DEMOGRAPHY</div>
                <div className="text-purple-400">WHERE</div>
                <div className="text-blue-400 ml-4">OCCUPATION = <span className="text-green-400">'farmer'</span>;</div>
              </div>
              <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded mt-4 text-sm font-medium">
                SUBMIT
              </button>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 text-sm">📊</span>
                </div>
                <div>
                  <h6 className="font-medium text-foreground">Real Datasets</h6>
                  <p className="text-sm text-muted-foreground">Anonymized healthcare data from actual medical systems</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 text-sm">⚡</span>
                </div>
                <div>
                  <h6 className="font-medium text-foreground">Instant Feedback</h6>
                  <p className="text-sm text-muted-foreground">Get immediate results and explanations for every query</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 text-sm">📈</span>
                </div>
                <div>
                  <h6 className="font-medium text-foreground">Track Progress</h6>
                  <p className="text-sm text-muted-foreground">Build your streak and monitor skill development</p>
                </div>
              </div>
            </div>
          </div>
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