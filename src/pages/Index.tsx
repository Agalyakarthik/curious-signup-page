import { Header } from "@/components/Header";
import { SignupForm } from "@/components/SignupForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left side - Content */}
          <div className="space-y-6">
            <h2 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Ready to master the{" "}
              <span className="text-primary">technologies</span>{" "}
              that power healthcare analysis?
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Being a healthcare analyst comes down to mastering{" "}
                <span className="text-primary font-semibold">SQL and Python</span>.
              </p>
              <p>
                Start your journey to mastery with us today.
              </p>
            </div>
          </div>

          {/* Right side - Signup Form */}
          <div className="flex justify-center lg:justify-end">
            <SignupForm />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;