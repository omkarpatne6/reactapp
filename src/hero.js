import { Container, Row } from 'react-bootstrap';
import './App.css';
import Heroimg from './pana.svg';
import Aboutimg from './pana-1.svg';
import Product1 from './product-1.png';
import Product2 from './product-2.png';
import Product3 from './product-3.png';
import Icon1 from './icon1.png';
import Icon2 from './icon2.png';
import Icon3 from './icon3.png';
import Icon4 from './icon4.png';
import Icon5 from './icon5.png';
import Icon6 from './icon6.png';

function hero() {
  return (
    <>
      <section id="hero" className="hero d-flex align-items-center">

        <Container>
          <Row>
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">Making the most of the ever-growing <span className="h1hero">Information Technology</span></h1>
              <h2 data-aos="fade-up" data-aos-delay="400">Managed by team of professional experts with extensive experience and impressive track records</h2>
              <div data-aos="fade-up" data-aos-delay="600">
                <div className="text-center text-lg-start">
                  <a href="#about" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                    <span>Read More</span>

                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
              <img src={Heroimg} className="img-fluid" alt="" />
            </div>
          </Row>
        </Container>

      </section>

      <section id="about" className="about py-4">

        <Container>
          <Row>

            <div className="col-lg-6 " data-aos="zoom-out" data-aos-delay="200">
              <img src={Aboutimg} className="img-fluid" alt="" />
            </div>

            <div class="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
              <div class="content">

                <h2>Welcome to <span>Dwidasa Samsara Indonesia (DSI)</span></h2>
                <p>Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by the founders, who each of them has a common end objective to innovate new creations by making the most of the ever-growing information technology through <span>DSI’s</span> distinct front-end based application concept.</p>

              </div>
            </div>

          </Row>
        </Container>

      </section>

      <section id="values" className="values py-5" >

        <div className="container" data-aos="fade-up">

          <header className="section-header">
            <h2>Product and Service</h2>

          </header>

          <div className="row">

            <div className="col-lg-4">
              <div className="box" data-aos="fade-up" data-aos-delay="200">
                <img src={Product1} className="img-fluid" alt="" />
                <h3>Our Product</h3>
                <p>Our product is made on the base of our team’s careful research and analyses, ranging from internet based application.</p>
                <div className="text-center text-lg-start">
                  <a href="#about" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                    <span>Read More</span>

                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="box" data-aos="fade-up" data-aos-delay="400">
                <img src={Product2} className="img-fluid" alt="" />
                <h3>Our Service</h3>
                <p>DSI’s shared service solutions focus on the front-end based software development, designed specifically for the banking and financial sectors. </p>
                <div className="text-center text-lg-start">
                  <a href="#about" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                    <span>Read More</span>

                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="box" data-aos="fade-up" data-aos-delay="600">
                <img src={Product3} className="img-fluid" alt="" />
                <h3>Our Technology</h3>
                <p>First JAVA, runs on more than 850 million personal computers worldwide, and on billions of devices worldwide, including mobile and TV devices.</p>

                <div className="text-center text-lg-start">
                  <a href="#about" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                    <span>Read More</span>

                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

      </section>

      <section id="team" className="team">

        <div className="container" data-aos="fade-up">

          <header className="section-header">
            <h2>Mobile Specialist</h2>
          </header>

          <div className="row gy-4">

            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
              <div className=" bg-white py-4 p-0 card" >
                <img src="https://m.media-amazon.com/images/I/4104NYParML._AC_.jpg" alt="" className="rounded-circle mb-3 shadow-sm" />
                <h5 className="mb-0">System Analyst</h5>
                <p className="small ">Rodney Stratton</p>

                <div className="social-links mt-3">
                  <a href="https://skygoal.education/" className="facebook"><i className="fab fa-facebook-f"></i></a>
                  <a href="https://skygoal.education/" className="twitter"><i className="bi bi-twitter"></i></a>
                  <a href="https://skygoal.education/" className="instagram"><i className="bi bi-instagram bx bxl-instagram"></i></a>

                </div>


              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
              <div className=" bg-white py-4 p-0 card" >
                <img src="https://m.media-amazon.com/images/I/4104NYParML._AC_.jpg" alt="" className="rounded-circle mb-3 shadow-sm" />
                <h5 className="mb-0">System Analyst</h5>
                <p className="small ">Rodney Stratton</p>

                <div className="social-links mt-3">
                  <a href="https://skygoal.education/" className="facebook"><i className="fab fa-facebook-f"></i></a>
                  <a href="https://skygoal.education/" className="twitter"><i className="bi bi-twitter"></i></a>
                  <a href="https://skygoal.education/" className="instagram"><i className="bi bi-instagram bx bxl-instagram"></i></a>

                </div>


              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
              <div className=" bg-white py-4 p-0 card" >
                <img src="https://m.media-amazon.com/images/I/4104NYParML._AC_.jpg" alt="" className="rounded-circle mb-3 shadow-sm" />
                <h5 className="mb-0">Programmer</h5>
                <p className="small ">Rodney Stratton</p>

                <div className="social-links mt-3">
                  <a href="https://skygoal.education/" className="facebook"><i className="fab fa-facebook-f"></i></a>
                  <a href="https://skygoal.education/" className="twitter"><i className="bi bi-twitter"></i></a>
                  <a href="https://skygoal.education/" className="instagram"><i className="bi bi-instagram bx bxl-instagram"></i></a>

                </div>


              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
              <div className=" bg-white py-4 p-0 card" >
                <img src="https://m.media-amazon.com/images/I/4104NYParML._AC_.jpg" alt="" className="rounded-circle mb-3 shadow-sm" />
                <h5 className="mb-0">Programmer</h5>
                <p className="small ">Rodney Stratton</p>

                <div className="social-links mt-3">
                  <a href="https://skygoal.education/" className="facebook"><i className="fab fa-facebook-f"></i></a>
                  <a href="https://skygoal.education/" className="twitter"><i className="bi bi-twitter"></i></a>
                  <a href="https://skygoal.education/" className="instagram"><i className="bi bi-instagram bx bxl-instagram"></i></a>

                </div>


              </div>
            </div>
          </div>



        </div>

      </section>

      <footer id="footer" className="footer">



        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <h5>PT Dwidasa Samsara Indonesia</h5>
              <p>Ruko Jalur Sutera 29A No. 53 <br />Alam Sutera Serpong, Tangerang 15323 </p>
            </div>

            <div className="col-lg-3">
              <h4>Contact</h4>
              <p>Phone : +62.21.5314.1135 </p>
            </div>

            <div className="col-lg-5">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-6 my-auto"><img src={Icon1} alt='img' /></div>
                <div className="col-lg-4 col-md-6 col-6 my-auto"><img src={Icon2} alt='img' /></div>
                <div className="col-lg-4 col-md-6 col-6 my-auto"><img src={Icon3} alt='img' /></div>
                <div className="col-lg-3 col-md-6 col-6 my-auto"><img src={Icon4} alt='img' /></div>
                <div className="col-lg-5 col-md-6 col-6 my-auto"><img src={Icon5} alt='img' /></div>
                <div className="col-lg-4 col-md-6 col-6 my-auto"><img src={Icon6} alt='img' /></div>

              </div>


            </div>
          </div>
        </div>


      </footer>

      <div className="container-fluid copyright1">
        <div className="copyright">
          Copyright &copy; 2015
        </div>

      </div>


    </>
  )


}

export default hero;