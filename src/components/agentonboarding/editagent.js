import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import {Link} from 'react-router-dom';
import Axios from 'axios'
const EditAgent = () => {
//   console.log('4444444444444444444');
  let history = useHistory();
  const { id } = useParams();
 

  const [agent, setAgent] = useState({
    userid:'',
    firstName:'',
    lastName:'',
    firstNameArabic:'',
    lastNameArabc:'',
    email: '',
    mobileNo: '',
    designation:'',
    designationArabic:'',
    baseLocation:"",
    department:'',
    mobileOtp: '',
    locationMapped: '',
    managerName:'',
    taskPerformed:'',
    id:''

  });

//   const [storeData,setStoreData]= userState({})
  
  const onInputChange = e => {
    setAgent({ ...agent, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  },[]);

  const stores = () => {
    const headerConfig = {
        headers: {
            Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token')
        }
    };

    Axios.get('http://122.166.172.240:3031/api/stores', headerConfig)
        .then(res => {
            this.setState({ storeNames: res.data })

        }).catch(error => console.log(error))


}
stores()
  const onSubmit = async e => {

    const  headerConfig={
      headers:{
       Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token')
    } };

    e.preventDefault();
    await axios.put(`http://122.166.172.240:3031/api/iord-agents`, agent, headerConfig).then(res => console)
    history.push("/business/agents");
    // console.log(agent)
  };

  const loadUser = async () => {
    const  headerConfig={
      headers:{
       Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token')
    } };
    const result = await axios.get(`http://122.166.172.240:3031/api/iord-agents/${id}`, headerConfig)
    setAgent(result.data)
    // console.log(result);
  };
  return (
    <>
 
     
     
        <form onSubmit={e => onSubmit(e)}>
            <div className="row">
              
              <div className="col-sm-4 col-xs-12">
                  <div class="input-wrapper">
                  <input type="text" placeholder="firstName" name="firstName" defaultValue={agent.firstName} onChange={e => onInputChange(e)} />
                      <label for="lname">First Name</label>
                  </div>
              </div>
         
              <div className="col-sm-4 col-xs-12">
                  <div class="input-wrapper">
                  <input type="text" placeholder="lastName" name="lastName" defaultValue={agent.lastName} onChange={e => onInputChange(e)} />
                      <label for="text">Last Name</label>
                  </div>
              </div>
              <div className="col-sm-4 col-xs-12">
                  <div class="input-wrapper">
                  <input type="text" placeholder="designation" name="designation" defaultValue={agent.designation} onChange={e => onInputChange(e)}/>
                      <label for="designation">Designation</label>
                  </div>
              </div>
              
              <div className="col-sm-4 col-xs-12">
                  <div class="input-wrapper">
                  <input type="text" placeholder="firstName" name="firstNameArabic" defaultValue={agent.firstNameArabic} onChange={e => onInputChange(e)} />
                      <label for="lname">First Name (Arabic)</label>
                  </div>
              </div>
         
              <div className="col-sm-4 col-xs-12">
                  <div class="input-wrapper">
                  <input type="text" placeholder="lastName" name="lastNameArabic" defaultValue={agent.lastNameArabc} onChange={e => onInputChange(e)} />
                      <label for="text">Last Name (Arabic)</label>
                  </div>
              </div>
              <div className="col-sm-4 col-xs-12">
                  <div class="input-wrapper">
                  <input type="text" placeholder="designationArabic" name="designationArabic" defaultValue={agent.designationArabic} onChange={e => onInputChange(e)}/>
                      <label for="designationArabic">Designation (Arabic)</label>
                  </div>
              </div>
              {/* <div className="col-sm-4 col-xs-12">
                                        <div className="agent-lablestyle" >
                                            <label>Base Location</label>
                                            <select style={{ backgroundColor: '#f1f0f0 !important' }} name="baseLocation" onChange={e => this.onChange(e)}>
                                                <option> Select an option</option>
                                                {this.state.storeNames.map(x => <option>{x.storeName}</option>)}
                                            </select>

                                        </div>
                                    </div> 
                                    */}
     
     <div className="col-sm-4 col-xs-12">
                  <div class="input-wrapper">
                  <input type="text" placeholder="baseLocation" name="baseLocation" defaultValue={agent.baseLocation} onChange={e => onInputChange(e)} />
                      <label for="baseLocation">baseLocation</label>
                  </div>
              </div>
         
              <div className="col-sm-4 col-xs-12">
                  <div class="input-wrapper">
                  <input type="text" placeholder="department" name="department" defaultValue={agent.department} onChange={e => onInputChange(e)} />
                      <label for="department">department</label>
                  </div>
              </div>
              <div className="col-sm-4 col-xs-12"></div>
              
              
              <div className="col-sm-4 col-xs-12">
                  <div class="input-wrapper">
                  <input type="text" placeholder="locationMapped" name="locationMapped" defaultValue={agent.locationMapped} onChange={e => onInputChange(e)} />
                      <label for="locationMapped">locationMapped</label>
                  </div>
              </div>
         
            
              <div className="col-sm-4 col-xs-12">
                  <div class="input-wrapper">
                  <input type="text" placeholder="managerName" name="managerName" defaultValue={agent.managerName} onChange={e => onInputChange(e)} />
                      <label for="managerName">managerName</label>
                  </div>
              </div>
            
              <div className="col-sm-4 col-xs-12">
                  <div class="input-wrapper">
                  <input type="text" placeholder="taskPerformed" name="taskPerformed" defaultValue={agent.taskPerformed} onChange={e => onInputChange(e)} />
                      <label for="taskPerformed">taskPerformed</label>
                  </div>
              </div>
              <div className="col-sm-4 col-xs-12">
                                    <div className="input-wrapper" style={{minWidth:'100%!important'}} >
                                        <input  type="number" id="mobileNo"  name="mobileNo" defaultValue={agent.mobileNo} onChange={e => this.onInputChange(e)} placeholder="mobile no" />
                                        <label for="mobileNo">mobile No</label>
                                  </div>
                                </div>
                                <div className="col-sm-4 col-xs-12">
                                    <div className="input-wrapper">
                                        <input type="email" id="email"  name="email" onChange={e => this.onInputChange(e)} defaultValue={agent.email}  placeholder="Email"/>
                                        <label for="email">email</label>
                                        {/* <i style={{color:'red',fontSize:'1.5rem'}}>{this.state.errorMsgs.email !== '' ? this.state.errorMsgs.email:null}</i> */}
                                    </div>
                                </div>
                                <div className="col-sm-4 col-xs-12">
                                    <div className="input-wrapper">
                                        <input type="password" id="password"  name="password" onChange={e => this.onInputChange(e)} defaultValue={agent.password}  placeholder="password"/>
                                        <label for="password">password</label>
                                        {/* <i style={{color:'red',fontSize:'1.5rem'}}>{this.state.errorMsgs.email !== '' ? this.state.errorMsgs.email:null}</i> */}
                                    </div>
                                </div>
            </div>
                           
          
               <div className="row">
                                <div className="col-sm-12 col-xs-12">
                                
          <button  className="agent-savebtn" onClick={e => agent.id !== '' ? onSubmit(e): null}>{agent.id !=='' ?'Update Agent':'Loading'}</button>
      </div>
       </div>
        </form>

  
    </>
 );
};

export default EditAgent;