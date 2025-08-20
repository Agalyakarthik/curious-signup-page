import { Header } from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <article className="prose prose-lg max-w-none">
          
          {/* Blog Header */}
          <header className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Level Up Your Healthcare Analytics Skills with Our Daily SQL Challenge!
            </h1>
            <p className="text-xl text-muted-foreground">
              Ready to sharpen your SQL skills while diving into the fascinating world of healthcare data?
            </p>
          </header>

          {/* Introduction */}
          <div className="mb-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Healthcare Analysis HQ (HAQ) is thrilled to introduce our brand-new Daily SQL Code Challenge! 🎉
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              We believe that consistent practice is key to mastering any skill, especially when it comes to data analysis. 
              That's why we've designed engaging, bite-sized SQL queries focused on real-world healthcare datasets. 
              Each day, you'll face a new challenge designed to test and expand your abilities.
            </p>
          </div>

          {/* Why Participate Section */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-6">Why Participate? 🤔</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">📊 Healthcare Data Focus</h3>
                <p className="text-muted-foreground">
                  Learn to extract meaningful insights from data relevant to the healthcare industry.
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">📅 Daily Practice Routine</h3>
                <p className="text-muted-foreground">
                  Make learning a habit with quick, focused challenges you can tackle every day.
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">📈 Progress Tracking & Gamification</h3>
                <p className="text-muted-foreground">
                  Monitor your daily streak and stay motivated as you build momentum.
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">💻 Interactive Learning</h3>
                <p className="text-muted-foreground">
                  Apply your knowledge directly with our in-browser SQL editor.
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6 md:col-span-2">
                <h3 className="text-xl font-semibold text-foreground mb-3">🏥 Real Datasets</h3>
                <p className="text-muted-foreground">
                  Work with data that mirrors the complexities and opportunities within healthcare analytics.
                </p>
              </div>
            </div>
          </section>

          {/* Daily Streak Section */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-6">The Power of the Daily Streak 💪</h2>
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                We all know that feeling of accomplishment when you maintain a streak! Our Daily SQL Challenge leverages 
                this to keep you motivated. Each day you successfully solve the query, your streak grows. Watch your 
                consistency build and celebrate your commitment to learning.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                A longer streak means more practice, deeper understanding, and greater confidence in your SQL abilities.
              </p>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-6">How It Works 🧑‍💻</h2>
            
            <div className="space-y-4">
              {[
                { step: "1", title: "Visit the Daily Challenge", desc: "Navigate to the dedicated section on Healthcare Analysis HQ." },
                { step: "2", title: "Understand the Question", desc: "Carefully read the challenge based on a healthcare dataset." },
                { step: "3", title: "Write Your SQL Query", desc: "Use our built-in SQL editor to craft your solution." },
                { step: "4", title: "Submit and See Results", desc: "Instantly check if your query is correct." },
                { step: "5", title: "Build Your Streak", desc: "Come back daily to tackle new challenges and grow your streak!" }
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4 p-4 border border-border rounded-lg">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center bg-card border border-border rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Ready to take your healthcare analytics skills to the next level?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Start your learning journey today and join the Healthcare Analysis HQ community in mastering the 
              technologies that power healthcare analysis!
            </p>
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
              ➡️ Start Daily SQL Challenge
            </button>
            <p className="text-muted-foreground mt-4">
              Let's learn, grow, and analyze together! Happy querying! 🎉
            </p>
          </section>

        </article>
      </main>
    </div>
  );
};

export default Index;