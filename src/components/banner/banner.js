import React, { Component } from "react";
import { connect } from "react-redux";

import HeroSlider, {
  Slide,
  Nav,
  SideNav,
  MenuNav,
  ButtonsNav,
  AutoplayButton,
  OverlayContent,
  OverlayContainer,
} from "hero-slider";
import styled from "styled-components";


class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    const arabicStyleText = {
      transform: "rotateY(180deg)",
      textAlign: "right",
      direction: "rtl",
    };
    const arabicStyle = { transform: "rotateY(180deg)", direction: "rtl" };
    let items = [],
      productItems = [];
    if (this.props.bannerData) {
      this.props.bannerData.map((i) => {
        if (i.language === this.props.language) {
          i.slides.map((j, index) => {
            items.push(
              <li class={index === 0 ? "selected" : null}>
                <div class="cd-full-width dfs-overlay-white">
                  <div class="container">
                    <h2
                      style={
                        this.props.language === "ar" ? arabicStyleText : null
                      }
                    >
                      {j.heading1}
                      <span
                        class="color-default"
                        style={
                          this.props.language === "ar" ? arabicStyle : null
                        }
                      >
                        {j.heading2 ? j.heading2 : null}
                      </span>
                    </h2>
                    <p
                      style={
                        this.props.language === "ar" ? arabicStyleText : null
                      }
                    >
                      {j.details}
                    </p>
                    {j.links.items.map((k, index) => {
                      {
                        if (index === 0) {
                          return (
                            <a
                              style={
                                this.props.language === "ar"
                                  ? arabicStyleText
                                  : null
                              }
                              href="about-us.html"
                              class="btn btn-primary"
                              data-text={k.item}
                            >
                              {k.item}
                            </a>
                          );
                        } else {
                          return (
                            <a
                              style={
                                this.props.language === "ar"
                                  ? arabicStyleText
                                  : null
                              }
                              href="contact-us.html"
                              class="btn btn-default"
                              data-text={k.item}
                            >
                              {k.item}
                            </a>
                          );
                        }
                      }
                    })}
                  </div>
                </div>
              </li>
            );
          });
        }
      });
    }
    if (this.props.productData) {
      this.props.productData.map((i) => {
        if (i.language === this.props.language) {
          i.productslides.map((j, index) => {
            productItems.push(
              <li class={index === 0 ? "selected" : null}>
                <a
                  href="#0"
                  style={this.props.language === "ar" ? arabicStyleText : null}
                >
                  <div class="slide-number">{j.number}</div>
                  {j.heading}
                  <span>{j.details}</span>
                </a>
              </li>
            );
          });
        }
      });
    }

    return (
      <div
        class="cd-hero js-cd-hero js-cd-autoplay"
        style={
          this.props.language === "ar" ? { transform: "rotateY(180deg)" } : null
        }
      >
        <ul class="cd-hero-slider autoplay carousel slide js-cd-slide">
          {items}
        </ul>

        <div class="cd-slider-nav">
          <nav class="container">
            <span class="cd-marker item-1"></span>
            <ul>{productItems}</ul>
          </nav>
        </div>
      </div>


    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.reducer.language,
  };
};

export default connect(mapStateToProps, null)(Banner);
