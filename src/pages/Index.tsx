import { Header } from "@/components/Header";
import { useState } from "react";

const Index = () => {
  const [showChallenge, setShowChallenge] = useState(false);
  const [userSolution, setUserSolution] = useState("");
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <article className="prose prose-lg max-w-none">
          
          {/* Academic Header */}
          <header className="text-center mb-16 max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight tracking-tight">
              Master Healthcare Analytics with Daily SQL Challenges
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground font-light leading-relaxed">
              Join Harvard-quality training to sharpen your SQL skills with real-world healthcare datasets
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mt-8 rounded-full"></div>
          </header>

          {/* Academic Introduction */}
          <div className="mb-12 bg-gradient-card border border-accent/20 rounded-lg p-8 shadow-card">
            <p className="text-xl text-foreground leading-relaxed font-medium mb-6">
              Healthcare Analysis HQ presents our premier Daily SQL Challenge program—designed with the rigor and excellence of top-tier academic institutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe that mastery comes through deliberate, consistent practice. Our carefully crafted SQL challenges focus on real-world healthcare datasets, providing you with the analytical skills demanded by today's data-driven healthcare industry. Each challenge is designed to progressively build your expertise.
            </p>
          </div>

          {/* Why Participate Section */}
          <section className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-8 text-center">Why Choose Our Program?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-card border border-accent/20 rounded-lg p-8 shadow-card hover:shadow-elegant transition-all duration-300">
                <div className="w-12 h-12 bg-primary rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Healthcare Data Expertise</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Master the art of extracting meaningful insights from complex healthcare datasets used in real clinical and administrative environments.
                </p>
              </div>
              
              <div className="bg-gradient-card border border-accent/20 rounded-lg p-8 shadow-card hover:shadow-elegant transition-all duration-300">
                <div className="w-12 h-12 bg-primary rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">📅</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Structured Learning Path</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Build expertise through our methodically designed daily challenges that progressively advance your analytical capabilities.
                </p>
              </div>
              
              <div className="bg-gradient-card border border-accent/20 rounded-lg p-8 shadow-card hover:shadow-elegant transition-all duration-300">
                <div className="w-12 h-12 bg-primary rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">📈</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Performance Analytics</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Track your progress with detailed metrics and maintain your learning momentum through our streak system.
                </p>
              </div>
              
              <div className="bg-gradient-card border border-accent/20 rounded-lg p-8 shadow-card hover:shadow-elegant transition-all duration-300">
                <div className="w-12 h-12 bg-primary rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">💻</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Interactive Platform</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Practice directly in our advanced SQL environment designed specifically for healthcare data analysis.
                </p>
              </div>
            </div>
          </section>

          {/* Excellence Through Consistency */}
          <section className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-8 text-center">Excellence Through Consistency</h2>
            <div className="bg-gradient-primary text-primary-foreground rounded-lg p-10 shadow-glow">
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-xl leading-relaxed mb-6 font-light">
                  Academic excellence is built through disciplined, consistent practice. Our streak system harnesses the psychology of achievement, transforming daily learning into a powerful habit that compounds over time.
                </p>
                <p className="text-lg leading-relaxed opacity-90">
                  Each completed challenge strengthens not only your technical expertise but also your analytical confidence—the foundation of exceptional healthcare data professionals.
                </p>
              </div>
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

          {/* Academic Call to Action */}
          <section className="text-center bg-gradient-card border border-accent/20 rounded-lg p-12 shadow-card">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight">
              Begin Your Journey to Healthcare Analytics Mastery
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Join our community of dedicated professionals who are advancing their careers through rigorous, practical training in healthcare data analysis.
            </p>
            <button 
              onClick={() => setShowChallenge(!showChallenge)}
              className="bg-primary hover:bg-primary-glow text-primary-foreground px-10 py-4 rounded-lg font-bold text-xl transition-all duration-300 shadow-elegant hover:shadow-glow transform hover:scale-105"
            >
              {showChallenge ? 'Hide Challenge' : 'Access Daily Challenge'}
            </button>
            <p className="text-muted-foreground mt-6 font-light">
              Excellence in healthcare analytics begins with your first query.
            </p>
          </section>

          {/* Daily Challenge Section */}
          {showChallenge && (
            <section className="mt-8 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                Today's SQL Challenge 📊
              </h2>
              
              <div className="bg-card border border-border rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Challenge Question:</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Using the hospital admissions dataset, write a SQL query to find the top 5 departments with the highest average length of stay (in days) for patients admitted in 2023. Include the department name, average length of stay (rounded to 2 decimal places), and total number of admissions.
                </p>
                
                <div className="bg-muted/50 border border-muted rounded p-4 mb-4">
                  <h4 className="font-semibold text-foreground mb-2">Expected Output Columns:</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• department_name</li>
                    <li>• avg_length_of_stay</li>
                    <li>• total_admissions</li>
                  </ul>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Dataset Download:</h3>
                <p className="text-muted-foreground mb-4">
                  Download the hospital admissions dataset to practice this challenge:
                </p>
                <a 
                  href="https://drive.google.com/file/d/1ABC123DEF456/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  📁 Download Dataset from Google Drive
                </a>
                <p className="text-sm text-muted-foreground mt-3">
                  The dataset includes patient admissions, department information, admission/discharge dates, and other relevant healthcare metrics.
                </p>
              </div>

              {/* Solution Input Section */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Your SQL Solution:</h3>
                <textarea
                  value={userSolution}
                  onChange={(e) => setUserSolution(e.target.value)}
                  placeholder="Type your SQL query here..."
                  className="w-full h-32 p-3 border border-border rounded-lg bg-background text-foreground resize-none font-mono text-sm"
                />
                
                <div className="flex gap-4 mt-4">
                  <button 
                    onClick={() => setShowSolution(!showSolution)}
                    className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-2 rounded-lg font-semibold transition-colors"
                  >
                    {showSolution ? 'Hide Solution' : 'Show Solution'}
                  </button>
                </div>

                {/* Correct Solution Display */}
                {showSolution && (
                  <div className="mt-6 bg-muted/50 border border-muted rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-3">Correct Solution:</h4>
                    <div className="bg-background border border-border rounded p-3 font-mono text-sm">
                      <pre className="text-foreground whitespace-pre-wrap">
{`SELECT 
    d.department_name,
    ROUND(AVG(DATEDIFF(a.discharge_date, a.admission_date)), 2) AS avg_length_of_stay,
    COUNT(*) AS total_admissions
FROM 
    admissions a
    JOIN departments d ON a.department_id = d.department_id
WHERE 
    YEAR(a.admission_date) = 2023
GROUP BY 
    d.department_name
ORDER BY 
    avg_length_of_stay DESC
LIMIT 5;`}
                      </pre>
                    </div>
                    
                    <div className="mt-4 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                      <p className="text-primary font-semibold mb-2">🎉 Verify Your Solution!</p>
                      <p className="text-muted-foreground">
                        Compare your query with the correct solution above. Practice makes perfect! 
                        We'll meet you tomorrow with a brand new challenge to continue your SQL journey.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}

        </article>
      </main>
    </div>
  );
};

export default Index;