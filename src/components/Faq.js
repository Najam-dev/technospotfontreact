import React from 'react'

const Faq = () => {
  return (
    <div>
      {/* ======= Faq Section ======= */}
      <section id="faq" className="faq">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch order-2 order-lg-1">
              <div className="content">
                <h3>Frequently Asked <strong>Questions</strong></h3>
                <p>These are some frequently asked questions by people.</p>
              </div>
              <div className="accordion-list">
                <ul>
                  <li>
                    <a data-bs-toggle="collapse" className="collapse" data-bs-target="#accordion-list-1">Are training online or onsite?
                      <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                    <div id="accordion-list-1" className="collapse show" data-bs-parent=".accordion-list">
                      <p>
                        All trainings are Onsite offered at Techno Spot
                        workspace except Quran classes that are online.
                      </p>
                    </div>
                  </li>
                  <li>
                    <a data-bs-toggle="collapse" data-bs-target="#accordion-list-2" className="collapsed">Do we offer internship?
                      <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                    <div id="accordion-list-2" className="collapse" data-bs-parent=".accordion-list">
                      <p>
                        Yes we do provide internships after successful
                        trainings.
                      </p>
                    </div>
                  </li>
                  <li>
                    <a data-bs-toggle="collapse" data-bs-target="#accordion-list-3" className="collapsed">Do we offer installments for fee?
                      <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                    <div id="accordion-list-3" className="collapse" data-bs-parent=".accordion-list">
                      <p>
                        Yes, we have flexible fee structure for students where
                        they can pay on installments too.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img" style={{backgroundImage: 'url("assets/img/faq.jpg")'}}>
              &nbsp;
            </div>
          </div>
        </div>
      </section>
      {/* End Faq Section */}
    </div>
  )
}

export default Faq
