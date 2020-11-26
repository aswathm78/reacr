import React, { Component } from "react";
import Animate from "animate.css-react";
import { connect } from "react-redux";
import $ from "jquery";
class FAQ extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    $(".toggle-heading").on("click", function () {
      $(this).find("i").toggleClass(" fa-plus fa-minus");
    });
  }
  render() {
    const arabicStyleText = {
      transform: "rotateY(180deg)",
      textAlign: "right",
      direction: "rtl",
    };
    
    let heading,
      detail,
      item = [];
    if (this.props.faqData) {
      this.props.faqData.map((i) => {
        if (i.language === this.props.language) {
          heading = i.title;
          detail = i.detail;
          i.faqs.item.map((j, index) => {
            item.push(
              <div class="toggle" key={index}>
                <div class="toggle-heading" role="tab">
                  <a
                    style={
                      this.props.language === "ar" ? arabicStyleText : null
                    }
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href={"#"+index}
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <i class="fa fa-plus"></i>
                    {j.q}
                  </a>
                </div>
                <div
                  id={index}
                  class="panel-collapse collapse"
                  role="tabpanel"
                >
                  <div class="toggle-body">
                    <p
                      style={
                        this.props.language === "ar" ? arabicStyleText : null
                      }
                    >
                      
                      {j.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          });
        }
      });
    }
    return (
      <>
        <div class="col-md-6">
          <Animate appear="fadeInRight" durationAppear={5000} component="div">
            <h3 style={this.props.language === "ar" ? arabicStyleText : null}>
              {heading}
            </h3>
            <p style={this.props.language === "ar" ? arabicStyleText : null}>
              {detail}
            </p>

            <div id="accordion" role="tablist" aria-multiselectable="true">
              {item}
            </div>
          </Animate>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.reducer.language,
  };
};

export default connect(mapStateToProps, null)(FAQ);
