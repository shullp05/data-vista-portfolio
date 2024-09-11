import { useEffect } from 'react';
import { useTheme } from '../components/ThemeProvider';
import Footer from '../components/Footer';
import ResumeSection from '../components/ResumeSection';
import { Button } from "@/components/ui/button";
import anime from 'animejs/lib/anime.es.js';

const About = () => {
  const { isDarkMode } = useTheme();

  useEffect(() => {
    // Animate sections on page load
    anime({
      targets: '.resume-section',
      opacity: [0, 1],
      translateY: [50, 0],
      delay: anime.stagger(200),
      easing: 'easeOutQuad',
      duration: 800
    });
  }, []);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <main className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold mb-8 text-center">About Me</h1>
        
        <ResumeSection title="Professional Summary" className="resume-section">
          <p className="text-lg">
            As a seasoned pharmacist turned Business Intelligence (BI) specialist, I bring a unique blend of clinical expertise and data-driven insights to the healthcare industry. My background in pharmacy informs my approach to BI, allowing me to create actionable insights that drive meaningful healthcare outcomes. With a proven track record in team leadership and a deep understanding of healthcare KPIs, I excel at translating complex data into clear, impactful visualizations that inform strategic decision-making.
          </p>
        </ResumeSection>

        <ResumeSection title="Experience" className="resume-section">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">Senior BI Analyst - HealthTech Solutions</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">2019 - Present</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Lead a team of 5 data analysts in developing comprehensive BI solutions for healthcare providers.</li>
                <li>Designed and implemented a real-time dashboard that improved medication adherence rates by 25%.</li>
                <li>Spearheaded the integration of predictive analytics models, resulting in a 15% reduction in hospital readmissions.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Clinical Data Specialist - PharmaCare Inc.</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">2016 - 2019</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Developed and maintained a centralized data warehouse for clinical trial data, improving data accessibility by 40%.</li>
                <li>Created interactive Tableau dashboards to visualize drug efficacy and safety profiles, facilitating faster decision-making in clinical trials.</li>
                <li>Collaborated with cross-functional teams to optimize data collection processes, reducing data entry errors by 30%.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Staff Pharmacist - Community Health Network</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">2013 - 2016</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Managed and analyzed pharmacy inventory data, implementing a new system that reduced waste by 20%.</li>
                <li>Initiated and led a patient education program that improved medication adherence rates by 35%.</li>
                <li>Collaborated with IT department to streamline electronic health record systems, enhancing interdepartmental communication.</li>
              </ul>
            </div>
          </div>
        </ResumeSection>

        <ResumeSection title="Skills" className="resume-section">
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: "Data Visualization", level: 90 },
              { name: "SQL", level: 85 },
              { name: "Power BI", level: 95 },
              { name: "Tableau", level: 90 },
              { name: "Python", level: 80 },
              { name: "R", level: 75 },
              { name: "Healthcare Analytics", level: 95 },
              { name: "Pharmacotherapy", level: 90 },
              { name: "Clinical Data Analysis", level: 85 },
              { name: "Team Leadership", level: 80 }
            ].map((skill) => (
              <div key={skill.name} className="skill-item">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <span className="text-sm font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div 
                    className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </ResumeSection>

        <ResumeSection title="Education" className="resume-section">
          <div>
            <h3 className="text-xl font-semibold">Doctor of Pharmacy (Pharm.D.)</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">University of South Carolina</p>
            <p className="mt-1">GPA: 3.78</p>
          </div>
        </ResumeSection>

        <div className="mt-12 text-center">
          <Button className="animate-pulse">
            Download Full Resume
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;