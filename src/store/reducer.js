import { combineReducers } from "redux";
import * as actionTypes from "./action";

const initialState = {
  language: 'en',
  loanoverview: '',
  loanoverdue: '',
  transcationdetails: '',
  repaymentdata: '',
  repaymentstrapidata: '',
  beneficiariesdata: '',
  DisbursementData: '',
  autoloanProductdata: '',
  consumerloanProductdata: '',
  commercialloanProductdata: '',
  smeloanProductdata: '',
  loanInformationDetails: '',
  profiledetailsdata: '',
  addressdetailsdata: '',
  loanuserinfodata: '',
  LoandetailsData: '',
  onboardingpersonal:'',
  onlineapplicationdetails:'',
  error: false


};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELECT_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };

    case actionTypes.CUSTOMER_LOAN_DETAILS_SUCCESS:
      return {
        ...state,
        loanoverview: action.response[0].data,
        loanoverdue: action.response[1].data,
        transcationdetails: action.response[2].data !== "" ? action.response[2].data['pslist'].slice(0, 8):null,
        // repaymentdata:action.response[3].data['pmlist'],

        error: false

      };

    case actionTypes.CUSTOMER_LOAN_DETAILS_REQUEST:
      return {
        ...state,
        loanoverview: '',
        loanoverdue: '',
        transcationdetails: '',
        // repaymentdata:'',
        error: false

      };


    case actionTypes.CUSTOMER_LOAN_DETAILS_FAILURE:
      return {
        ...state,
        loanoverview: '',
        loanoverdue: '',
        transcationdetails: '',
        //   repaymentdata:'',
        error: true

      };

    case actionTypes.LOAN_PRODUCT_DETAILS_SUCCESS:

      return {
        ...state,
        autoloanProductdata: action.response[0].data,
        consumerloanProductdata: action.response[1].data,
        commercialloanProductdata: action.response[2].data,
        smeloanProductdata: action.response[3].data,


        error: false

      }

    case actionTypes.LOAN_PRODUCT_DETAILS_REQUEST:
      return {
        ...state,
        autoloanProductdata: '',
        consumerloanProductdata: '',
        commercialloanProductdata: '',
        smeloanProductdata: '',


        error: false
      }

    case actionTypes.LOAN_PRODUCT_DETAILS_FAILURE:
      return {
        ...state,
        autoloanProductdata: '',
        consumerloanProductdata: '',
        commercialloanProductdata: '',
        smeloanProductdata: '',
        error: true
      }


    case actionTypes.REPAYMENT_DETAILS_SUCCESS:
      return {
        ...state,
        repaymentdata: action.response[0].data['pmlist'],
        repaymentstrapidata: action.response[1].data,

        error: false
      }

    case actionTypes.REPAYMENT_DETAILS_REQUEST:
      return {
        repaymentdata: '',
        repaymentstrapidata: '',
        error: false
      }

    case actionTypes.REPAYMENT_DETAILS_FAILURE:
      return {
        repaymentdata: '',
        repaymentstrapidata: '',
        error: false
      }

    case actionTypes.BENEFICIARY_DETAILS_SUCCESS:
      return {
        ...state,
        beneficiariesdata: action.response[0].data['lbList'],
        DisbursementData: action.response[1].data['ddlist'],
        error: false
      }

    case actionTypes.BENEFICIARY_DETAILS_REQUEST:
      return {
        beneficiariesdata: '',
        DisbursementData: '',
        error: false
      }

    case actionTypes.BENEFICIARY_DETAILS_FAILURE:
      return {
        beneficiariesdata: '',
        DisbursementData: '',
        error: true
      }
    case actionTypes.LOANINFORMATION_DETAILS_SUCCESS:
      console.log('000 --- reducer laoninformation success')
      return {
        loanInformationDetails: action.response.data
      }

      
      
      case actionTypes.LOANINFORMATION_DETAILS_REQUEST:
        console.log('000 --- reducer laoninformation request')
        return {
          loanInformationDetails: '',
          error: false
        }
        
        case actionTypes.LOANINFORMATION_DETAILS_FAILURE:
          console.log('000 --- reducer laoninformation failure')
          return {
            loanInformationDetails: '',
        error: true
      }

      
      case actionTypes.PROFILE_DETAILS_SUCCESS:
      return {
        profiledetailsdata: action.response[0].data.general,
        addressdetailsdata: action.response[1].data.addressListfield,
        error: false
      }

    case actionTypes.PROFILE_DETAILS_REQUEST:
      return {
        profiledetailsdata: '',
        addressdetailsdata: '',
        error: false
      }

    case actionTypes.PROFILE_DETAILS_FAILURE:
      return {
        profiledetailsdata: '',
        addressdetailsdata: '',
        error: true
      }



    case actionTypes.YAKEEN_DETAILS_SUCCESS:
      console.log('000 --- reducer loan for fun success')
      return {
        
        
        loanuserinfodata: action.response[0].data.GetCitizenInfo[0],
        
        LoandetailsData: action.response[1].data.Loandetails[0],
        error: false
      }
      
      case actionTypes.YAKEEN_DETAILS_REQUEST:
        console.log('000 --- reducer loan for fun request')
        return {
          loanuserinfodata: '',
        LoandetailsData: '',
        error: false
      }
      
      case actionTypes.YAKEEN_DETAILS_FAILURE:
        console.log('000 --- reducer loan for fun fail')
      return {
        loanuserinfodata: '',
        LoandetailsData: '',
        error: true
      }

        //----------onboardingpersonal---------------------//
      case actionTypes.ONBOARDING_DETAILS_SUCCESS:
      return {

        onboardingpersonal:action.response[0].data.GetCitizenInfo[0],
     
        error: false
      }

    case actionTypes.ONBOARDING_DETAILS_REQUEST:
      return {
        onboardingpersonal:'',
        error: false
      }

    case actionTypes.ONBOARDING_DETAILS_FAILURE:
      return {
        onboardingpersonal:'',
        error: true
      }

    
    
    case actionTypes.ONLINEAPPLICATION_DETAILS_SUCCESS:
      return {
        onlineapplicationdetails:action.response[0].data,
        error:true
      }

      case actionTypes.ONLINEAPPLICATION_DETAILS_REQUEST:
      return {
        onlineapplicationdetails:'',
        error:true
      }

      case actionTypes.ONLINEAPPLICATION_DETAILS_FAILURE:
      return {
        onlineapplicationdetails:'',
        error:false
      }


    default:
      return state;
  }
};



export default combineReducers({
  destroyOnUnmount: false,
  reducer,
});
