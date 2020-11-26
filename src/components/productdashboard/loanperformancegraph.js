import React, { Component } from 'react';
import Chart from 'react-apexcharts'
class loanperformancegraph extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            options: {
                chart: {
                  id: "basic-bar",
                
                },
                xaxis: {
                  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                }
              },
              series: [
                {
                  name: "series-1",
                  data: [80, 40, 60, 20, 30, 90, 10, 25,55,60,15,30]
                }
              ]
        }
    }
    



    render() {
        return (
            <div>
                 <div className="app">
        <div className="row">
          <div className="mixed-chart" >

            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              width='95%'
              height="200px"
            
              
            />

          </div>
        </div>
      </div>
            </div>
        );
    }
}

export default loanperformancegraph;