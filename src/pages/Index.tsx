import { Header } from "@/components/Header";
import { useState } from "react";

const Index = () => {
  const [showChallenge, setShowChallenge] = useState(false);
  const [userSolution, setUserSolution] = useState("");
  const [showSolution, setShowSolution] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

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
            <button 
              onClick={() => {
                setShowChallenge(!showChallenge);
                setHasSubmitted(false);
                setShowSolution(false);
                setUserSolution("");
              }}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
            >
              ➡️ {showChallenge ? 'Hide Challenge' : 'Start Daily SQL Challenge'}
            </button>
            <p className="text-muted-foreground mt-4">
              Let's learn, grow, and analyze together! Happy querying! 🎉
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
                    onClick={() => setHasSubmitted(true)}
                    disabled={!userSolution.trim()}
                    className="bg-primary hover:bg-primary/90 disabled:bg-muted disabled:text-muted-foreground text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                  >
                    Submit Solution
                  </button>
                  
                  <button 
                    onClick={() => setShowSolution(!showSolution)}
                    disabled={!hasSubmitted}
                    className="bg-secondary hover:bg-secondary/90 disabled:bg-muted disabled:text-muted-foreground text-secondary-foreground px-6 py-2 rounded-lg font-semibold transition-colors"
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