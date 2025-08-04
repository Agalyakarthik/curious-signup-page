import { Header } from "@/components/Header";
import { SignupForm } from "@/components/SignupForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Ready to master the technologies that power healthcare analysis?
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Being a healthcare analyst comes down to mastering SQL, Python and Statistics.
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