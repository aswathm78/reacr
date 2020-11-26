import React from 'react'
import SideImage from './basicdetail.png'

const Popup=({viewdashboard})=>(
  <div className='background-blur'> 
  <div className="pop-display-main">
    <div className="content-pop">
      <div className="">
       
      </div>
      <div className="modal-body">
        <div className='row'>
            <div className='col-sm-6 col-xs-12' style={{marginTop:'20px'}}>
                <img src={SideImage}/>
                {/* <button type="button" className="signup-btn" style={{width:'200px',padding:'10px'}}>View DashBoard</button> */}

            </div>
            <div className='col-sm-6 col-xs-12'style={{marginTop:'20px',textAlign:'center'}}>
                Duplicate Entry Are Found Please Wait For Adminstrator Descision To Move Forward. 
            </div>

        </div>
      </div>
      <div className="text-center">
        <button type="button" className="signup-btn" style={{width:'150px',padding:'10px',background:'red',margin:'10px'}} onClick={viewdashboard}>Close</button>
        &nbsp;
      </div>
    </div>
    </div>
    </div>
)
export default Popup

