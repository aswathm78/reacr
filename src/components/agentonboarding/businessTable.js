import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Axios from 'axios';
import {Container} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';



class Addagenttable extends React.Component {
    constructor () {
        super();

        this.state ={
            
                firstName: '',
                lastName: '',
                email: '',
                password:'',
                id: '',
                address: '',
                city: '',
                stateStr:'',
                storeLocation:'',
                zipcode: '',
                drivinglicansenum: '',
                vendor: '',
                agentType:'',
                personalIdentificationNumber: '',
                status:'',
                results:[]
        
        }

    }
    componentDidMount () {

      const  headerConfig={
        headers:{
         Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token')
      } };

      Axios.get('http://122.166.172.240:3031/api/iord-agents', headerConfig).then((response) => {
           const fetchedData = [];

           for (let key in response.data) {
               fetchedData.push({...response.data[key], id: key});
           }
           this.setState ({
               results:fetchedData,
           });
           console.log(this.state.results)
       });
    }

   

    logout = () => {
        this.props.history.push('/agentonboarding/adminsignin');
      };

      edit = (e) => {
        this.props.history.push('/agent/edit/$(user.id)');
      };

 render() {
    return (
        <Container fluid>


<div className="col-sm-12">

      <Navbar bg="light" expand="lg">
      <div className="card-body" style={{ height: '10vh', borderRadius: '10px'}}>
<div  width="150" height="50"></div>
</div>


<button  onClick={e => this.newAgent(e)} className="dfs-savebtn" >
  Add Agent
</button>
    </Navbar>

    </div>

        
        <div className="col-sm-12" style={{display:'flex'}}>
              <table
                id="dtBasicExample"
                className="table table-striped table-bordered table-sm"
                style={{ textAlign: 'right' }}
                cellspacing="0"
                width="100%"
               
              >
                <thead style={{background:"#A9CCE3 "}}>
                  <tr>
                    <th className="th-sm">Status</th>
                    <th className="th-sm">First Name</th>
                    <th className="th-sm">Last Name</th>
                    <th className="th-sm">Email</th>
                    <th className="th-sm"> Id</th>
                    <th className="th-sm">Address</th>
                    <th className="th-sm">State</th>
                    
                    <th className="th-sm">City</th>
                    <th className="th-sm">Country</th>
                    <th className="th-sm">Zip</th>
                
                    
                    <th className="th-sm">Driving License Number</th>
                    <th className="th-sm">Password</th>
                    <th className="th-sm">Vendor</th>
                    <th className="th-sm">Agent Type</th>
                    

                  </tr>
                </thead>
                <tbody>
                  {this.state.results.map(appData => {
                    return (
                      <tr>
                      <td>{appData.status}</td>
                        <td>{appData.firstName}</td>
                        <td>{appData. lastName}</td>
                        <td>{appData.email}</td>
                        <td>{appData.id}</td>
                        <td>{appData.address}</td>
                        <td>{appData.stateStr}</td>
                        <td>{appData.city}</td>
                        <td>{appData.storeLocation}</td>
                        <td>{appData.zipcode}</td>
                        
                        <td>{appData.drivinglicansenum}</td>
                        <td>{appData.password}</td>
                        <td>{appData.vendor}</td>
                        <td>{appData.agentType}</td>

                 <td><Link  to={`./edit/${appData.id}`} className="dfs-savebtn" style={{width:'95%'}} >Edit</Link></td>
                      </tr>
                    );
                  })}
                </tbody> 
              </table>
            </div>

        </Container>
      
      

      );
 }
  
}

export default Addagenttable;
