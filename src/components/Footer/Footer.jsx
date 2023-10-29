import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import './Footer.css'
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div id='footer'>
        <MDBFooter bgColor='#A7DADC' className='text-center text-lg-start text-muted'>
            <section className=''>
            <MDBContainer className='text-center text-md-start mt-5' style={{color:"black"}}>
                <MDBRow className='mt-3'>
                <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>
                    <MDBIcon icon="gem" className="me-3"/>
                    dailyNEWS
                    </h6>
                    <p>
                    A website offering daily news forecasts and predictions for future events, keeping you informed about potential developments.
                    </p>
                </MDBCol>

                <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>News - Categories</h6>
                    <p>
                    <Link to='#!' className='text-reset'>
                        General
                    </Link>
                    </p>
                    <p>
                    <Link to='#!' className='text-reset'>
                        Business
                    </Link>
                    </p>
                    <p>
                    <Link to='#!' className='text-reset'>
                        Science
                    </Link>
                    </p>
                    <p>
                    <Link to='#!' className='text-reset'>
                        Health
                    </Link>
                    </p>
                </MDBCol>

                <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                    <p>
                    <Link to='#!' className='text-reset'>
                        Pricing
                    </Link>
                    </p>
                    <p>
                    <Link to='#!' className='text-reset'>
                        Settings
                    </Link>
                    </p>
                    <p>
                    <Link to='#!' className='text-reset'>
                        Orders
                    </Link>
                    </p>
                    <p>
                    <Link to='#!' className='text-reset'>
                        Help
                    </Link>
                    </p>
                </MDBCol>

                <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                    <p>
                    <MDBIcon icon="home" className="me-2" />
                    India, Delhi 10012, IN
                    </p>
                    <p>
                    <MDBIcon icon="envelope" className="me-3" />
                    dailynews@info.com
                    </p>
                    <p>
                    <MDBIcon icon="phone" className="me-3" /> + 91 234-567-8888
                    </p>
                    <p>
                    <MDBIcon icon="print" className="me-3" /> + 91 234-567-8999
                    </p>
                </MDBCol>
                </MDBRow>
            </MDBContainer>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
            © 2023 Copyright - All rights reserved  &nbsp;  &nbsp; || &nbsp; &nbsp;
            &#9829; developed with love by <Link rel="stylesheet"  to="https://nirmalyax.dev" >-nirmalyax</Link>
            </div>
        </MDBFooter>
   </div>
  )
}
