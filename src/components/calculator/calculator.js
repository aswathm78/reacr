import React, { Component } from "react";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {      

    
     }

  render() {
    return (
      <>	
        {/* <section class="loan-calculator section-padding">
          <div class="container">
            <div class="price-box">
              <div class="row">
                <div class="col-sm-6">
                  <form class="form-horizontal form-pricing" role="form">
                    <div class="price-slider">
                      <h4 class="great">Amount</h4>
                      <span>Minimum $100K is required</span>
                      <div class="col-sm-12">
                        <div id="slider_amirol"></div>
                      </div>
                    </div>
                    <div class="price-slider">
                      <h4 class="great">Duration</h4>
                      <span>Please choose one</span>
                      <div class="btn-group btn-group-justified">
                        <div class="btn-group btn-group-lg">
                          <button
                            type="button"
                            class="btn month active-month selected-month"
                            id="24month"
                          >
                            24 Months
                          </button>
                        </div>
                        <div class="btn-group btn-group-lg">
                          <button type="button" class="btn month" id="18month">
                            18 Months
                          </button>
                        </div>
                        <div class="btn-group btn-group-lg">
                          <button type="button" class="btn month" id="12month">
                            12 Months
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="price-slider">
                      <h4 class="great">Term</h4>
                      <span>Please choose one</span>
                      <input
                        name="sliderVal"
                        type="hidden"
                        id="sliderVal"
                        value="0"
                        readonly="readonly"
                      />
                      <input
                        name="month"
                        type="hidden"
                        id="month"
                        value="24month"
                        readonly="readonly"
                      />
                      <input
                        name="term"
                        type="hidden"
                        id="term"
                        value="quarterly"
                        readonly="readonly"
                      />
                      <div class="btn-group btn-group-justified">
                        <div class="btn-group btn-group-lg">
                          <button
                            type="button"
                            class="btn term active-term selected-term"
                            id="quarterly"
                          >
                            Quarterly
                          </button>
                        </div>
                        <div class="btn-group btn-group-lg">
                          <button type="button" class="btn term" id="monthly">
                            Monthly
                          </button>
                        </div>
                        <div class="btn-group btn-group-lg">
                          <button type="button" class="btn term" id="weekly">
                            Weekly
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="col-sm-6">
                 
                    <div class="price-form">
                      <div class="form-group">
                        <div class="row">
                          <div class="col-sm-6">
                            <label for="amount_amirol" class="control-label">
                              Annually ($):{" "}
                            </label>
                            <span class="help-text">
                              Amount that you need to pay
                            </span>
                          </div>
                          <div class="col-sm-6">
                            <input
                              type="hidden"
                              id="amount_amirol"
                              class="form-control"
                            />
                            <input
                              class="price lead"
                              name="totalprice"
                              type="text"
                              id="total"
                              disabled="disabled"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="row">
                          <div class="col-sm-6">
                            <label for="amount_amirol" class="control-label">
                              Monthly ($):{" "}
                            </label>
                            <span class="help-text">
                              Amount that you need to pay
                            </span>
                          </div>
                          <div class="col-sm-6">
                            <input
                              type="hidden"
                              id="amount_amirol"
                              class="form-control"
                            />
                           
                            <input
                              class="price lead"
                              name="totalprice12"
                              type="text"
                              id="total12"
                              disabled="disabled"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="row">
                          <div class="col-sm-6">
                            <label for="amount_amirol" class="control-label">
                              Weekly ($):{" "}
                            </label>
                            <span class="help-text">
                              Amount that you need to pay
                            </span>
                          </div>
                          <div class="col-sm-6">
                            <input
                              type="hidden"
                              id="amount_amirol"
                              class="form-control"
                            />
                            <input
                              class="price lead"
                              name="totalprice52"
                              type="text"
                              id="total52"
                              disabled="disabled"
                            />
                          </div>
                        </div>
                      </div>
                      <div style={{ marginTop: "30px" }}></div>

                      <div class="form-group">
                        <div class="col-sm-12">
                          <button
                            name="Proceed"
                            type="submit"
                            class="btn btn-primary btn-lg btn-block"
                            data-text="PROCEED >"
                            onClick=""
                          >
                            Proceed >
                          </button>
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="col-sm-12">
                          <img
                            src="https://github.com/AmirolAhmad/Bootstrap-Calculator/blob/master/images/payment.png?raw=true"
                            class="img-responsive payment"
                          />
                        </div>
                      </div>
                    </div>
                
                </div>
              </div>
            </div>
          </div>
        </section> */}

          <section class="loan-calculator section-padding">
          <div class="container">
            <div class="price-box">
              <div class="row">
                <div class="col-sm-6">
                  <form class="form-horizontal form-pricing" role="form">
                    <div class="price-slider">
                      <h4 class="great">Amount</h4>
                      <span>Minimum $100K is required</span>
                      <div class="col-sm-12">
                        <div id="slider_amirol"></div>
                      </div>
                    </div>
                    <div class="price-slider">
                      <h4 class="great">Duration</h4>
                      <span>Please choose one</span>
                      <div class="btn-group btn-group-justified">
                        <div class="btn-group btn-group-lg">
                          <button
                            type="button"
                            class="btn month active-month selected-month"
                            id="24month"
                          >
                            24 Months
                          </button>
                        </div>
                        <div class="btn-group btn-group-lg">
                          <button type="button" class="btn month" id="18month">
                            18 Months
                          </button>
                        </div>
                        <div class="btn-group btn-group-lg">
                          <button type="button" class="btn month" id="12month">
                            12 Months
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="price-slider">
                      <h4 class="great">Term</h4>
                      <span>Please choose one</span>
                      <input
                        name="sliderVal"
                        type="hidden"
                        id="sliderVal"
                        value="0"
                        readonly="readonly"
                      />
                      <input
                        name="month"
                        type="hidden"
                        id="month"
                        value="24month"
                        readonly="readonly"
                      />
                      <input
                        name="term"
                        type="hidden"
                        id="term"
                        value="quarterly"
                        readonly="readonly"
                      />
                      <div class="btn-group btn-group-justified">
                        <div class="btn-group btn-group-lg">
                          <button
                            type="button"
                            class="btn term active-term selected-term"
                            id="quarterly"
                          >
                            Quarterly
                          </button>
                        </div>
                        <div class="btn-group btn-group-lg">
                          <button type="button" class="btn term" id="monthly">
                            Monthly
                          </button>
                        </div>
                        <div class="btn-group btn-group-lg">
                          <button type="button" class="btn term" id="weekly">
                            Weekly
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="col-sm-6">
                 
                    <div class="price-form">
                      <div class="form-group">
                        <div class="row">
                          <div class="col-sm-6">
                            <label for="amount_amirol" class="control-label">
                              Annually ($):{" "}
                            </label>
                            <span class="help-text">
                              Amount that you need to pay
                            </span>
                          </div>
                          <div class="col-sm-6">
                            <input
                              type="hidden"
                              id="amount_amirol"
                              class="form-control"
                            />
                            <input
                              class="price lead"
                              name="totalprice"
                              type="text"
                              id="total"
                              disabled="disabled"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="row">
                          <div class="col-sm-6">
                            <label for="amount_amirol" class="control-label">
                              Monthly ($):{" "}
                            </label>
                            <span class="help-text">
                              Amount that you need to pay
                            </span>
                          </div>
                          <div class="col-sm-6">
                            <input
                              type="hidden"
                              id="amount_amirol"
                              class="form-control"
                            />
                           
                            <input
                              class="price lead"
                              name="totalprice12"
                              type="text"
                              id="total12"
                              disabled="disabled"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="row">
                          <div class="col-sm-6">
                            <label for="amount_amirol" class="control-label">
                              Weekly ($):{" "}
                            </label>
                            <span class="help-text">
                              Amount that you need to pay
                            </span>
                          </div>
                          <div class="col-sm-6">
                            <input
                              type="hidden"
                              id="amount_amirol"
                              class="form-control"
                            />
                            <input
                              class="price lead"
                              name="totalprice52"
                              type="text"
                              id="total52"
                              disabled="disabled"
                            />
                          </div>
                        </div>
                      </div>
                      <div style={{ marginTop: "30px" }}></div>

                      <div class="form-group">
                        <div class="col-sm-12">
                          <button
                            name="Proceed"
                            type="submit"
                            class="btn btn-primary btn-lg btn-block"
                            data-text="PROCEED >"
                            onClick=""
                          >
                            Proceed >
                          </button>
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="col-sm-12">
                          <img
                            src="https://github.com/AmirolAhmad/Bootstrap-Calculator/blob/master/images/payment.png?raw=true"
                            class="img-responsive payment"
                          />
                        </div>
                      </div>
                    </div>
                
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Calculator;
