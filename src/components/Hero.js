import React from 'react'

const Hero = () => {
  return (
    <div>
      {/* ======= Hero Section ======= */}
      <section id="hero" className="d-flex flex-column justify-content-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <h1>Techno Spot</h1>
              <h2>Making Success Easier</h2>
              <h2>
                <div>
                  {/* <b>{<b>collaboration</b>} ? <span> "growth" : "no growth"</span></b> */}
                  <b>Connect, Collaborate, Grow.</b>
                </div>
              </h2>
              <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="glightbox play-btn mb-4" />
            </div>
          </div>
        </div>
      </section>
      {/* End Hero */}
    </div>
  )
}

export default Hero
