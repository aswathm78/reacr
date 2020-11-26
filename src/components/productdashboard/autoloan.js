import React, { Component } from 'react';


import './loans.css'




import Loanperoformance from './loanperformancegraph'
//import Emistatus from './emichart'
//import Loanfstsection from './loanfstsection'








class autoloan extends Component {
    constructor(props) {
        super(props)

        this.state = {

          

        }
    }
  
   

    render() {
      
         

        return (
            <div>
                <div className="container loandashboardpadding">
                    <div className="row">
                
                      
                            {/* <Loanfstsection/> */}
                      

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

export default autoloan