var illegalChars = /\W/ // allow letters, numbers, and underscores
var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
var pattern = /(^([a-zA-Z]{5})([0-9]{4})([a-zA-Z]{1})$)/
var specialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
// var passCheck = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
var passCheck = /^(?=.*[\d])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&.])[\w!@#$%&.]{8,40}$/

// export const Emailvalidate = agentData => {
//   if (agentData.tittle == '') {
//     return { status: false, msg: 'Please enter your Email', field: 'emailId' }
//   }
//   //  else if (!filter.test(agentData)) {
//   //     return { status: false, msg: 'Please enter a valid Email', field: 'emailId' };
//   // }
//   return { status: true, msg: '' }
// }

export const loginValidation = loginData => {
  if (loginData.emailId == '') {
    return { status: false, msg: 'Please enter your Email', field: 'emailId' }
  } else if (!filter.test(loginData.emailId)) {
    return {
      status: false,
      msg: 'Please enter a valid Email',
      field: 'emailId'
    }
  } else if (loginData.password == '') {
    return {
      status: false,
      msg: 'Please enter your password',
      field: 'password'
    }
  } else if (loginData.password.length <= 5) {
    return {
      status: false,
      msg: 'Please add at least 5 charachter.',
      field: 'password'
    }
  } else if (loginData.location == '') {
    return {
      status: false,
      msg: 'Please select location.',
      field: 'location'
    }
  }
  return { status: true, msg: '' }
}

export const newCustomerValidation = customerData => {
  if (customerData.identificationNumber == '') {
    return {
      status: false,
      msg: 'Please Enter Identification Number',
      field: 'idNumber'
    }
  } else if (customerData.mobileNumber == '') {
    return {
      status: false,
      msg: 'Please enter Mobile Number.',
      field: 'mobileNumber'
    }
  } else if (customerData.emailId == '') {
    return { status: false, msg: 'Please enter your Email', field: 'emailId' }
  } else if (!filter.test(customerData.emailId)) {
    return {
      status: false,
      msg: 'Please enter a valid Email Id',
      field: 'emailId'
    }
  }
  return { status: true, msg: '' }
}

export const onboardValidation = customerData => {
  if (customerData.companyName == '') {
    return {
      status: false,
      msg: 'Please Enter Company Name',
      field: 'companyName'
    }
  } else if (customerData.commercialRegNo.trim().length == 0 ||'') {
    return {
      status: false,
      msg: 'Please enter Commercial Reg No.',
      field: 'commercialRegNo'
    }
  } else if (customerData.ibanNo.trim().length == 0 ||'') {
    return {
      status: false,
      msg: 'Please enter Iban No.',
      field: 'ibanNo'
    }
  } else if (customerData.fundingAmount.trim().length == 0 ||'') {
    return {
      status: false,
      msg: 'Please enter Funding Amount',
      field: 'fundingAmount'
    }
  }else if (customerData.revenueTrendThreeMonth.trim().length == 0 ||'') {
    return {
      status: false,
      msg: 'Please enter revenue Trend',
      field: 'revenueTrendThreeMonth'
    }
  }
   else if (customerData.revenueVsAvgThreeMonth.trim().length == 0 ||'') {
    return {
      status: false,
      msg: 'Please enter revenue Vs Avg',
      field: 'revenueVsAvgThreeMonth'
    }
  }  else if (customerData.noOfBranches.trim().length == 0 ||'') {
    return {
      status: false,
      msg: 'Please enter Branches',
      field: 'noOfBranches'
    }
  } else if (customerData.pecentCardOperation.trim().length == 0 ||'') {
    return {
      status: false,
      msg: 'Please enter Percentcard Operation',
      field: 'pecentCardOperation'
    }
  } else if (customerData.durationOfFacilityWithFodex.trim().length == 0 ||'') {
    return {
      status: false,
      msg: 'Please enter Duration Fodex',
      field: 'durationOfFacilityWithFodex'
    }
  } else if (customerData.totalMontlyRevenue.trim().length == 0 ||'') {
    return {
      status: false,
      msg: 'Please enter Monthly Revenue.',
      field: 'totalMontlyRevenue'
    }
  } else if (customerData.purposeOfFunding.trim().length == 0 ||'') {
    return {
      status: false,
      msg: 'Please enter Funding Purpose',
      field: 'purposeOfFunding'
    }
  }
  //  else if (customerData.notes.trim().length == 0 ||'') {
  //   return {
  //     status: false,
  //     msg: 'Please enter Notes',
  //     field: 'notes'
  //   }
  // }
  return { status: true, msg: '' }
}
