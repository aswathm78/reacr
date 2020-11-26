import React, { Component } from 'react';
import Chart from 'react-apexcharts'
class emichart extends Component {
    constructor(props) {
        super(props);
    
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
              data: [30, 40, 45, 50, 49, 60, 70, 80,90,95,98,100]
            }
          ]
        }
    }
    
    render() {
      
        
        return (
            <div>
                 <div className="app">
        <div className="row">
          <div className="mixed-chart">

            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
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

export default emichart;