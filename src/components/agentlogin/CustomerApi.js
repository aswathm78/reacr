
import config from '../../assets/config/config';
import axios from 'axios';
class CustomerApiClass {





    checkCustomer = async (stateData) => {
        let fieldArray = stateData;
        const headerConfig = {
            headers: { Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token') },
        };

        try {
            const response = await axios.get(`http://122.166.172.240:3031/api/customers?appId.equals=` + fieldArray.ninId, headerConfig);
            console.log(response,"check customer")
            console.log(response.data.length)
            if (response.data.length == 0) {
                return true;
            }
            else {

                fieldArray['customerId'] = response.data[0].id
                window.sessionStorage.setItem('TAHKUM_CUSTOMRE_DATA', JSON.stringify(fieldArray));
                window.sessionStorage.setItem('DATA_TO_UPDATE', JSON.stringify(response.data[0]));
                return false
            }

        } catch (error) {
            console.log(error);
            return false;
        }
    }


    addCustomer = async (stateData) => {
        console.log("add Customer")
        let fieldArray = stateData;
        let reqData = {
            "accommodationType": "",
            "accountNo": "",
            "appId": fieldArray['ninId'],
            "assetValue": 0,
            "bvn": "",
            "casaAccountNo": "",
            "cgCompanyName": "",
            "city": fieldArray['city'],
            "compId": "",
            "companyId": 0,
            "companyName": "",
            "country": "",
            "creditCardsLimits": 0,
            "currency": "SAR",
            "dateOfJoining": fieldArray['dateOfJoining'],
            "dateofBirth": fieldArray['dateOfBirthG'],
            "designation": "",
            "directManagerEmail": "",
            "directManagerExtnNo": "",
            "directManagerName": "",
            "directManagerTelNo": "",
            "duplicateFound": "",
            "emailId": "",
            "emailsOTP": 0,
            "employerName": fieldArray['employerName'],
            "employmentType": "",
            "expiryDate": "2020-11-10",
            "familyArabicName": fieldArray['arabicfamilyname'],
            "familyName": fieldArray['familyName'],
            "financePremium": fieldArray['financePremium'],
            "financingInstallments": 0,
            "firstName": fieldArray['firstName'],
            "firstNameArabic": fieldArray['arabicfirstname'],
            "gender": "M",
            "homeFinancePremium": 0,
            "idIssueDate": "2020-11-10",
            "idIssueplace": fieldArray['idIssuePlace'],
            "idNumber": "",
            "idType": "NID",
            "isCoApplicant": true,
            "isCustomer": "",
            "joiningDate": "2020-11-10",
            "lastName": "",
            "martialStatus": "",
            "middleName": fieldArray['englishSecondName'],
            "mobileNumber": fieldArray['mobileNumber'],
            "mobileOTP": 0,
            "moduleFlag": "",
            "monthlyAdditionalIncome": 0,
            "monthlyHomeRent": 0,
            "monthlySalary": fieldArray['monthlySalary'],
            "nameOfEmployer": fieldArray['nameOfEmployer'],
            "nationalAddress": fieldArray['address1'] + " " + fieldArray['address2'],
            "nationality": fieldArray['nationality'],
            "natureOfBusiness": "",
            "noOfYearsInProfession": 0,
            "noofchildren": fieldArray['noofchildren'],
            "numofDpdntChildren": fieldArray['noofchildren'],
            "numofdpdntSpouse": fieldArray['numofdpdntSpouse'],
            "obligationsMonthly": 0,
            "occupancyStatus": "",
            "otpVerified": true,
            "password": "123456",
            "percentOfShareholding": 0,
            "placeOfStay": "1234444",
            "poBox": fieldArray['poBox'],
            "productcode": "MURR",
            "province": fieldArray['province'],
            "regAnyStatuotaryAuthority": "",
            "registrExpiryDate": "2020-11-10",
            "registrationDate": "2020-11-10",
            "registrationNumber": "",
            "relatedemployer": "",
            "retiredage": 0,
            "retsalcreditanb": "",
            "salcreditanb": "",
            "secondNameArabic": fieldArray['arabicfathername'],
            "sector": "",
            "serviceinmonths": fieldArray['serviceinmonths'],
            "status": "",
            "streetName": fieldArray['street'],
            "subSector": "Riyat",
            "thirdNameArabic": fieldArray['arabicfamilyname'],
            "totalExperience": 0,
            "typeOfEmployment": "",
            "userId": "",
            "userRole": "",
            "userType": "",
            "zipCode": fieldArray['zipcode']
        }
        const headerConfig = {
            headers: { Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token') },
        };

        const response = await axios.post('http://122.166.172.240:3031/api/customers', reqData, headerConfig)
        console.log("customerResponse",response)
        if (response.status == 200) {
            
            fieldArray['customerId'] = response.data.id
            fieldArray['mobileNumber'] = fieldArray['mobileNumber']
            console.log("fieldArray",fieldArray)
            await window.sessionStorage.setItem('CUSTOMRE_DATA_REQ', JSON.stringify(fieldArray));
            await window.sessionStorage.setItem('TAHKUM_CUSTOMRE_DATA', JSON.stringify(fieldArray));

            return true
        }
        else {
            return false
        }


    }


    updateCustomer = async (stateData,existingData) => {
        console.log("update Customer",stateData)
        let fieldArray = stateData;
        let reqData = {
            "id": fieldArray['customerId'],
            "accommodationType": existingData["accommodationType"],
            "accountNo": "",
            "appId": fieldArray['ninId'],
            "assetValue": 0,
            "bvn": "",
            "casaAccountNo": "",
            "cgCompanyName": fieldArray['companynameL2'],
            "city": fieldArray['city'],
            "compId": "",
            "companyId": 0,
            "companyName": "",
            "country": existingData["country"],
            "creditCardsLimits": existingData["creditCardsLimits"],
            "currency": existingData["currency"],
            "dateOfJoining": fieldArray['dateOfJoining'],
            "dateofBirth": fieldArray['dateOfBirthG'],
            "designation": existingData["designation"],
            "directManagerEmail": "",
            "directManagerExtnNo": "",
            "directManagerName": "",
            "directManagerTelNo": "",
            "duplicateFound": "",
            "emailId": "",
            "emailsOTP": 0,
            "employerName": existingData['employerName'],
            "employmentType": existingData["employmentType"],
            "expiryDate": "2020-11-10",
            "familyArabicName": fieldArray['arabicfamilyname'],
            "familyName": fieldArray['familyName'],
            "financePremium": existingData['financePremium'],
            "financingInstallments": 0,
            "firstName": fieldArray['firstName'],
            "firstNameArabic": fieldArray['arabicfamilyname'],
            "gender": "M",
            "homeFinancePremium": 0,
            "idIssueDate": "2020-11-10",
            "idIssueplace": fieldArray['idIssuePlace'],
            "idNumber": fieldArray['customerId'],
            "idType": "NID",
            "isCoApplicant": true,
            "isCustomer": "",
            "joiningDate": "2020-11-10",
            "lastName": fieldArray['englishThirdName'],
            "martialStatus": "",
            "middleName": fieldArray['englishSecondName'],
            "mobileNumber": fieldArray['mobileNumber'],
            "mobileOTP": 0,
            "moduleFlag": "",
            "monthlyAdditionalIncome": existingData['monthlyAdditionalIncome'],
            "monthlyHomeRent":existingData['monthlyHomeRent'],
            "monthlySalary": existingData['monthlySalary'],
            "nameOfEmployer": existingData['nameOfEmployer'],
            "nationalAddress": fieldArray['address1'] + " " + fieldArray['address2'],
            "nationality": fieldArray['nationality'],
            "natureOfBusiness": "",
            "noOfYearsInProfession": 0,
            "noofchildren": existingData['noofchildren'],
            "numofDpdntChildren": existingData['noofchildren'],
            "numofdpdntSpouse": existingData['numofdpdntSpouse'],
            "obligationsMonthly": existingData['obligationsMonthly'],
            "occupancyStatus": "",
            "otpVerified": true,
            "password": "123456",
            "percentOfShareholding": 0,
            "placeOfStay": "1234444",
            "poBox": existingData['poBox'],
            "productcode": "MURR",
            "province": existingData['province'],
            "regAnyStatuotaryAuthority": "",
            "registrExpiryDate": "2020-11-10",
            "registrationDate": "2020-11-10",
            "registrationNumber": "",
            "relatedemployer": "",
            "retiredage": 0,
            "retsalcreditanb": "",
            "salcreditanb": "",
            "secondNameArabic": fieldArray['arabicfathername'],
            "sector": existingData['sector'],
            "serviceinmonths": existingData['serviceinmonths'],
            "status": "",
            "streetName": existingData['streetName'],
            "subSector": "Riyat",
            "thirdNameArabic": fieldArray['arabicfamilyname'],
            "totalExperience": 0,
            "typeOfEmployment": "",
            "userId": "",
            "userRole": "",
            "userType": "",
            "zipCode": existingData['zipcode']
        }

        console.log("customerUpdate",reqData)

        const headerConfig = {
            headers: { Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token') },
        };

        const response = await axios.put('http://122.166.172.240:3031/api/customers', reqData, headerConfig)
        // console.log(response)
        console.log("customerResponse",response)
        if (response.status == 200) {
            fieldArray['customerId'] = response.data.id
            fieldArray['custId'] = response.data.id
            fieldArray['serviceinmonths'] = existingData.serviceinmonths
            fieldArray['province'] = existingData.province
            fieldArray['street'] = existingData.street
            fieldArray['dateOfJoining'] = existingData.dateOfJoining
            fieldArray['dobLocalDate'] = existingData.dobLocalDate
            fieldArray['employerName'] = existingData.employerName
            fieldArray['financePremium'] = existingData.financePremium
            fieldArray['monthlySalary'] = existingData.monthlySalary
            fieldArray['nameOfEmployer'] = existingData.nameOfEmployer
            fieldArray['noofchildren'] = existingData.noofchildren
            fieldArray['numofdpdntSpouse'] = existingData.numofdpdntSpouse
            fieldArray['mobileNumber'] = fieldArray['mobileNumber']
            await window.sessionStorage.setItem('CUSTOMRE_DATA_REQ', JSON.stringify(fieldArray));
            console.log("fieldArray that is stored at local",fieldArray)
            await window.sessionStorage.setItem('TAHKUM_CUSTOMRE_DATA', JSON.stringify(fieldArray));
            
            return true
        }
        else {
            return false
        }
    }






}
const CustomerApi = new CustomerApiClass();

export default CustomerApi;