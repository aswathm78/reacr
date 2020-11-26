import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import {Link} from 'react-router-dom';

const EditBusinessDetails = (props) => {
  console.log(props,'this is id for business details edit');
  let history = useHistory();
  const { id } =1
 

  let [businessDetailsData, setBusinessDetails] = useState({
    
   
    busniessName:'',
    busniessPhone:'',
    feeEndDate:'',
    feeStartDate:'',
    managementFee:'',
    website:'',

  });

  const {  busniessName, busniessPhone, feeEndDate, feeStartDate, managementFee, website } = businessDetailsData;
  
  const onInputChange = e => {
      console.log(e.target.name,'000 ---- ')
      console.log(e.target.value,'000 ---- ')
      console.log(e,'000 ---- ')
    setBusinessDetails({ ...businessDetailsData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  },[]);

  

  const onSubmit = async e => {
    const  headerConfig={ 
        headers: { Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token'),ContentType:`application/json` }
    };
    console.log(businessDetailsData,'chekding')

    e.preventDefault();
    Axios.put('http://122.166.172.240:3031/api/business-partner',businessDetailsData, headerConfig).then(res => {
        console.log('successfully updated man')
    }).catch(error=>console.log(error,'this is the error'))
    history.push("/business/business-details");
  };

  const loadUser = async () => {
    const  headerConfig={
      headers:{
       Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token')
    } };
    const result = await Axios.get(`http://122.166.172.240:3031/api/business-partners/${window.sessionStorage.getItem('agentID')}`, headerConfig)
    setBusinessDetails(result.data[0])
    console.log(result,'this is resute form updateBusinessDetails');
  };
  return (
    <>
 
     {console.log(businessDetailsData,'this si form props')}
     
        <form onSubmit={e => onSubmit(e)}>
            <div className="row">
              
              <div className="col-sm-4 col-xs-12">
                  <div class="input-wrapper">
                  <input type="text" placeholder="businessName" name="businessName" defaultValue={businessDetailsData.businessName} onChange={e => onInputChange(e)} />
                      <label for="lname">Business Name</label>
                  </div>
              </div>
         
              <div className="col-sm-4 col-xs-12">
                  <div class="input-wrapper">
                  <input type="text" placeholder="businessPhone" name="businessPhone" defaultValue={businessDetailsData.busniessPhone} onChange={e => onInputChange(e)} />
                      <label for="text">Business Phone</label>
                  </div>
              </div>
              <div className="col-sm-4 col-xs-12">
                  <div class="input-wrapper">
                  <input type="text" placeholder="feeEndDate" name="feeEndDate" defaultValue={businessDetailsData.feeEndDate}onChange={e => onInputChange(e)}/>
                      <label for="text">feeEndDate</label>
                  </div>
              </div>
            </div>
            <div className="row">
              
              <div className="col-sm-4 col-xs-12">
                  <div class="input-wrapper">
                  <input type="text" placeholder="feeStartDate" name="feeStartDate" defaultValue={businessDetailsData.feeStartDate} onChange={e => onInputChange(e)} />
                      <label for="lname">feeStartDate</label>
                  </div>
              </div>
         
              <div className="col-sm-4 col-xs-12"></div>
              <div className="col-sm-4 col-xs-12">
                  <div class="input-wrapper">
                  <input type="text" placeholder="managementFee" name="managementFee" defaultValue={businessDetailsData.managementFee} onChange={e => onInputChange(e)} />
                      <label for="text"> managementFee</label>
                  </div>
              </div>
            </div>
            <div className="row">
              
              <div className="col-sm-4 col-xs-12">
                  <div class="input-wrapper">
                  <input type="text" placeholder="website" name="website" defaultValue={businessDetailsData.website} onChange={e => onInputChange(e)} />
                      <label for="lname">website</label>
                  </div>
              </div>
         
         </div>
                           
            <div className="row">
              
              <div className="col-sm-4 col-xs-12">
                  <div class="input-wrapper">
                  <input type="text" placeholder="website" name="taxID" defaultValue={businessDetailsData.website} onChange={e => onInputChange(e)} />
                      <label for="lname">TaxID</label>
                  </div>
              </div>
         
         </div>
                           
           <div className="row">
                    <div className="col-sm-12 col-xs-12">
                                
                     <button  className="agent-savebtn" onClick={e => onSubmit(e)}>Update Agent</button>
                    </div>
                 </div>
        </form>

  
    </>
 );
};

export default EditBusinessDetails;