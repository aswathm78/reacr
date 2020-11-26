import React, { Component } from 'react';

import 'react-circular-progressbar/dist/styles.css';
import './loans.css'
import Paper from '@material-ui/core/Paper';
import {
    Chart,
    BarSeries,
    Title,
    ArgumentAxis,
    ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';
import { TabProvider, Tab, TabPanel, TabList } from 'react-web-tabs';
import Ourproduct from './ourproduct_autoloan'
import Consumerloan from './ourproduct_consumerloan'
import SMEloan from './ourproduct_smeloan'
import Commercial from './ourproduct_commercial'
import ReactSpeedometer from "react-d3-speedometer";
import axios from 'axios'
import Loanperoformance from './loanperformancegraph'
import Emistatus from './emichart'
import Loanfstsection from './loanfstsection';

const data = [
    { year: 'Jan', population: 0.5 },
    { year: 'Feb', population: 1.0 },
    { year: 'Mar', population: 1.0 },
    { year: 'Apr', population: 1.0 },
    { year: 'May', population: 0.5 },
    { year: 'Jun', population: 0.5 },
    { year: 'Jul', population: 1.0 },
    { year: 'Agu', population: 1.0 },
    { year: 'Sep', population: 1.0 },
    { year: 'Oct', population: 1.0 },
    { year: 'Nov', population: 1.0 },
    { year: 'Dec', population: 1.0 },
];




class commercial extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data,
          

        }
    }

    
    render() {
        
        const { data: chartData} = this.state;
        return (
            <div>
                <div className="container loandashboardpadding">
                    <div className="row">

                        {/* ------------------First section ----------------*/}
                     
                        {/*--------------------------- second section----------------------------------------- */}
                    

                        {/* ----------------------------Third section -------------------------------------------------------------------- */}
                            <Loanfstsection/>
                   

                        {/* ----------------------------EMI Status Bar -------------------------------------------------*/}
                     
                        {/*------------------ Loan performance -------------------*/}

                        <div className="card emistatusstyle">
                            <div className="card-body">
                                <div className="emistatuschart">
                                    <div className="dfs_emistatus">
                                        <div className="dfs_emistatus">Loan Performance</div>
                                        <div className="dfs_buttons">
                                            <a href="#" style={{ "margin-right": "25px", "color": "black" }}>All time</a>
                                            <a href="#" style={{ "margin-right": "25px", "color": "black" }}>This year</a>
                                            <a href="#" style={{ "margin-right": "25px", "color": "black" }}>This week</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="">

                                    <Loanperoformance />
                                </div>
                            </div>
                        </div>


                    </div>



                </div>

            </div>
        );
    }
}

export default commercial;