import { Mail, Linkedin, Github, Phone, MapPin, ExternalLink, ChevronDown, Download } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Design System: Minimalist Technical Elegance
 * Dark charcoal background with electric cyan accents
 * Swiss Modernism meets Brutalism
 * Asymmetric layout with generous whitespace
 */

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Add smooth scrolling to html element
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="text-lg font-bold tracking-tight">OTHMAN TRIGUI</div>
          <div className="flex items-center gap-8">
            <a href="#experience" className="text-sm hover-accent">Experience</a>
            <a href="#projects" className="text-sm hover-accent">Projects</a>
            <a href="#skills" className="text-sm hover-accent">Skills</a>
            <a href="#contact" className="text-sm hover-accent">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="fade-in" style={{ animationDelay: "0s" }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="accent-line"></div>
                <span className="text-xs tracking-widest text-muted-foreground uppercase">Data & AI Engineer</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Othman Trigui
              </h1>

              <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
                Designing intelligent systems and data pipelines that transform complex problems into practical, high-performance solutions. Specialized in machine learning deployment and real-time data processing.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 mb-12">
                <a href="/othman_trigui_cv_en.pdf" download className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-all duration-300 border border-accent px-4 py-2 hover:bg-accent/10">
                  <Download size={16} />
                  <span className="text-sm font-medium">Download CV</span>
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-all duration-300">
                  <span className="text-sm font-medium">Get in touch</span>
                  <ExternalLink size={16} />
                </a>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-accent" />
                  <a href="mailto:othytrigui@gmail.com" className="hover:text-foreground transition-colors">othytrigui@gmail.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-accent" />
                  <span>(+212) 690391318</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-accent" />
                  <span>Rabat, Morocco</span>
                </div>
              </div>
            </div>

            {/* Right: Accent Element */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-64 h-64 border border-border/50">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent"></div>
                <div className="absolute top-4 right-4 w-12 h-12 border border-accent/30"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border border-accent/30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"></div>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16">Experience</h2>

          <div className="space-y-12">
            {/* Current Role */}
            <div className="fade-in border-l-2 border-accent pl-8 pb-8" style={{ animationDelay: "0.1s" }}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-3">
                <h3 className="text-xl font-semibold">Systems & Data Engineer</h3>
                <span className="text-sm text-accent">09/2025 – Present</span>
              </div>
              <p className="text-muted-foreground mb-4">Netopia Solutions, Rabat</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Installed and configured a SonarQube server to centralize code quality analysis</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span><span className="font-semibold">DPP Project (Dossier Patient Partagé):</span> Developed a Spark Structured Streaming pipeline from Kafka for near real-time ingestion and transformation of JSON data from FSE and hospital information systems, storing it in a structured format in HBase using Scala</span>
                </li>
                <li className="flex gap-3 ml-6">
                  <span className="text-accent">◦</span>
                  <span>Designed a Spark Structured Streaming pipeline that reads medical report file paths from Kafka, extracts their content from MinIO, and stores them in Ozone for distributed file management</span>
                </li>
                <li className="flex gap-3 ml-6">
                  <span className="text-accent">◦</span>
                  <span>Performed mapping and indexing of HBase tables in Phoenix to enable optimized SQL access and queries on the data</span>
                </li>
                <li className="flex gap-3 ml-6">
                  <span className="text-accent">◦</span>
                  <span>Implemented an automated NiFi flow to back up raw data from Kafka into a partitioned HDFS, ensuring traceability and storage resilience</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span><span className="font-semibold">FSE Project (Feuille de soins électronique):</span> Linked the project's DevOps repositories to the SonarQube server and exposed the analysis results on a Grafana dashboard using a Python scraper and the SonarQube API</span>
                </li>
              </ul>
            </div>

            {/* Previous Role 1 */}
            <div className="fade-in border-l-2 border-border pl-8 pb-8" style={{ animationDelay: "0.2s" }}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-3">
                <h3 className="text-xl font-semibold">Data & DevOps Engineer Intern</h3>
                <span className="text-sm text-muted-foreground">02/2025 – 08/2025</span>
              </div>
              <p className="text-muted-foreground mb-4">Netopia Solutions, Rabat</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Developed a Cyber Threat Intelligence platform implementing 360° monitoring with modules for brand surveillance, VIP identity protection, and image monitoring of companies and public figures, leveraging real-time data from social media, news, and the dark web</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Built, deployed, and automated the solution through a complete DevOps pipeline (Azure Pipelines, Repos) with Redis queuing and browser automation</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Collaborated within a Scrum team, contributing to architecture design, backend development, and CI/CD deployment in 2-week sprints</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>FSE Project (Feuille de soins électronique): Migrated an Oracle database from a Windows machine to a Linux VM, including environment setup, service configuration, and data transfer</span>
                </li>
              </ul>
            </div>

            {/* Previous Role 2 */}
            <div className="fade-in border-l-2 border-border pl-8 pb-8" style={{ animationDelay: "0.3s" }}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-3">
                <h3 className="text-xl font-semibold">AI Engineer Intern</h3>
                <span className="text-sm text-muted-foreground">07/2024 – 09/2024</span>
              </div>
              <p className="text-muted-foreground mb-4">Netopia Solutions, Rabat</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Implemented and evaluated transcription and diarization models (Whisper, AssemblyAI, Pyannote) to accurately transcribe and distinguish between speakers in multilingual audio recordings</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Utilized models like BART and GPT-3.5 for summarizing interview transcripts, optimizing the interview analysis process</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Utilized GPT-3.5 to generate tailored interview questions and technical tests based on job descriptions and candidate profiles</span>
                </li>
              </ul>
            </div>

            {/* Previous Role 3 */}
            <div className="fade-in border-l-2 border-border pl-8 pb-8" style={{ animationDelay: "0.4s" }}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-3">
                <h3 className="text-xl font-semibold">Data Scientist Intern</h3>
                <span className="text-sm text-muted-foreground">04/2023 – 06/2023</span>
              </div>
              <p className="text-muted-foreground mb-4">ONEE - BE, Casablanca</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Built machine learning models to classify, detect and extract desired information from national ID cards</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Used Azure services (Blob Storage, ML Studio) to extract the data and to train the models</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Developed a web application using Flask to test the models</span>
                </li>
              </ul>
            </div>

            {/* Previous Role 4 */}
            <div className="fade-in border-l-2 border-border pl-8" style={{ animationDelay: "0.5s" }}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-3">
                <h3 className="text-xl font-semibold">Web Development Intern</h3>
                <span className="text-sm text-muted-foreground">04/2022 – 06/2022</span>
              </div>
              <p className="text-muted-foreground mb-4">Société Briqueterie Bati Chaouia, Berrechid</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Redesigned and rebuilt the company's official website from scratch using PHP, HTML, CSS, JavaScript, and MySQL</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Built admin panel allowing administrators to easily add, edit, and remove products directly on the website without technical knowledge</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Designed the website to be fully responsive, secure, and optimized for a smooth user experience across devices</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"></div>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16">Notable Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="fade-in border border-border p-8 hover:border-accent/50 transition-colors duration-300" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-xl font-semibold">Zero Chômage</h3>
                <a href="#" className="text-accent hover:text-accent/80 transition-colors" title="Project link">
                  <ExternalLink size={18} />
                </a>
              </div>
              <p className="text-sm text-muted-foreground mb-4">A Comprehensive Job Search Platform</p>
              <p className="text-xs text-muted-foreground mb-4">Designed and developed a full-stack job search platform, streamlining connections between recruiters and candidates. Implemented user functionalities for both recruiter and candidate profiles, enabling efficient job posting, application submission, and CV sharing. Enhanced the platform by integrating an AI-powered job recommendation system and CV parsing for candidates, improving job matching accuracy and application efficiency.</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded">PHP</span>
                <span className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded">Python</span>
                <span className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded">HTML5</span>
                <span className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded">CSS3</span>
                <span className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded">JavaScript</span>
                <span className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded">jQuery</span>
                <span className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded">MySQL</span>
                <span className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded">Flask</span>
                <span className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded">Scikit-learn</span>
                <span className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded">Pandas</span>
                <span className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded">NLTK</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="fade-in border border-border p-8 hover:border-accent/50 transition-colors duration-300" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-xl font-semibold">Attendance & Mask Detection</h3>
                <a href="#" className="text-accent hover:text-accent/80 transition-colors" title="Project link">
                  <ExternalLink size={18} />
                </a>
              </div>
              <p className="text-sm text-muted-foreground mb-4">App with Location Tracking</p>
              <p className="text-xs text-muted-foreground mb-4">Provided a comprehensive solution for managing student attendance, real-time mask detection, and location tracking. Developed a Streamlit app for student attendance and real-time mask detection using computer vision techniques. Implemented data visualization and automated email notifications for detailed attendance and mask usage reports. Integrated secure login functionality and location tracking to enhance monitoring and reporting accuracy.</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded">Python</span>
                <span className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded">Streamlit</span>
                <span className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded">OpenCV</span>
                <span className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded">TensorFlow</span>
                <span className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded">Firebase</span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="fade-in border border-border p-8 hover:border-accent/50 transition-colors duration-300" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-xl font-semibold">Obesity Level Prediction</h3>
                <a href="https://github.com/othytrigui/Obesity-level-prediction" className="text-accent hover:text-accent/80 transition-colors" title="Project link">
                  <ExternalLink size={18} />
                </a>
              </div>
              <p className="text-sm text-muted-foreground mb-4">Predict obesity level based on eating habits and physical condition using machine learning</p>
              <p className="text-xs text-muted-foreground mb-4">Mastered data preparation and model-ready datasets by tackling missing values and encoding categorical features. Built and optimized predictive models using diverse machine learning approaches and meticulous hyperparameter tuning. Developed a user-friendly Streamlit web app for intuitive input, robust predictions, and clear result visualization.</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded">Python</span>
                <span className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded">Matplotlib</span>
                <span className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded">Seaborn</span>
                <span className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded">GridSearchCV</span>
                <span className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded">XGBoost</span>
                <span className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded">Ensemble Learning</span>
                <span className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded">Streamlit</span>
              </div>
            </div>

            {/* Project 4 */}
            <div className="fade-in border border-border p-8 hover:border-accent/50 transition-colors duration-300" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-xl font-semibold">Online Sales Data Analysis</h3>
                <a href="https://github.com/othytrigui/Online-Sales-Data-Analysis" className="text-accent hover:text-accent/80 transition-colors" title="Project link">
                  <ExternalLink size={18} />
                </a>
              </div>
              <p className="text-sm text-muted-foreground mb-4">Understand customer behavior and segment them into different groups using the LRFM model</p>
              <p className="text-xs text-muted-foreground mb-4">Extracted valuable insights from online sales data through meticulous data cleaning, aggregation, and visualization. Executed customer segmentation using the LRFM model, enabling targeted marketing strategies and personalized customer experiences. Demonstrated proficiency in Python data analysis tools to effectively process and visualize large datasets.</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded">Python</span>
                <span className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded">Pandas</span>
                <span className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded">NumPy</span>
                <span className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded">Matplotlib</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"></div>

      {/* Education Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16">Education</h2>

          <div className="space-y-8">
            <div className="fade-in border-l-2 border-accent pl-8" style={{ animationDelay: "0.1s" }}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-2">
                <h3 className="text-lg font-semibold">Engineer's degree - Data Engineering and Artificial Intelligence</h3>
                <span className="text-sm text-accent">2023 – 2025</span>
              </div>
              <p className="text-muted-foreground">National School of Applied Sciences Safi</p>
            </div>

            <div className="fade-in border-l-2 border-border pl-8" style={{ animationDelay: "0.2s" }}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-2">
                <h3 className="text-lg font-semibold">Bachelor's degree - Infrastructure, Processing and Analysis of Big Data</h3>
                <span className="text-sm text-muted-foreground">2022 – 2023</span>
              </div>
              <p className="text-muted-foreground">Superior School of Technology Fquih Ben Saleh</p>
            </div>

            <div className="fade-in border-l-2 border-border pl-8" style={{ animationDelay: "0.3s" }}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-2">
                <h3 className="text-lg font-semibold">Two-year post-secondary [DUT] - Computer Engineering</h3>
                <span className="text-sm text-muted-foreground">2020 – 2022</span>
              </div>
              <p className="text-muted-foreground">Superior School of Technology Fquih Ben Saleh</p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"></div>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16">Technical Skills</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Programming Languages */}
            <div className="fade-in" style={{ animationDelay: "0.1s" }}>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">Programming Languages</h3>
              <p className="text-sm text-muted-foreground">Python, R, PL/SQL, JAVA, Scala</p>
            </div>

            {/* Databases & Big Data */}
            <div className="fade-in" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">Databases & Big Data</h3>
              <p className="text-sm text-muted-foreground">Cassandra, MongoDB, Redis, Oracle, SQL Server, MySQL, Spark, Hadoop, Firebase, Kafka, PostgreSQL, HBase, Ozone, Phoenix, NiFi</p>
            </div>

            {/* Machine Learning & Data Science */}
            <div className="fade-in" style={{ animationDelay: "0.3s" }}>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">Machine Learning & Data Science</h3>
              <p className="text-sm text-muted-foreground">Scikit-Learn, TensorFlow, Keras, PyTorch, Numpy, Pandas, Matplotlib, Seaborn, Plotly, OpenCV, Prompt Engineering</p>
            </div>

            {/* Web Development & Automation */}
            <div className="fade-in" style={{ animationDelay: "0.4s" }}>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">Web Development & Automation</h3>
              <p className="text-sm text-muted-foreground">Flask, Streamlit, HTML, CSS, JavaScript, Selenium, BeautifulSoup</p>
            </div>

            {/* Cloud */}
            <div className="fade-in" style={{ animationDelay: "0.5s" }}>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">Cloud</h3>
              <p className="text-sm text-muted-foreground">Azure, Cloudera, AWS, GCP</p>
            </div>

            {/* DevOps & CI/CD */}
            <div className="fade-in" style={{ animationDelay: "0.6s" }}>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">DevOps & CI/CD</h3>
              <p className="text-sm text-muted-foreground">Docker, Git, GitHub, Cloudflare, Nginx, Azure Pipelines</p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"></div>

      {/* Certifications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16">Certifications</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="https://learn.microsoft.com/api/credentials/share/en-us/OthmanTrigui/575EEED37E7D1F4?sharingId=642B61E4A1514E02" target="_blank" rel="noopener noreferrer" className="fade-in flex items-start gap-3 p-4 border border-border hover:border-accent/50 transition-colors duration-300" style={{ animationDelay: "0.1s" }}>
              <span className="text-accent">✓</span>
              <div>
                <p className="text-muted-foreground hover:text-accent transition-colors">Microsoft Certified: Azure Data Scientist Associate</p>
              </div>
            </a>

            <a href="https://www.coursera.org/account/accomplishments/specialization/MKZNZHL5QEEK" target="_blank" rel="noopener noreferrer" className="fade-in flex items-start gap-3 p-4 border border-border hover:border-accent/50 transition-colors duration-300" style={{ animationDelay: "0.2s" }}>
              <span className="text-accent">✓</span>
              <div>
                <p className="text-muted-foreground hover:text-accent transition-colors">Machine Learning Specialization - DeepLearning.AI</p>
              </div>
            </a>

            <a href="https://www.coursera.org/account/accomplishments/certificate/N5B2UGEAGEZU" target="_blank" rel="noopener noreferrer" className="fade-in flex items-start gap-3 p-4 border border-border hover:border-accent/50 transition-colors duration-300" style={{ animationDelay: "0.3s" }}>
              <span className="text-accent">✓</span>
              <div>
                <p className="text-muted-foreground hover:text-accent transition-colors">Advanced Computer Vision - DeepLearning.AI</p>
              </div>
            </a>

            <a href="https://www.coursera.org/account/accomplishments/certificate/FBRH6STXCMYQ" target="_blank" rel="noopener noreferrer" className="fade-in flex items-start gap-3 p-4 border border-border hover:border-accent/50 transition-colors duration-300" style={{ animationDelay: "0.4s" }}>
              <span className="text-accent">✓</span>
              <div>
                <p className="text-muted-foreground hover:text-accent transition-colors">Python for Data Science, AI & Development - IBM</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"></div>

      {/* Languages Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16">Languages</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="fade-in" style={{ animationDelay: "0.1s" }}>
              <h3 className="text-lg font-semibold mb-2">English</h3>
              <p className="text-sm text-muted-foreground">Full professional proficiency</p>
            </div>

            <div className="fade-in" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-lg font-semibold mb-2">French</h3>
              <p className="text-sm text-muted-foreground">B2 (TCF certified)</p>
            </div>

            <div className="fade-in" style={{ animationDelay: "0.3s" }}>
              <h3 className="text-lg font-semibold mb-2">Arabic</h3>
              <p className="text-sm text-muted-foreground">Native</p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"></div>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16">Get in Touch</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="mailto:othytrigui@gmail.com" className="fade-in group p-8 border border-border hover:border-accent/50 transition-colors duration-300" style={{ animationDelay: "0.1s" }}>
              <Mail className="mb-4 text-accent group-hover:scale-110 transition-transform duration-300" size={24} />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-sm text-muted-foreground">othytrigui@gmail.com</p>
            </a>

            <a href="https://linkedin.com/in/trigui" target="_blank" rel="noopener noreferrer" className="fade-in group p-8 border border-border hover:border-accent/50 transition-colors duration-300" style={{ animationDelay: "0.2s" }}>
              <Linkedin className="mb-4 text-accent group-hover:scale-110 transition-transform duration-300" size={24} />
              <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
              <p className="text-sm text-muted-foreground">linkedin.com/in/trigui</p>
            </a>

            <a href="https://github.com/othytrigui" target="_blank" rel="noopener noreferrer" className="fade-in group p-8 border border-border hover:border-accent/50 transition-colors duration-300" style={{ animationDelay: "0.3s" }}>
              <Github className="mb-4 text-accent group-hover:scale-110 transition-transform duration-300" size={24} />
              <h3 className="text-lg font-semibold mb-2">GitHub</h3>
              <p className="text-sm text-muted-foreground">github.com/othytrigui</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Othman Trigui. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="https://linkedin.com/in/trigui" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
            <a href="https://github.com/othytrigui" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
