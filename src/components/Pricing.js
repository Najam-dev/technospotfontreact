import React from 'react'
import coursesData from '../data/pricing-data.json';


const Pricing = () => {
  // const [courses, setCourses] = useState([]);

  // useEffect(() => {
  //   fetch('../data/pricing-data.json')
  //     .then(response => response.json())
  //     .then(data => setCourses(data.courses))
  //     .catch(error => console.log(error));
  // }, []);

  return (
    <div>
      {/* ======= Pricing Section ======= */}
      <section id="pricing" className="pricing">
        <div className="container">
          <div className="section-title">
            <h2>Courses Offered</h2>
            <p>
              Whether you are looking to enhance your skills in 3D development, web development, data sciences, Quran classes, or spoken English, Techno Spot has the right course for you. We are confident that our courses will provide you with the skills and knowledge you need to succeed in your career.
            </p>
          </div>
          <div className="row">{console.log(coursesData)}
          {coursesData.courses.map(course => (
            <div className="col-lg-4 col-md-6" key={course.id}>
              <div className="box">
                {/* <div className={course.discount === ("Coming Soon") ? "coming-strip" : "discount-strip"}>{course.discount}</div> */}
                <div className={course.discount.toLowerCase() === "coming soon" ? "coming-strip" : "discount-strip"}>{course.discount}</div>

                <h3 className="courses-title">{course['course-title']}</h3>
                <h4><sup>Rs.</sup>{course.price.new}<span> / month</span></h4>
                <b>Price: <del>{course.price.old}</del></b>
                <ul>
                  {course.features.map(feature => (
                    <li key={feature}><i className="ri-check-double-line orange" />{feature}</li>
                  ))}
                </ul>
                <div className="btn-wrap">
                  <a href="#" className="btn-buy">Enroll Now</a>
                </div>
              </div>
            </div>
          ))}
            
            {/* <div class="col-lg-4 col-md-6 mt-4 mt-md-0">
              <div class="box recommended">
                <span class="recommended-badge">Recommended</span>
                <h3>Business</h3>
                <h4><sup>$</sup>19<span> / month</span></h4>
                <ul>
                  <li>Aida dere</li>
                  <li>Nec feugiat nisl</li>
                  <li>Nulla at volutpat dola</li>
                  <li>Pharetra massa</li>
                  <li class="na">Massa ultricies mi</li>
                </ul>
                <div class="btn-wrap">
                  <a href="#" class="btn-buy">Buy Now</a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* End Pricing Section */}
    </div>
  )
}

export default Pricing
