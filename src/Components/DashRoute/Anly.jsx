import React from 'react';
import Social from '../Social/Social';
import Employees from '../Employees/Employees';
import Campaigns from '../Campaigns/Campaigns'; // Import Campaigns component
import Autodaterange from '../Autodaterange/Autodaterange'; // Import Autodaterange component
import Leads from '../Leads/Leads'; // Import Leads component
import Allbrand from '../Allbrand/Allbrand'; // Import Allbrand component
import Activestatus from '../Activestatus/Activestatus'; // Import Activestatus component
import Payments from '../Payments/Payments'; // Import Payments component

const Anly = () => {
  return (
    <div className='side-card'>
      <div>
        <div className='container-fluid cards-dashboard-container mb-5 p-0'>
          <div className='row m-0'>
            <div className='col-lg-5 col-md-12 col-sm-12 p-0 mt-2 me-0 mb-2 text-light'><Social/></div>
            <div className='row col-lg-7'>
              <div className='col-lg-4 col-md-4 col-sm-12 p-0 text-light'>
                <div className='row m-0 card2-row1-container'><Employees /></div>
              </div>
              <div className='col-lg-8 col-md-8 col-sm-12 text-light'>
                <div className='row m-0 card2-row1-container mt-2'><Campaigns /></div>
              </div>
              <div className='row m-0'>
                <div className='col-lg-8 col-md-12 col-sm-12 text-light'><Autodaterange/></div>
                <div className='col-lg-8 col-md-12 col-sm-12 text-light'><Leads /></div>
              </div>
            </div>
          </div>
          <div className='row m-0'>
            <div className='col-lg-7 col-md-12 col-sm-12 p-0 mt-2 me-0 mb-2 text-light'><Allbrand /></div>
            <div className='col-lg-5 col-md-12 col-sm-12 p-0 mt-2 me-0 mb-2 text-light'>
              <div className='row m-0'><Activestatus /></div>
              <div className='row col-md-12 col-sm-6 text-light'><Payments /></div>
            </div>
          </div>
          <div className='row'>
            <div className='1'></div>
            <div className='2'></div>
            <div className='2'></div>
            <div className='row'>
              <div className='1'></div>
              <div className='2'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Anly;
