import React, { useState} from 'react'
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography'

import { Pie } from 'react-chartjs-2'
import './emiloancal.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Axios from 'axios'
import { connect } from "react-redux";
import { customerLoanDetails } from "../../store/action";
const PrettoSlider = withStyles({
    root: { color: '#206FB7', height: 10 },
    thumb: { height: 25, width: 25, backgroundColor: '',current:'rgba(0,0,0,0.03)', border: '3px solid #ccc', color:'#ffff', marginTop: -9, marginLeft: -9 },
    track: { height: 10, borderRadius: 4 },
    rail: { height: 10, borderRadius: 4 },
})(Slider);




const mapStateToProps = state => ({
    ...state,
    });
    
    const mapDispatchToProps = dispatch => ({
        customerLoanDetails: () => dispatch(customerLoanDetails()),
       
   
    });
 const Calculator =(props)=> {

    
  

const[pAmount, SetpAmount] = useState(1000);
const[interest, Setinterset] = useState(10.5)
const[duration, Setduration] = useState(6)

//  useEffect(async (props) => {
//     await this.props.customerLoanDetails()
//   },[]);

const maxValue = 1000000
const intMAx = 20;
const maxDuration = 12;


const intr = interest / 1200;
const emi = duration ? Math.round(pAmount * intr / (1 - (Math.pow(1 / (1 + intr), duration)))) : 0;
const totalAmt = duration * emi;
var TotalAmountofCredit = Math.round((emi / intr) * (1 - (Math.pow(1 / (1 + intr), -duration))));
const TotalAmountofInterest = Math.round(totalAmt - TotalAmountofCredit)
// let loancal=this.props.reducer.loanoverview ? this.props.reducer.loanoverview :[]

console.log(props,'calc lang')
// console.log(loancal,'loancalget')


    
    return (

        <div style={{height:'100vh'}}>
             <div className="backgroundstyling">
                            <h3 style={{"color":"#ffff","padding-left":"25px","font-weight":"bold"}}> {props.lang != 'EN' ? 'LOAN CALCULATOR' : 'قرض دینے والا'}   </h3>
                        </div>
            <div className="container emiloancalstyle">
                <div className="row">
                    <div className="card">
                    <div className="dfs_calculateHeading">
                             {props.lang != 'EN' ? 'Calculate Home Loan EMI' : 'ہوم لون EMI کا حساب لگائیں'}   
                            </div>
                        <div className="card-body dfs_calculatorstyle">
                            
                            <div className="row">
                                <div className="col-sm-4 dfs-loanamtstyle">
                                    <div>
                                        <Typography gutterBottom><strong>{props.lang != 'EN' ? 'Loan Amount:' : 'قرضے کی رقم:'}</strong></Typography>
                                        <div className="input-group">
                                            <span className="input-group-addon">$</span>
                                            <input value={pAmount} className="form-control" />
                                        </div>
                                        <PrettoSlider value={pAmount} onChange={(event, vAmt) => { SetpAmount(vAmt) }} defaultvalue={pAmount} max={maxValue} />
                                    </div>

                                    <div>
                                        <Typography gutterBottom><strong>{props.lang != 'EN' ? 'Interest Rate:' : 'سود کی شرح:'}</strong></Typography>
                                     

                                        <div className="input-group">
                                            <span className="input-group-addon">%</span>
                                            <input value={interest} className="form-control" />
                                        </div>



                                        <PrettoSlider value={interest} onChange={(event, vAmt) => { Setinterset(vAmt) }} defaultvalue={interest} max={intMAx} />
                                    </div>

                                    <div>
                                        <Typography gutterBottom><strong>{props.lang != 'EN' ? 'Loan Tenure:' : 'قرض کی مدت:'}</strong></Typography>
                                        <div className="input-group">
                                            <span className="input-group-addon">{props.lang != 'EN' ? 'month' : 'مہینہ'}</span>
                                            <input value={duration} className="form-control" />
                                        </div>
                                        <PrettoSlider value={duration} onChange={(event, vAmt) => { Setduration(vAmt) }} defaultvalue={duration} max={maxDuration} />
                                    </div>




                                </div>

                                <div className="col-sm-4 dfs-loanamtstyle">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="emidetails">
                                            {props.lang != 'EN' ? 'Your EMI Details' : 'آپ کی EMI کی تفصیلات'}
                                        </div>

                                            <div className="loanemi">
                                                <div className="emicalfontstyle">
                                                {props.lang != 'EN' ? 'Loan EMI' : 'لون EMI'}
                                        </div>
                                                <div className="loanamount">
                                                    ${emi}
                                                   
                                                </div>

                                            </div>

                                            <div className="loanemi">
                                                <div className="emicalfontstyle">
                                                {props.lang != 'EN' ? 'Total Interest Payable' : 'قابل ادائیگی کل سود'}  
                                        </div>
                                                <div className="loanamount">
                                                    ${TotalAmountofInterest}
                                                   
                                                </div>
                                            </div>


                                            <div className="loanemi">
                                                <div className="emicalfontstyle">
                                                {props.lang != 'EN' ? ' Total Payment' : 'کل ادائیگی'} 
                                        </div>
                                                <div className="loanamount">
                                                    {/* ${totalAmt} */}
                                                    
                                                </div>
                                            </div>




                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-4 dfs-loanamtstyle">
                                    <Pie
                                        data={{
                                            labels: ['Total Interest', 'Total Amount'],
                                            datasets: [{
                                                data: [TotalAmountofInterest,totalAmt],
                                                backgroundColor: ['#919090','#206fb7','#84b0d5','#b6cfe5']
                                            }],
                                           
                                        }}
                                        
                                        width={10}
                                        height={10}
                                        
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )

}
export default connect(mapStateToProps, mapDispatchToProps)(Calculator)