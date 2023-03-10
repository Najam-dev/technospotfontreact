import React from 'react'

const Clients = () => {
  return (
    <div>
      {/* ======= Clients Section ======= */}
      <section id="clients" className="clients">
        <div className="container wow slideInUp">
          <div className="row no-gutters clients-wrap clearfix wow fadeInUp">
            <div className="col-lg-3 col-md-4 col-xs-6">
              <div className="client-logo">
                <img src="assets/img/flutter.png" className="img-fluid height-max" alt="" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-xs-6">
              <div className="client-logo">
                <img src="assets/img/blender.png" className="img-fluid height-max" alt="" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-xs-6">
              <div className="client-logo">
                <img src="assets/img/mern.png" className="img-fluid  height-max" alt="" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-xs-6">
              <div className="client-logo">
                <img src="assets/img/adobe1.png" className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-xs-6">
              <div className="client-logo">
                <img src="assets/img/adobe2.png" className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-xs-6">
              <div className="client-logo">
                <img src="assets/img/unity.png" className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-xs-6">
              <div className="client-logo">
                <img src="assets/img/php.png" className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-xs-6">
              <div className="client-logo">
                <img src="assets/img/data-science.png" className="img-fluid  height-max" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Clients Section */}
    </div>
  )
}

export default Clients
