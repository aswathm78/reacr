import { APIS } from './apiFactory'
import { POST_HEADER } from './apiHeader'

export const getCustomerApplicationLead = (callBack)=>{
  // console.log(APIS.GET_CUSTOMER_LEADS +"?agentId="+localStorage.getItem("agentId")+"&pageNumber=1&noOfEntry=10")
  fetch(APIS.GET_CUSTOMER_LEADS +"?agentId="+localStorage.getItem("agentId")+"&pageNumber=1&noOfEntry=10")
  .then(res => res.json())
  .then(json => {
    callBack(json)
  })
}


export const userLoginApi = (loginData, callBack) => {
  var data = {
    emailId: loginData.emailId,
    password: loginData.password,
    location: loginData.location
  }
  console.log(data)
  fetch(APIS.LOGIN_AGENT, {
    method: 'POST',
    headers: POST_HEADER,
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(json => {
      callBack(json)
    })
}

export const createCustomerApi = (customerData, callBack) => {
  var data = {
    agentId: localStorage.getItem("agentId"),
    identificationNo: customerData.identificationNumber,
    emailId: customerData.emailId,
    mobileNo: customerData.mobileNumber
  }
  console.log(data)
  fetch(APIS.CREATE_CUSTOMER, {
    method: 'POST',
    headers: POST_HEADER,
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(json => {
      callBack(json)
    })
}
export const verifyOtp = (otp,customerId, callBack) => {
  var data = {
    customerId: customerId,
    otp: otp
  }
  console.log(data)
  fetch(APIS.VERIFY_OTP, {
    method: 'POST',
    headers: POST_HEADER,
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(json => {
      callBack(json)
    })
}
export const customerOnbaordingApi = (customerData, callBack) => {
  var data = {
    customerId: customerData.customerId,
    companyName: customerData.companyName,
    commercialRegNo: customerData.commercialRegNo,
    ibanNo: customerData.ibanNo,
    fundingAmount: customerData.fundingAmount,
    totalMontlyRevenue: customerData.totalMontlyRevenue,
    purposeOfFunding: customerData.purposeOfFunding,
    noOfBranches: Number(customerData.noOfBranches),
    revenueVsAvgThreeMonth: customerData.revenueVsAvgThreeMonth,
    revenueTrendThreeMonth: customerData.revenueTrendThreeMonth,
    durationOfFacilityWithFodex: customerData.durationOfFacilityWithFodex,
    pecentCardOperation: customerData.pecentCardOperation,
    notes: customerData.notes
  }
  console.log(data)
  fetch(APIS.SAVE_CUSTOMER_DETAIL, {
    method: 'POST',
    headers: POST_HEADER,
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(json => {
      callBack(json)
    })
}

export const companyDetailApi = (companyId, callBack) => {
    fetch(APIS.GET_COMPANY_DETAIL + companyId)
      .then(res => res.json())
      .then(json => {
        callBack(json)
      })
     
  }

  export const thakomDetailApi = (companyId, callBack) => {
    fetch(APIS.GET_TAHAKOM_DETAIL + companyId)
      .then(res => 
        res.json()
      )
      .then(json => {
        callBack(json)
      }).catch(err=>callBack(null))
  }

  export const getWathqDetailApi = (companyId, callBack) => {
    fetch(APIS.GET_WATHQ_DETAIL + companyId)
    .then(res => 
      res.json()
    )
    .then(json => {
      callBack(json)
    }).catch(err=>callBack(null))
  }

  export const getWathqAddressDetailApi= (companyId, callBack) => {
    fetch(APIS.GET_WATHQ_ADDRESS_DETAIL + companyId)
    .then(res => 
      res.json()
    )
    .then(json => {
      callBack(json)
    }).catch(err=>callBack(null))
  }

  export const documentDetailApi = (companyId, callBack) => {
    console.log(APIS.GET_USER_DOCUMENTS + companyId)
    fetch(APIS.GET_USER_DOCUMENTS + companyId)
    .then(res => 
      res.json()
    )
    .then(json => {
      callBack(json)
    }).catch(err=>callBack(null))
     
  }
  export const uploadDocument = (imageFile,customerId, callBack) => {
    var self = this
    return new Promise((resolve, reject) => {
      var self = this
      let imageFormData = new FormData()
      imageFormData.append('docType', imageFile.docType)
      imageFormData.append('uploadFile', imageFile.uploadFile)
      imageFormData.append('customerId', customerId)
      imageFormData.append('type', imageFile.fileType)

      var xhr = new XMLHttpRequest()
      xhr.open('post', APIS.UPLOAD_DOCUMENTS, true)
      xhr.onload = function () {
        if (this.status == 200) {
          resolve(this.response)
          callBack(JSON.parse(this.response))
        } else {
          reject(this.statusText)
        }
      }
      xhr.send(imageFormData)
    })
  }

  export const getLanguageApi = (language, callBack) => {
    console.log(APIS.GET_LANGUAGE_API + language)
    fetch(APIS.GET_LANGUAGE_API + language)
      .then(res => res.json())
      .then(json => {
        callBack(json)
      })
     
  }