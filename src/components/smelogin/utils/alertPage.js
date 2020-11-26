import React from 'react'
import '../../smelogin/agentnewStyle.scss'
const popUp =({successMsg,failureMsg,status})=>(
    <div class="container arabicCss popupMain animated slideInLeft" style={{width:'fit-content'}}>
        <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
  {successMsg?
  <div class=" alert alert-success" >
    <strong>{status}</strong> 
  </div>
  :""}
  {failureMsg?
  <div class="alert alert-danger">
    <strong>{status}</strong> 
  </div>
  :""}
</div>
)
export default popUp