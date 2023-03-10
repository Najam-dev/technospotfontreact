import React from 'react'

const Count = () => {
  return (
    <div>
      {/* ======= Counts Section ======= */}
      <section id="counts" className="counts">
        <div className="container">
          <div className="text-center title">
            <h3>What we have achieved so far</h3>
            <p>
              We are passionate about delivering exceptional projects and exceeding our clients' expectations.
            </p>
          </div>
          <div className="row counters position-relative">
            <div className="col-lg-3 col-6 text-center">
              <span className='orange'>30</span>
              <span data-purecounter-start={0} data-purecounter-end={30} data-purecounter-duration={1} className="purecounter orange" />
              <p>Clients</p>
            </div>
            <div className="col-lg-3 col-6 text-center">
              <span className='orange'>50</span>
              <span data-purecounter-start={0} data-purecounter-end={50} data-purecounter-duration={1} className="purecounter orange" />
              <p>Projects</p>
            </div>
            <div className="col-lg-3 col-6 text-center">
              <span className='orange'>1460</span>
              <span data-purecounter-start={0} data-purecounter-end={1463} data-purecounter-duration={1} className="purecounter orange" />
              <p>Hours Of Support</p>
            </div>
            <div className="col-lg-3 col-6 text-center">
              <span className='orange'>10</span>
              <span data-purecounter-start={0} data-purecounter-end={10} data-purecounter-duration={1} className="purecounter orange" />
              <p>Hard Workers</p>
            </div>
          </div>
        </div>
      </section>
      {/* End Counts Section */}
    </div>
  )
}

export default Count
