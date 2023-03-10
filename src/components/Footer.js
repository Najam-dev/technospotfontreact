import React from 'react'

const Footer = () => {
  return (
    <div>
      {/* ======= Footer ======= */}
      <footer id="footer">
          <div className="container">
            <h3><span className="orange">Techno Spot</span></h3>
            <p>
              Making Success Easier
            </p>
            <div className="social-links">
              <a href="https://twitter.com/TheTechnoSpotCo" className="twitter" target="_blank"><i className="bx bxl-twitter" /></a>
              <a href="https://www.facebook.com/Official.TechnoSpot/" className="facebook" target="_blank"><i className="bx bxl-facebook" /></a>
              <a href="https://www.instagram.com/official.technospot/" className="instagram" target="_blank"><i className="bx bxl-instagram" /></a>
              <a href="https://www.linkedin.com/company/official-technospot/" className="linkedin" target="_blank"><i className="bx bxl-linkedin" /></a>
            </div>
            <div className="copyright">
              © Copyright <strong><span>Techno Spot</span></strong>. All Rights Reserved
            </div>
            <div className="credits">
              {/* All the links in the footer should remain intact. */}
              {/* You can delete the links only if you purchased the pro version. */}
              {/* Licensing information: https://bootstrapmade.com/license/ */}
              {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/knight-simple-one-page-bootstrap-template/ */}
            </div>
          </div>
        </footer>
        {/* End Footer */}
    </div>
  )
}

export default Footer
