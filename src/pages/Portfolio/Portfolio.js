import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio-container">
      <h1>Anmol Khandekar - Software Development Engineer</h1>
      
      <section>
        <h2>Professional Summary</h2>
        <p>
          Software Engineer with demonstrated expertise in seamless frontend and backend integration.
          With over 5+ years of experience working in multiple domains such as Health Care, E-commerce, and Influencer Marketing, 
          my skills span a diverse tech stack, delivering impactful features, such as enabling content sharing and 
          crafting real-time analytics visualizations, contributing significantly to project success and user satisfaction.
        </p>
      </section>

      <section>
        <h2>Employment History</h2>
        <ul>
          <li>
            <h3>Software Development Engineer, AWS</h3>
            <p>May 2024 - Present, Seattle, WA</p>
            <p>
              - Automated the updating of stack policies via AWS CDK, saving approximately 1.5 days of development work to 5 minutes.<br />
              - Deployed Notification services to the ADC region, requiring updates to core logic to condition out unsupported regional features.<br />
              - Collaborated with multiple teams to secure approval for sub-domain usage and enhance domain authentication, ensuring SPF alignment.<br />
              - Involved in reviewing the process of "Buy with AWS" feature which was being coded in React.js.
            </p>
          </li>
          <li>
            <h3>Software Engineer, Linqia</h3>
            <p>Sep 2021 - Mar 2024, San Francisco, CA</p>
            <p>
              - Led the transition of frontend business logic to a Node server, enhancing system performance and reducing load times.<br />
              - Enhanced search precision in Frontend and Node.js, achieving a 60% reduction in latency through Node.js optimization.<br />
              - Developed Python CRUD endpoints using the Bottle framework, improving workflow processes and system responsiveness.<br />
              - Integrated the Python backend server with NodeJS for streamlined server-side operations.<br />
              - Built NodeJS and Express API endpoints for pagination, sorting, and filtering, optimizing data management.
            </p>
          </li>
          <li>
            <h3>Software Developer, Egen Solution</h3>
            <p>Mar 2019 - Sep 2021, Chicago, IL</p>
            <p>
              - Worked on cart, checkout, auto-reorder, and order confirmation pages, creating new components using React, Handlebars, jQuery, and vanilla Javascript.<br />
              - Utilized Sauce Labs for testing and optimization to achieve consistent cross-platform performance, ensuring consistent functionality and user experience.<br />
              - Contributed to UI design and implementation for the ordering system using React, enhancing user interface efficiency and responsiveness.
            </p>
          </li>
        </ul>
      </section>

      <section>
        <h2>Education</h2>
        <p>
          <strong>Master of Science - Computer Science</strong><br />
          Texas A&M University - Kingsville, May 2018<br />
          GPA: 3.9
        </p>
      </section>

      <section>
        <h2>Skills</h2>
        <ul>
          <li>ReactJS, VueJS, TypeScript, JavaScript, jQuery, Storybook, D3, Chart.js</li>
          <li>Node.js, Express, Next.js, Bottle, Python, GraphQL</li>
          <li>PostgreSQL, MySQL, MongoDB</li>
          <li>Jest, Mocha, Chai</li>
          <li>Docker, Kubernetes, AWS, Agile</li>
        </ul>
      </section>

      <section className="contact-info">
        <h2>Contact Information</h2>
        <p>
          Seattle, US, 98109<br />
          Phone: 646-520-8122<br />
          Email: anmol.khandekar92@gmail.com<br />
          LinkedIn: <a href="https://linkedin.com/in/anmol09k" target="_blank" rel="noopener noreferrer">linkedin.com/in/anmol09k</a>
        </p>
      </section>
    </div>
  );
}

export default Portfolio;