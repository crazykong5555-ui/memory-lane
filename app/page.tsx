
const events = [
  {
    year: "1970",
    category: "PERSONAL LIFE",
    title: "The Beginning of My Life",
    description:
      "I was born in Bogotá, Colombia. My life journey was beginning, and I was growing up with my family.",
    icon: "👶",
  },
  {
    year: "1980",
    category: "EDUCATION",
    title: "Primary School Graduation",
    description:
      "I graduated from primary school. I was learning the basic subjects and developing my curiosity about the world.",
    icon: "🎓",
  },
  {
    year: "1984",
    category: "TECHNOLOGY",
    title: "My First ATARI BASIC Program",
    description:
      "I wrote my first computer program using ATARI BASIC. I was discovering the fascinating world of computer programming.",
    icon: "💻",
  },
  {
    year: "1988",
    category: "PERSONAL LIFE",
    title: "Military Service",
    description:
      "I completed my mandatory military service. I was learning discipline, responsibility, and teamwork.",
    icon: "🎖️",
  },
  {
    year: "1994",
    category: "EDUCATION",
    title: "High School Graduation",
    description:
      "I graduated from high school. I was preparing for a new stage in my educational and professional life.",
    icon: "📚",
  },
  {
    year: "1997",
    category: "EDUCATION & WORK",
    title: "Electronics Technician and Siemens",
    description:
      "I graduated as a Professional Technician in Electronics and started working at Siemens S.A. I was developing my technical skills and gaining professional experience.",
    icon: "⚡",
  },
  {
    year: "1998",
    category: "PROFESSIONAL EXPERIENCE",
    title: "Technical Manager at Wackenhut",
    description:
      "I worked as a Technical Manager at Wackenhut. I was supervising technical activities and solving equipment-related problems.",
    icon: "🔧",
  },
  {
    year: "2001",
    category: "TECHNOLOGY",
    title: "My First AMD64 Computer",
    description:
      "I assembled my first AMD64-based computer. I was exploring computer hardware and learning more about computer architecture.",
    icon: "🖥️",
  },
  {
    year: "2004",
    category: "PROFESSIONAL EXPERIENCE",
    title: "Working at GM Colmotores",
    description:
      "I worked at GM Colmotores. I was expanding my professional knowledge and improving my technical experience.",
    icon: "🚗",
  },
  {
    year: "2006",
    category: "EDUCATION",
    title: "Industrial Electronics Technologist",
    description:
      "I graduated as an Industrial Electronics Technologist. I was strengthening my knowledge of industrial systems and electronics.",
    icon: "🎓",
  },
  {
    year: "2007",
    category: "PROFESSIONAL EXPERIENCE",
    title: "Working at Gold Electronics",
    description:
      "I worked at Gold Electronics. I was applying my electronics knowledge to professional technical activities.",
    icon: "🔌",
  },
  {
    year: "2009",
    category: "PROFESSIONAL EXPERIENCE",
    title: "Working at Net Services",
    description:
      "I worked at Net Services. I was gaining experience in technology and technical services.",
    icon: "🌐",
  },
  {
    year: "2010",
    category: "INDUSTRIAL TECHNOLOGY",
    title: "Industrial Automation",
    description:
      "I worked in industrial automation. I was learning about automated processes, electronic systems, and industrial control.",
    icon: "⚙️",
  },
  {
    year: "2012",
    category: "PROGRAMMING",
    title: "My First C++ Program",
    description:
      "I wrote my first program in C++. I was learning object-oriented programming and exploring software development.",
    icon: "💻",
  },
  {
    year: "2014",
    category: "PROGRAMMING",
    title: "My First Java Program",
    description:
      "I wrote my first Java program. I was expanding my programming knowledge and learning a new development language.",
    icon: "☕",
  },
  {
    year: "2015",
    category: "MULTIMEDIA",
    title: "My First Adobe Flash Animation",
    description:
      "I created my first animation using Adobe Flash Player. I was experimenting with animation and multimedia technology.",
    icon: "🎬",
  },
  {
    year: "2016",
    category: "DATABASES",
    title: "My First MySQL Database",
    description:
      "I created my first MySQL database. I was learning how to organize, store, and manage information.",
    icon: "🗄️",
  },
  {
    year: "2023",
    category: "PROGRAMMING",
    title: "My First Python Program",
    description:
      "I wrote my first Python program. I was discovering a powerful programming language for automation, data analysis, and artificial intelligence.",
    icon: "🐍",
  },
  {
    year: "2026",
    category: "EDUCATION",
    title: "Software Analysis and Development",
    description:
      "I graduated as a Technologist in Software Analysis and Development at SENA. I was combining my electronics background with modern software engineering.",
    icon: "🎓",
  },
];

