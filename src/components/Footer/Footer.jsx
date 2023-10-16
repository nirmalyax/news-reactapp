import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import './Footer.css'

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
                    Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit.
                    </p>
                </MDBCol>

                <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                    <p>
                    <a href='#!' className='text-reset'>
                        Angular
                    </a>
                    </p>
                    <p>
                    <a href='#!' className='text-reset'>
                        React
                    </a>
                    </p>
                    <p>
                    <a href='#!' className='text-reset'>
                        Vue
                    </a>
                    </p>
                    <p>
                    <a href='#!' className='text-reset'>
                        Laravel
                    </a>
                    </p>
                </MDBCol>

                <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                    <p>
                    <a href='#!' className='text-reset'>
                        Pricing
                    </a>
                    </p>
                    <p>
                    <a href='#!' className='text-reset'>
                        Settings
                    </a>
                    </p>
                    <p>
                    <a href='#!' className='text-reset'>
                        Orders
                    </a>
                    </p>
                    <p>
                    <a href='#!' className='text-reset'>
                        Help
                    </a>
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
            © 2023 Copyright -  
            <a className='text-reset fw-bold' href='https://'>
              - dailyNEWS.com
            </a>
            </div>
        </MDBFooter>
   </div>
  )
}
