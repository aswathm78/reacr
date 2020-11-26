import React, { Component } from 'react'
import './agentnewStyle.scss'
import Logo from '../smelogin/maalem-logo.png'
import Language from '../smelogin/demo.json'
import { Route, Redirect } from 'react-router-dom'
// import { hashHistory } from 'react-router;'

export default class agentdashboard extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  componentWillMount(){
    // console.log(localStorage.getItem("agentLoginStatus"))
    // console.log(typeof(localStorage.getItem("agentLoginStatus")))
    // console.log(window.location.origin)
    if(localStorage.getItem("agentLoginStatus")=='false'){
      window.location.href = window.location.origin+"/agent/sme/signin";

    }
  }

  // componentDidMount(){
  //   if (localStorage.getItem('css') == 'english') {
  //     this.props.changeLanguage('en')
  //     localStorage.setItem('css','english')
  //   } else if (localStorage.getItem('css') == 'arabic') {
  //     this.props.changeLanguage('ar')
  //     localStorage.setItem('css','arabic')

  //   }
  // }

  changeLanguage = (e) =>{
    // window.location.reload(false)
    console.log(e)
    if (e.target.value == 'en') {
      this.props.changeLanguage('ar')
    } else if (e.target.value == 'ar') {
      this.props.changeLanguage('en')
    }else if(e.target.value == 'logout'){
      localStorage.setItem('agentLoginStatus','false')
      window.location.href = window.location.origin+"/agent/sme/signin";    }
  }

  render () {
    return (
     
      // <div className='container-fluid arabicCss' >
      //   <div className='col-sm-2 col-xs-12 main-image'>
      //     <img src={Logo} style={{ maxWidth: '133px' }} />
      //   </div>
      //   <div className='col-sm-10 col-xs-12'>
      //     <div className='main-card'>
      //       <div>
      //         <div
      //           className='col-sm-3 col-md-3 col-xs-12'
      //           style={{ textAlign: 'center' }}
      //         >
      //           <div style={{ fontSize: '12px', padding: '17px' }}>
      //             Help:0123456789
      //           </div>
      //         </div>
      //         <div
      //           className='col-sm-4 col-md-4 col-xs-12'
      //           style={{
      //             textAlign: 'center',
      //             whiteSpace: 'nowrap',
      //             padding: '17px'
      //           }}
      //         >
      //           <div style={{ fontWeight: '600' }}>
      //             {this.props.textDisplay}
      //           </div>
      //         </div>
      //         <div className='col-sm-5 col-md-5  col-xs-12'>
      //           <p>
      //             <select
      //               style={{
      //                 padding: '13px',
      //                 float: 'right',
      //                 background: '#fff'
      //                 ,cursor:'pointer'
      //               }}
      //             >
      //               <option>Junaid Qazi</option>
      //             </select>
      //             <div className=''>
      //               <span
      //                 style={{ padding: '17px', float: 'right',cursor:'pointer' }}
      //                 class='glyphicon glyphicon-envelope'
      //               ></span>
      //               <span
      //                 style={{ padding: '17px', float: 'right',cursor:'pointer' }}
      //                 class='glyphicon glyphicon-bell'
      //               ></span>
      //             </div>
      //           </p>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
      <div className='container-fluid'>
      <div className={ localStorage.getItem('css')=='en'?'englishCss': localStorage.getItem('css')=='ar'?'arabicCss':'englishCss' }>
        {/* {!localStorage.getItem("agentLoginStatus")?<Redirect to= />:""} */}
        <div className='top-image'>
          <div className='col-sm-2 col-xs-12 main-image'>
            <img src={Logo} style={{ maxWidth: '133px' }} />
          </div>
        </div>
        <div className='col-sm-10 col-xs-12'>
          <div className='main-card'>
            <div>
              <div
                className='col-sm-3 col-md-3 col-xs-12'
                style={{ textAlign: 'center',minHeight:0 }}
              >
                <div
                  className=''
                  style={{
                    fontSize: '16px',
                    padding: '17px',
                    fontWeight: '600'
                  }}
                >
                  {this.props.help}
                </div>
              </div>
              <div
                className='col-sm-4 col-md-4 col-xs-12'
                style={{
                  textAlign: 'center',
                  whiteSpace: 'nowrap',
                  padding: '17px'
                }}
              >
                <div style={{ fontWeight: '600' }}>
                  {this.props.textDisplay}
                </div>
              </div>
              <div className='col-sm-5 col-md-5  col-xs-12'>
                <p>
                  <select
                    style={{
                      padding: '13px',
                      float: 'right',
                      background: '#fff',
                      cursor: 'pointer',
                      width:'initial'
                    }}
                    onChange={e => this.changeLanguage(e)}
                  >
                    <option>{localStorage.getItem('loginUser')}</option>
                    <option value='ar'>English</option>
                    <option value='en'>عربى</option>
                    <option value='logout'>Logout</option>

                  </select>
                  <div className=''>
                    {/* <span
                      style={{
                        padding: '17px',
                        float: 'right',
                        cursor: 'pointer'
                      }}
                      class='glyphicon glyphicon-envelope'
                    ></span> */}
                    {/* <span
                      style={{
                        padding: '17px',
                        float: 'right',
                        cursor: 'pointer'
                      }}
                      class='glyphicon glyphicon-bell'
                    ></span> */}
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='down-image'>
          <div className='col-sm-2 col-xs-12 main-image'>
            <img src={Logo} style={{ maxWidth: '133px' }} />
          </div>
        </div>
      </div>
      </div>
    )
  }
}
