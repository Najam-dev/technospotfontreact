import React from 'react'

const About = () => {
  return (
    <div>
      {/* ======= About Us Section ======= */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-title">
            <h2>About Us</h2>
            <div>
              <p>
                Techno Spot is a versatile technology company that offers a diverse
                range of services, including
                <span className="orange">
                  Game Development &amp; 3D Model Designing, Full Stack Web
                  Development, Data Science, Interior Designing and Android App
                  Development </span>. We are a team of passionate and skilled professionals who are
                dedicated to providing innovative and creative solutions to our
                clients.
              </p>
            </div>
          </div>
          <div className="row content">
            <div className="col-lg-6">
              <p />
              <div className="wow fadeInLeft">
                <ul>
                  <li><i className="ri-check-double-line" />Career Counseling</li>
                  <li>
                    <i className="ri-check-double-line" />Internship Opportunities
                  </li>
                  <li>
                    <i className="ri-check-double-line" />Job Placement Services
                  </li>
                  <li>
                    <i className="ri-check-double-line" />Friendly Environment
                  </li>
                  <li>
                    <i className="ri-check-double-line" />Soft Skills Training
                  </li>
                  <li>
                    <i className="ri-check-double-line" />Professional Development Training
                  </li>
                </ul>
              </div>
            </div>
            <div style={{textAlign: 'justify'}} className="col-lg-6 pt-4 pt-lg-0">
              <p className="wow fadeInRight">
                Techno Spot provides a friendly learning environment with industrial skilled trainers who focus on task-based teaching. Students are encouraged to learn by doing and work on real-world projects to gain practical skills. The trainers use their industry experience to guide and mentor students, helping them to build a strong foundation in the latest technologies and prepare for successful careers in tech.
              </p>
              <a href="#pricing" className="btn-learn-more">Courses</a>
              <a href="#services" className="btn-learn-more" style={{marginLeft: '20px'}}>Services</a>
            </div>
          </div>
        </div>
      </section>
      {/* End About Us Section */}
    </div>
  )
}

export default About
