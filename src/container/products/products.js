import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Animate from "animate.css-react";
import OwlCarousel from "react-owl-carousel2";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Auto from "../../assets/images/img3.jpg";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import {
  FaMoneyBillWave,
  FaUserAlt,
  FaGift,
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaWallet,
} from "react-icons/fa";
import Slider from "react-slick";
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const options = {
      items: 2,
      nav: false,
      dots: false,
      navText: false,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 2,
        },
      },
    };

    let productList = [],
      subProductList = [];
    if (this.props.allProductsData) {
      this.props.allProductsData.map((i) => {
        productList.push(
          <li>
            <a href="#." class={i.prodDesc === "Auto Loan" ? "active" : null}>
              {i.prodDesc}
              <i class="fa fa-angle-right"></i>
            </a>
          </li>
        );
      });
    }

    if (this.props.allSubProductsData) {
      this.props.allSubProductsData.map((i) => {
        subProductList.push(
          <div class="col-md-6">
            <div class="chart-widget">
              <div
                id="chartContainer2"
                style={{ height: "210px", width: "100%" }}
              ></div>
              <p>{i.subProdDesc}</p>
            </div>
          </div>
        );
      });
    }
    return (
      <div>
        <Header
          {...this.props}
          onChangeLanguage={(args) => this.props.onChangeLanguage(args)}
        />
        <section class="subpage-header">
          <div class="container">
            <div class="site-title clearfix">
              <h2>Products</h2>
              <ul class="breadcrumbs">
                <li>
                  <a href="#.">Home</a>
                </li>
                <li>Products</li>
              </ul>
            </div>
            <a
              href="contact-us.html"
              class="btn btn-primary get-in-touch"
              data-text="Contact us"
            >
              <i class="icon-telephone114"></i>Contact us
            </a>
          </div>
        </section>
        <section>
          <div class="container">
            <div class="row">
              <div class="col-md-4 animate fadeInLeft">
                <aside>
                  <ul class="left-nav">
                    {/* <li><a href="#.">SME Loan <i class="fa fa-angle-right"></i></a></li>
									<li><a href="#.">Consumer Loan<i class="fa fa-angle-right"></i></a></li>
									<li><a href="#." class="active">Auto Loan <i class="fa fa-angle-right"></i></a></li>
									<li><a href="#.">Commercial Loan<i class="fa fa-angle-right"></i></a></li> */}
                    {productList}
                  </ul>

                  <div class="help-widget">
                    <h5>how can we help you?</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adi pisi cing
                      elit, sed do eiusmod tempor.
                    </p>
                    <a
                      href="contact-us.html"
                      class="btn btn-primary btn-white get-in-touch"
                      data-text="Contact us"
                    >
                      <i class="icon-telephone114"></i>Contact us
                    </a>
                  </div>

                  <a href="#." class="company-presentation-link">
                    <i class="icon-file-pdf-o"></i> Company Presentation
                  </a>

                  <div class="testimonial">
                    <div class="testimonial-content">
                      <h5>Testimonials</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adi pisi cing
                        elit, sed do eiusmod tempor exercitationemut labore Love
                        life’s sweetest.
                      </p>
                    </div>

                    <div class="testimonials-author">
                      <img
                        class="img-circle"
                        src="images/review-author-img.png"
                        alt=""
                      />
                      <p>
                        Boris Hunt<span>(Sales Agent)</span>
                      </p>
                    </div>
                  </div>
                </aside>
              </div>

              <Animate
                class="col-md-8"
                appear="fadeInRight"
                durationAppear={1500}
                component="div"
              >
                <OwlCarousel options={options}>
                  <img src={Auto} />
                </OwlCarousel>

                <br></br>
                <br></br>
                <p>
                  We have over 15 years of experience Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Aenean Lorem ipsm dolor sit
                  the power of consectetur adi pisi cing elit, sed do eiusmod
                  tempor xercitationemut labore. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Aenean bibendum nec risus et
                  suscipit Curabitur metus ipsum. But I must explain to you how
                  all this mistaken idea of denouncing.
                </p>
                <p>
                  expound the actual teachings. of the great explorer of the
                  truth, the master-builder of No one rejects, dislikes, or
                  human happiness.{" "}
                </p>
                <br></br>

                <h3>Sub Products</h3>

                <div class="row">
                  {/* <div class="col-md-6">
									<div class="chart-widget">
										<div id="chartContainer" style={{height: '210px' ,width: '100%'}}></div>
										<p>consectetur adipiscing elit. Aenean Lorem ipsm dolor sit the power of consectetur adi pisi cing elit, sed do eiusmod.</p>
									</div>
								</div>
								<div class="col-md-6">
									<div class="chart-widget">
										<div id="chartContainer2" style={{height: '210px' ,width: '100%'}}></div>
										<p>consectetur adipiscing elit. Aenean Lorem ipsm dolor sit the power of consectetur adi pisi cing elit, sed do eiusmod.</p>
									</div>
								</div>
							</div>
							<div class="height-30"></div>
							<div class="row">
								<div class="col-md-6">
									<div class="chart-widget">
										<div id="chartContainer3" style={{height: '210px' ,width: '100%'}}></div>
										<p>consectetur adipiscing elit. Aenean Lorem ipsm dolor sit the power of consectetur adi pisi cing elit, sed do eiusmod.</p>
									</div>
								</div>
								<div class="col-md-6">
									<div class="chart-widget">
										<div id="chartContainer4" style={{height: '210px' ,width: '100%'}}></div>
										<p>consectetur adipiscing elit. Aenean Lorem ipsm dolor sit the power of consectetur adi pisi cing elit, sed do eiusmod.</p>
									</div>
								</div> */}
								{subProductList}
                </div>
              </Animate>
            </div>
          </div>
        </section>
        <Footer {...this.props} />
      </div>
    );
  }
}

export default Products;
