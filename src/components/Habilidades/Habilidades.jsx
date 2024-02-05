import React from 'react';

const Habilidades = () => {
    return (
        <div className='skillsContainer'>
          <div className='container py-5 my-5' id='aboutMe'>
            <div className="row d-flex justify-content-around">
            <h3>Mis Skills:</h3>
              <div className="col-12 col-md-12 d-flex flex-wrap justify-content-center mt-5 mt-md-0">
                <div className='text-center me-4'>
                  <img className='w-80' src="https://res.cloudinary.com/dcv6aut2v/image/upload/v1700316292/Porfolio/icons8-html-100_anucbf.png" alt="html" />
                  <p><strong>HTML</strong></p>
                </div>
                <div className='text-center me-5'>
                  <img className='w-100' src="https://res.cloudinary.com/dcwpf7ghu/image/upload/v1707135887/icons8-css-100_yhtjay_jhbz1t.png" alt="html" />
                  <p><strong>CSS</strong></p>
                </div>
                <div className='text-center me-5'>
                  <img className='w-100' src="https://res.cloudinary.com/dcwpf7ghu/image/upload/v1707135841/icons8-javascript-100_vdwv11_j6zj0z.png" alt="html" />
                  <p><strong>JAVASCRIPT</strong></p>
                </div>
                <div className='text-center me-5'>
                  <img className='w-100' src="https://res.cloudinary.com/dcwpf7ghu/image/upload/v1707135804/icons8-react-a-javascript-library-for-building-user-interfaces-100_kuv4ej_rmvl2r.png" alt="html" />
                  <p><strong>REACT</strong></p>
                </div>
                <div className='text-center me-5'>
                  <img className='w-100' src="https://res.cloudinary.com/dcwpf7ghu/image/upload/v1707135764/icons8-nodejs-100_brz2xm_hbbe9m.png" alt="html" />
                  <p><strong>NODE JS</strong></p>
                </div>
                <div className='text-center me-5'>
                  <img className='w-100' src="https://res.cloudinary.com/dcwpf7ghu/image/upload/v1707135724/icons8-expresar-js-100_xolxw1_cgk2fl.png" alt="html" />
                  <p><strong>EXPRESS JS</strong></p>
                </div>
                <div className='text-center me-5'>
                  <img className='w-100' src="https://res.cloudinary.com/dcwpf7ghu/image/upload/v1707135665/icons8-mongodb-100_px3q3f_wx84fd.png" alt="html" />
                  <p><strong>MONGODB</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

export default Habilidades;
