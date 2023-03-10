import React, {useEffect} from 'react'

const Preloader = () => {
    useEffect(() => {
        let preloader = document.getElementById('preloader');
        console.log(preloader);
        window.addEventListener("load", () => {
          console.log('load event fired'); // check if load event is fired
          preloader.style.display = 'none';
        });
      }, []);
      
        // preloader.style.display = 'none';
        // if (preloader) {
        //     window.addEventListener("load", () => {
        //     preloader.remove();
        //     });
        //    }
  return (
    <div>
      <div id="preloader">
          {/* <div class="loader-logo"></div> */}
        </div>
        <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
          <i className="bi bi-arrow-up-short" />
        </a>
    </div>
  )
}

export default Preloader