const futureEvent = {
  year: "2027",
  category: "CLOUD WEB DEVELOPMENT",
  title: "My First Cloud-Based Web Application",
  description:
    "I developed and deployed my first web application connected to a cloud database. I used Python, React, Next.js, and MySQL. I hosted the application on Render.com and managed the cloud database with Aiven.com. I was integrating frontend and backend technologies while learning how to deploy and manage modern cloud applications.",
  icon: "🚀☁️",
};

export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">MY PERSONAL STORY</span>

          <h1>
            Memory <span>Lane</span>
          </h1>

          <p className="hero-subtitle">
            A Journey Through My Life, Education,
            Work and Technology
          </p>

          <p className="hero-description">
            From my birth in 1970 to my dreams for 2027,
            this is the story of my personal and
            professional journey.
          </p>

          <a href="#timeline" className="hero-button">
            Explore My Journey ↓
          </a>

          <div className="hero-years">
            <div>
              <strong>1970</strong>
              <span>The Beginning</span>
            </div>
            <div>
              <strong>2026</strong>
              <span>My Achievements</span>
            </div>
            <div>
              <strong>2027</strong>
              <span>My Future</span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="introduction">
        <span className="section-label">MY STORY</span>
        <h2>Every year tells a story</h2>

        <p>
          Looking back, I can see how my life evolved.
          I was growing, studying, working, and learning
          new technologies. Every experience helped me
          become the person I am today.
        </p>
      </section>

      {/* TIMELINE */}
      <section id="timeline" className="timeline-section">
        <div className="section-heading">
          <span className="section-label">
            1970 — 2026
          </span>
          <h2>My Life Timeline</h2>
          <p>
            Important moments that shaped my life.
          </p>
        </div>

        <div className="timeline">
          {events.map((event, index) => (
            <article
              className={`timeline-item ${
                index % 2 === 0 ? "left" : "right"
              }`}
              key={event.year}
            >
              <div className="timeline-dot" />

              <div className="event-card">
                <div className="event-top">
                  <span className="event-icon">
                    {event.icon}
                  </span>
                  <span className="event-year">
                    {event.year}
                  </span>
                </div>

                <span className="event-category">
                  {event.category}
                </span>

                <h3>{event.title}</h3>

                <p>{event.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FUTURE */}
      <section className="future-section">
        <span className="section-label">
          TECHNOLOGY ACHIEVEMENTS
        </span>

        <h2>My Cloud Development Journey</h2>

        <div className="future-card">
          <div className="future-icon">
            {futureEvent.icon}
          </div>

          <span className="future-year">
            {futureEvent.year}
          </span>

          <span className="event-category">
            {futureEvent.category}
          </span>

          <h3>{futureEvent.title}</h3>

          <p>{futureEvent.description}</p>

          <div className="technology-tags">
            <span>Python</span>
            <span>React</span>
            <span>Next.js</span>
            <span>MySQL</span>
            <span>Cloud</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <h2>My journey continues...</h2>

        <p>
          The past made me who I am.
          The future inspires me to keep learning.
        </p>

        <span>
          Memory Lane © 2026 | Personal Life Journey
        </span>
      </footer>
    </main>
  );
}
