import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./footer.css"
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';


export default function App() {
  return (
    <MDBFooter className='custom-bg-color text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
        </div>

        <div>
          <a href='https://w.app/ClinicaPsique' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='whatsapp' />
          </a>
          <a href='mailto:acpnasci2305@gmail.com' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='https://www.instagram.com/anacelianascimento.psi/' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
        </div>
      </section>

      <section className=''>
        
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                Sobre Ana Célia
              </h6>
              <p>
              Ana Célia é uma psicóloga dedicada que oferece serviços de aconselhamento e terapia na Torre do Noteshopping.
              Ana Célia está comprometida em ajudar seus pacientes a alcançar o bem-estar emocional e mental.
              </p>
            </MDBCol>


            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Link Utéis</h6>
              <p>
                <a href='https://www.instagram.com/anacelianascimento.psi/' className='text-reset'>
                  Instragram
                </a>
              </p>
              <p>
                <a href='/contato' className='text-reset'>
                  Contato
                </a>
              </p>
              <p>
                <a href='https://w.app/ClinicaPsique' className='text-reset'>
                  WhatsApp
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                Torre NorteShopping, 901 - Rio de Janeiro
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                contatositeanacelia@gmail.com
              </p>
              <p>
                <MDBIcon color='secondary'fab icon='whatsapp' className='me-3' /> 
                +55 21 96805-6868
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

   
    </MDBFooter>
  );
}