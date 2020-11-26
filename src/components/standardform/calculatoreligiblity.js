import React, { Component } from 'react';
import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';
import Slidermarks from './slidermark'
import image from '../../assets/images/car.jpeg'
import * as actionTypes from "../../store/action";
import { connect } from "react-redux";
const PrettoSlider = withStyles({
    root: { color: 'red', height: 5 },
    thumb: { height: 25, width: 25, backgroundColor: '#fff', border: '1px solid black', marginTop: -9, marginLeft: -9 },
    track: { height: 5, borderRadius: 4 },
    rail: { height: 5, borderRadius: 4 },
})(Slider);
class calculatoreligiblity extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    check = () => {
        console.log('calcualtor comp')
    }

    render() {
        const arabicStyleText = { transform: 'rotateY(180deg)', textAlign: 'right', direction: 'rtl' }
        const arabicStyle = { transform: 'rotateY(180deg)', direction: 'rtl' }
        let calcualtorheading, congrasstext, MinumumTenure, MaximumTenure, MinumumLoanAmount, MaximumLoanAmount, RESIDENTTYPE, ADDRESS1,ADDRESS2, LANDMARK, RESIDENTNOOFYERAS, SELECT, PROCEEDFORLOANAPPROVAL,pincode,state
        if (this.props.standardformData) {
            this.props.standardformData.map((c, index) => {
                if (c.Lang == window.sessionStorage.getItem('language')) {
                    calcualtorheading = c.calcualtorheading;
                    congrasstext = c.congrasstext;
                    MinumumTenure = c.MinumumTenure;
                    MaximumTenure = c.MaximumTenure;
                    MinumumLoanAmount = c.MinumumLoanAmount;
                    MaximumLoanAmount = c.MaximumLoanAmount;
                    RESIDENTTYPE = c.RESIDENTTYPE;
                    ADDRESS1 = c.ADDRESS1;
                    ADDRESS2 = c.ADDRESS2;
                    LANDMARK = c.LANDMARK;
                    RESIDENTNOOFYERAS = c.RESIDENTNOOFYERAS;
                    SELECT = c.SELECT;
                    PROCEEDFORLOANAPPROVAL = c.PROCEEDFORLOANAPPROVAL;
                    pincode=c.pincode;
                    state=c.state;



                }
            })
        }



        return (
            <div>
                <div className="container standardpadding">
                    <div className="row">
                        <div className="card" style={{ "border-radius": "10px" }}>
                            <div className="card-body">
                                <div className="cal_heading">
                                    {calcualtorheading}
                                </div>

                                <div className="congratulationstxt">
                                    {congrasstext}
                                </div>

                                <div className="row">
                                    <div className="col-sm-5">
                                        <div className="rangeslider">
                                            <div style={{ "display": "flex" }}>
                                                <div className="minimuntenure">
                                                    {MinumumTenure}
                                                </div>
                                                <div className="maximumtenure">
                                                    {MaximumTenure}
                                                </div>
                                            </div>
                                            <PrettoSlider marks={Slidermarks.marksTenure} valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={100} />
                                        </div>

                                        <div className="amountrangeslider">
                                            <div style={{ "display": "flex" }}>
                                                <div className="minimumamount">
                                                    {MinumumLoanAmount}
                                                </div>
                                                <div className="maximumamount">
                                                    {MaximumLoanAmount}
                                                </div>
                                            </div>
                                            <PrettoSlider marks={Slidermarks.marksAmount} valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={100} />
                                        </div>
                                    </div>
                                    <div className="col-sm-7">
                                        <div className="carimageandname">


                                            <img src={image} />

                                            <div className="carname">
                                                Koenigsegg CCXR Trevita
                                    </div>
                                            <div className="caramount">
                                                Price: SR 0.8 million
                                    </div>

                                        </div>

                                    </div>


                                </div>

                                <div className="row">
                                    <div className="col-sm-12 applycolpadding">
                                        <div className="col-sm-4 applynow">
                                            {/* <input type="text" placeholder="Title" /> */}
                                            <label>{RESIDENTTYPE}</label>
                                            <select>
                                                <option>SELECT DOCUMENT</option>
                                                <option>Bacholor Accommodation</option>
                                                <option>Company provided</option>
                                                <option>Hostel</option>
                                                <option>Owned by Self/Family</option>
                                                <option>Paying Guest/ Hostel</option>
                                                <option>Rented - with family</option>
                                            </select>
                                        </div>
                                        <div className="col-sm-4 applynow">
                                            <input type="text" placeholder={ADDRESS1} style={{ "padding-top": "20px" }} />
                                        </div>
                                        <div className="col-sm-4 applynow">

                                            <input type="text" placeholder={ADDRESS2} style={{ "padding-top": "20px" }} />
                                        </div>
                                    </div>

                                    <div className="col-sm-12 applycolpadding">
                                        <div className="col-sm-4 applynow">
                                            <input type="text" name="input" placeholder={LANDMARK} required style={{ "padding-top": "20px" }}
                                            />
                                        </div>
                                        <div className="col-sm-4 applynow">
                                            <input type="text" placeholder={pincode} style={{ "padding-top": "20px" }} />
                                        </div>
                                        <div className="col-sm-4 applynow">

                                            <input type="text" placeholder={state} onClick={this.check()} style={{ "padding-top": "20px" }} />
                                        </div>
                                    </div>

                                    <div className="col-sm-12 applycolpadding">
                                        <div className="col-sm-4 applynow">
                                            <label>{RESIDENTNOOFYERAS}</label>
                                            <select>
                                                <option>select</option>
                                                <option>0</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                                <option>7</option>
                                                <option>8</option>
                                                <option>9</option>
                                                <option>10</option>
                                                <option>11</option>
                                                <option>12</option>
                                                <option>15</option>

                                            </select>

                                        </div>
                                        <div className="col-sm-4 applynow">

                                        </div>
                                        <div className="col-sm-4 applynow">

                                        </div>
                                    </div>


                                </div>
                                <div className="loanapproval">
                                    <button className="laonapprovalbtn">{PROCEEDFORLOANAPPROVAL}</button>
                                </div>
                            </div>
                        </div>

                    </div>
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

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeLanguage: (value) =>
            dispatch({ type: actionTypes.SELECT_LANGUAGE, payload: value }),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(calculatoreligiblity);
