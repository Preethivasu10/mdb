import React from 'react'
import './payments.css';
import Card from 'react-bootstrap/Card';
import { ImFacebook2 } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";

import { FaCameraRetro } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaArrowUp } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';


const Payments = () => {    
  return (
     <>
      <div className='container-fluid34'>
        <div className='row'>
          <div className='col-lg-8 col-md-6 col-sm-12  custom-col-3-5 newpay'>
            <Card className='full_payment_container1'>
              <Card.Body>
                <div className="cardContainer_payment2">
                 <div className='txt_payment2'>Payment Details</div>

                  <div className="row">
                    <div className="score2 col-lg-4 ">
                      <div className='title2'>Ad Spend</div>
                      <div className="individualScore2">
                        <div className="countScore22">
                          <BsCurrencyDollar className='icon_dollar_ads2' />65.37
                        </div>
                        <div className="scoreData2">
                        <FaArrowUp className='icon_arrow2 mb-1' />
                        <div className='new92 pt-1'>125%</div>
                        </div>
                        <div className="description2"> vs previous 30 days </div>
                      </div>
                    </div>

                    <div className="score2  col-lg-4">
                      <div className='title2'>Cost Per Thousand(CPT)</div>
                      <div className="individualScore2">
                        <div className="countScore22">
                         <BsCurrencyDollar className='icon_dollar_ads2' />65.37
                        </div>
                        <div className="scoreData2">
                        <FaArrowDown className='icon_arrow2 mb-1' />
                        <div className='new92 pt-1'>170%</div>
                        </div>
                        <div className="description2"> vs previous 30 days </div>
                      </div>
                    </div>

                    <div className="score2 col-lg-4">
                      <div className='title2'>Cost Per Click(CPC)</div>
                      <div className="individualScore2">
                        <div className="countScore22">
                          <BsCurrencyDollar className='icon_dollar_ads2'/>15.45
                        </div>
                        <div className="scoreData2">
                          <FaArrowUp className='icon_arrow2 mb-1' />
                          <div className='new92 pt-1'>10%</div>
                        </div>
                        <div className="description2"> vs previous 30 days </div>
                      </div>
                    </div>
                    
                  </div>
                  
                </div>
              </Card.Body> 
            </Card>
          </div>


          <div className='col-lg-4 col-md-2 col-sm-12  custom-col-1-5'>
            <Card style={{ marginLeft:"-5px"}} className='facebookcard2'>
            <Card.Body style={{ fontSize: "8px"}} >
      
              <Card.Text id="facebook-text2">
                <div className="facebook2">
                  <div className='facebook_container2'>
                    <ImFacebook2 id="facebook-icon2" style={{ marginTop:"7px"}} />
                    <div className='facebook_container_details2'>
                      <small className='ads_spent_txt2'>This Month</small>
                      <div class="container_progress_payments2"> 
                        <div class="skill facebook_percentage2"></div> 
                      </div> 
                      <div className="percentage_subtext2">
                        <small className='ads_percentage2'style={{ color:"lightgreen"}}>30%</small>
                        <small className='ads_week_subtext2'>This week</small>
                      </div>
              
                    </div>
                  </div>
                  <div className='facebook_container2'>
                    <BsTwitterX id="facebook-icon2"  style={{ marginTop:"20px"}} />
                    <div className='facebook_container_details2  'style={{ marginTop:"15px"}}>
                      <small className='ads_spent_txt2'style={{ marginTop:"30px"}}>This Month</small>
                      <div class="container_progress_payments2"> 
                        <div class="skill twitter_percentage2"></div> 
                      </div> 
                      <div className="percentage_subtext2 ">
                        <small className='ads_percentage2'style={{ color:"lightgreen"}}>25%</small>
                        <small className='ads_week_subtext2'>This week</small>
                      </div>
              
                    </div>
                  </div>
                  <div className='facebook_container_last2'>
                    <FaCameraRetro id="facebook-icon2"   style={{ marginTop:"7px"}} />
                    <div className='facebook_container_details2'>
                      <small className='ads_spent_txt2'>This Month</small>
                      <div class="container_progress_payments2"> 
                        <div class="skill facebook_percentage2"></div> 
                      </div> 
                      <div className="percentage_subtext2">
                        <small className='ads_percentage2 'style={{ color:"lightgreen"}}>25%</small>
                        <small className='ads_week_subtext2'>This week</small>
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Text>
            </Card.Body>
            </Card>  
          </div>
        </div>
      </div>
     </>




    // <div className='col-lg-3 col-md-6 col-sm-3'>
    //   <Card className='facebookcard2 twoes'  style={{ width: '9.5rem',height: "120px",border:'1px solid black', borderRadius:'10px' }} >
    //     <Card.Body style={{ fontSize: "8px"}} >
      
    //       <Card.Text id="facebook-text2"  style={{marginTop:'7px'}}>
    //         <div className="facebook2">
    //           <div className='facebook_container2'>
    //             <ImFacebook2 id="facebook-icon2" style={{ marginTop:"7px"}} />
    //             <div className='facebook_container_details2'>
    //               <small className='ads_spent_txt2'>This Month</small>
    //               <div class="container_progress_payments2"> 
    //                 <div class="skilled facebook_percentage2"></div> 
    //               </div> 
    //               <div className="percentage_subtext2">
    //                 <small className='ads_percentage2' style={{ color:"lightgreen"}}>30%</small>
    //                 <small className='ads_week_subtext2'>This week</small>
    //               </div>
                  
    //             </div>
    //           </div>
    //           <div className='facebook_container2'>
    //             <BsTwitter id="facebook-icon2"  style={{ marginTop:"30px"}}/>
    //             <div className='facebook_container_details2  'style={{ marginTop:"30px"}}>
    //               <small className='ads_spent_txt2'style={{ marginTop:"30px"}}>This Month</small>
    //               <div class="container_progress_payments2"> 
    //                 <div class="skilled twitter_percentage2"></div> 
    //               </div> 
    //               <div className="percentage_subtext2 ">
    //                 <small className='ads_percentage2' style={{ color:"lightgreen"}}>25%</small>
    //                 <small className='ads_week_subtext2'>This week</small>
    //               </div>
                  
    //             </div>
    //           </div>
    //           <div className='facebook_container_last2'>
    //             <FaCameraRetro id="facebook-icon2"   />
    //             <div className='facebook_container_details2'>
    //               <small className='ads_spent_txt2'>This Month</small>
    //               <div class="container_progress_payments2"> 
    //                 <div class="skilled facebook_percentage2" ></div> 
    //               </div> 
    //               <div className="percentage_subtext2">
    //                 <small className='ads_percentage2 ' style={{ color:"lightgreen"}}>25%</small>
    //                 <small className='ads_week_subtext2'>This week</small>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </Card.Text>
        
    //     </Card.Body>
    //   </Card>
    //   </div>
    // </div>
    // </div>
  
  )
}

export default Payments