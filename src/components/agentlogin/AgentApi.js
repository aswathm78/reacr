
import config from '../../assets/config/config';
import axios from 'axios';
class CustomerApiClass {


    getNewCustomerLabel() {
        axios.get(config.STRAPI_URL + '/agent-newcustomers').then(res => {
            // this.setState({ newCustomerFields: res.data });
            console.log('newCustomerFields', this.state.newCustomerFields)
            return res.data;
        });
    }

    checkAddress = async (stateData) => {
        let fieldArray = stateData;
        let headerConfig = {
            headers: { Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token') },
        };
        console.log(fieldArray.ninId)
        try {
            const response = await axios.get(`http://122.166.172.240:3031/api/addresses?ninno.equals=` + fieldArray.ninId, headerConfig);
            console.log(response.data)
            if (response.data.length == 0) {
                return true;
            }
            else {

                fieldArray['addressId'] = response.data[0].id
                return false
            }

        } catch (error) {
            console.log(error);
            return false;
        }
    }

    getAddress = async (customerId) => {
        // let fieldArray = stateData;
        let headerConfig = {
            headers: { Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token') },
        };
        // console.log(fieldArray.ninId)
        try {
            const response = await axios.get(`http://122.166.172.240:3031/api/addresses?custId.equals=` +customerId, headerConfig);
            console.log(response.data)
            if (response.data.length == 0) {
                return {};
            }
            else {

                // fieldArray['addressId'] = response.data[0].id
                return response.data[0]
            }

        } catch (error) {
            console.log(error);
            return {};
        }
    }


    addAddress = async (stateData) => {
        let fieldArray = stateData;
        console.log(fieldArray)
        let reqData = {
            "additionalnumber": "",
            "address1": fieldArray['address1'],
            "address2": fieldArray['address2'],
            "buildingnumber": fieldArray['buildingnumber'],
            "city": fieldArray['city'],
            "cityL2": "",
            "cityid": "",
            "compApplId": "",
            "compId": "",
            "companynameL2": "",
            "country": fieldArray['nationality'],
            "custId": fieldArray['customerId'],
            "district": fieldArray['district'],
            "districtL2": "",
            "districtid": "",
            "email": "",
            "governorate": "",
            "governorateL2": "",
            "governorateid": "",
            "isprimaryaddress": "",
            "latitude": "",
            "livingSince": 0,
            "longitude": "",
            "mobileNumber": fieldArray['mobileNumber']!=undefined?fieldArray['mobileNumber']:'',
            "ninno": fieldArray['ninId'],
            "noancredit": "",
            "objlatlng": "",
            "phoneNumber": "",
            "pkaddressid": "",
            "pobox": fieldArray['poBox'],
            "polygonstring": "",
            "postcode": fieldArray['zipcode'],
            "provience": fieldArray['province'],
            "regionid": "",
            "regionname": "",
            "regionnameL2": "",
            "restriction": "",
            "state1": "",
            "street": fieldArray['street'],
            "streetL2": "",
            "title": "",
            "titleL2": "",
            "unitnumber": "",
            "zipcode": fieldArray['zipcode']
        }
        const headerConfig = {
            headers: { Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token') },
        };

        const response = await axios.post('http://122.166.172.240:3031/api/addresses', reqData, headerConfig)

        console.log(response)
        if (response.status == 200 || response.status == 201) {
            console.log(response)
            window.sessionStorage.setItem('CUSTOMRE_DATA_REQ', JSON.stringify(fieldArray));
            return true
        }
        else {
            return false
        }


    }


    updateAddress = async (stateData) => {
        let fieldArray = stateData;
        console.log("in update address")
        console.log("fieldArray For Address", fieldArray)
        let reqData = {
            "id": fieldArray['addressId'],
            "additionalnumber": "",
            "address1": fieldArray['address1'],
            "address2": fieldArray['address2'],
            "buildingnumber": fieldArray['buildingnumber'],
            "city": fieldArray['city'],
            "cityL2": "",
            "cityid": "",
            "compApplId": "",
            "compId": "",
            "companynameL2": "",
            "country": fieldArray['nationality'],
            "custId": fieldArray['customerId'],
            "district": fieldArray['district'],
            "districtL2": "",
            "districtid": "",
            "email": "",
            "governorate": "",
            "governorateL2": "",
            "governorateid": "",
            "isprimaryaddress": "",
            "latitude": "",
            "livingSince": 0,
            "longitude": "",
            "mobileNumber": fieldArray['mobileNumber']!=undefined?fieldArray['mobileNumber']:'',
            "ninno": fieldArray['ninId'],
            "noancredit": "",
            "objlatlng": "",
            "phoneNumber": "",
            "pkaddressid": "",
            "pobox": fieldArray['poBox'],
            "polygonstring": "",
            "postcode": fieldArray['zipcode'],
            "provience": fieldArray['province'],
            "regionid": "",
            "regionname": "",
            "regionnameL2": "",
            "restriction": "",
            "state1": "",
            "street": fieldArray['street'],
            "streetL2": "",
            "title": "",
            "titleL2": "",
            "unitnumber": "",
            "zipcode": fieldArray['zipcode']
        }



        const headerConfig = {
            headers: { Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token') },
        };

        const response = await axios.put('http://122.166.172.240:3031/api/addresses', reqData, headerConfig)
        console.log(response)
        if (response.status == 200 || response.status == 201) {

            window.sessionStorage.setItem('CUSTOMRE_DATA_REQ', JSON.stringify(fieldArray));
            return true
        }
        else {
            return false
        }
    }




    checkCustomer = async (stateData) => {
        let fieldArray = stateData;
        let headerConfig = {
            headers: { Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token') },
        };

        try {
            const response = await axios.get(`http://122.166.172.240:3031/api/customers?appId.equals=` + fieldArray.ninId, headerConfig);
            if (response.data.length == 0) {
                return true;
            }
            else {

                fieldArray['customerId'] = response.data[0].id
                return false
            }

        } catch (error) {
            console.log(error);
            return false;
        }
    }


    getCustomer = async (customerId) => {
        // let fieldArray = stateData;
        let headerConfig = {
            headers: { Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token') },
        };

        try {
            const response = await axios.get(`http://122.166.172.240:3031/api/customers/` +customerId, headerConfig);
            if (response.data.length == 0) {
                return {};
            }
            else {

                return response.data
            }

        } catch (error) {
            console.log(error);
            return {};
        }
    }

    addCustomer = async (stateData) => {
        let fieldArray = stateData;
        let reqData = {
            accommodationType:fieldArray['accomodationType'],
            accountNo: '',
            appId: fieldArray['ninId'],
            assetValue: fieldArray['assetvalue'],
            bvn: '',
            casaAccountNo: '',
            cgCompanyName: '',
            city: fieldArray['city'],
            compId: '',
            companyId: 0,
            companyName: '',
            country: '',
            creditCardsLimits: fieldArray['creditCardsLimits']!=undefined?fieldArray['creditCardsLimits']:0,
            currency: 'SAR',
            dateOfJoining: fieldArray['dateOfJoining'],
            dateofBirth: fieldArray['dobLocalDate'],
            designation: '',
            directManagerEmail: '',
            directManagerExtnNo: '',
            directManagerName: '',
            directManagerTelNo: '',
            duplicateFound: '',
            emailId: '',
            emailsOTP: 0,
            employerName: fieldArray['employerName'],
            employmentType: fieldArray['employmentType'],
            expiryDate: '2020-11-10',
            familyArabicName: fieldArray['arabicfamilyname']!=undefined?fieldArray['arabicfamilyname']:'',
            familyName: fieldArray['familyName'],
            financePremium: fieldArray['financePremium'],
            financingInstallments: 0,
            firstName: fieldArray['firstName'],
            firstNameArabic: fieldArray['arabicfirstname']!=undefined?fieldArray['arabicfirstname']:'',
            gender: 'M',
            homeFinancePremium: fieldArray['homefinance']!=undefined? fieldArray['homefinance']:0,
            idIssueDate: '2020-11-10',
            idIssueplace: '',
            idNumber: '',
            idType: 'NID',
            isCoApplicant: true,
            isCustomer: '',
            joiningDate: '2020-11-10',
            lastName: fieldArray['englishThirdName'] != undefined ? fieldArray['englishThirdName'] : '',
            martialStatus: '',
            middleName: '',
            mobileNumber: fieldArray['mobileNumber'],
            mobileOTP: 0,
            moduleFlag: '',
            monthlyAdditionalIncome: fieldArray['monthlyAdditionalIncome'],
            monthlyHomeRent: fieldArray['monthlyHomeRent'],
            monthlySalary: fieldArray['monthlySalary'],
            nameOfEmployer: fieldArray['employerName'],
            nationalAddress: fieldArray['address1'] + ' ' + fieldArray['address2'],
            nationality: fieldArray['nationality'],
            natureOfBusiness: '',
            noOfYearsInProfession: 0,
            noofchildren: fieldArray['noofchildren'],
            numofDpdntChildren: fieldArray['noofchildren'],
            numofdpdntSpouse: fieldArray['numofdpdntSpouse'],
            obligationsMonthly: fieldArray['obligationsMonthly']!=undefined?fieldArray['obligationsMonthly']:0,
            occupancyStatus: '',
            otpVerified: true,
            password: '123456',
            percentOfShareholding: 0,
            placeOfStay: '1234444',
            poBox: fieldArray['poBox'],
            productcode: 'MURR',
            province: fieldArray['province'],
            regAnyStatuotaryAuthority: '',
            registrExpiryDate: '2020-11-10',
            registrationDate: '2020-11-10',
            registrationNumber: '',
            relatedemployer: '',
            retiredage: 0,
            retsalcreditanb: '',
            salcreditanb: '',
            secondNameArabic: fieldArray['arabicfathername'],
            sector: fieldArray['sector'],
            serviceinmonths: fieldArray['serviceinmonths'],
            status: '',
            streetName: fieldArray['street'],
            subSector: fieldArray['subSector'],
            thirdNameArabic:  fieldArray['arabicfamilyname']!= undefined ? fieldArray['arabicfamilyname'] : "",
            totalExperience: 0,
            typeOfEmployment: fieldArray['employmentType'],
            userId: '',
            userRole: '',
            userType: '',
            zipCode: fieldArray['zipcode'],
            ninnumber:fieldArray['ninId']
        }
        // let reqData = {
        //     "accommodationType": "",
        //     "accountNo": "",
        //     "appId": fieldArray['ninId'],
        //     "assetValue": 0,
        //     "bvn": "",
        //     "casaAccountNo": "",
        //     "cgCompanyName": "",
        //     "city": fieldArray['city'],
        //     "compId": "",
        //     "companyId": 0,
        //     "companyName": "",
        //     "country": "",
        //     "creditCardsLimits": 0,
        //     "currency": "",
        //     "dateOfJoining": fieldArray['dateOfJoining'],
        //     "dateofBirth": fieldArray['dobLocalDate'],
        //     "designation": "",
        //     "directManagerEmail": "",
        //     "directManagerExtnNo": "",
        //     "directManagerName": "",
        //     "directManagerTelNo": "",
        //     "duplicateFound": "",
        //     "emailId": "",
        //     "emailsOTP": 0,
        //     "employerName": fieldArray['employerName'],
        //     "employmentType": "",
        //     "expiryDate": "2020-11-10",
        //     "familyArabicName": "",
        //     "familyName": fieldArray['familyName'],
        //     "financePremium": fieldArray['financePremium'],
        //     "financingInstallments": 0,
        //     "firstName": fieldArray['firstName'],
        //     "firstNameArabic": fieldArray['firstNameArabic'],
        //     "gender": "M",
        //     "homeFinancePremium": 0,
        //     "idIssueDate": "2020-11-10",
        //     "idIssueplace": "",
        //     "idNumber": "",
        //     "idType": "",
        //     "isCoApplicant": true,
        //     "isCustomer": "",
        //     "joiningDate": "2020-11-10",
        //     "lastName": "",
        //     "martialStatus": "",
        //     "middleName": "",
        //     "mobileNumber": 0,
        //     "mobileOTP": 0,
        //     "moduleFlag": "",
        //     "monthlyAdditionalIncome": 0,
        //     "monthlyHomeRent": 0,
        //     "monthlySalary": fieldArray['monthlySalary'],
        //     "nameOfEmployer": fieldArray['nameOfEmployer'],
        //     "nationalAddress": fieldArray['address1'] + " " + fieldArray['address2'],
        //     "nationality": fieldArray['nationality'],
        //     "natureOfBusiness": "",
        //     "noOfYearsInProfession": 0,
        //     "noofchildren": fieldArray['noofchildren'],
        //     "numofDpdntChildren": fieldArray['noofchildren'],
        //     "numofdpdntSpouse": fieldArray['numofdpdntSpouse'],
        //     "obligationsMonthly": 0,
        //     "occupancyStatus": "",
        //     "otpVerified": true,
        //     "password": "123456",
        //     "percentOfShareholding": 0,
        //     "placeOfStay": "1234444",
        //     "poBox": fieldArray['poBox'],
        //     "productcode": "",
        //     "province": fieldArray['province'],
        //     "regAnyStatuotaryAuthority": "",
        //     "registrExpiryDate": "2020-11-10",
        //     "registrationDate": "2020-11-10",
        //     "registrationNumber": "",
        //     "relatedemployer": "",
        //     "retiredage": 0,
        //     "retsalcreditanb": "",
        //     "salcreditanb": "",
        //     "secondNameArabic": "",
        //     "sector": "",
        //     "serviceinmonths": fieldArray['serviceinmonths'],
        //     "status": "",
        //     "streetName": fieldArray['street'],
        //     "subSector": "Riyat",
        //     "thirdNameArabic": "",
        //     "totalExperience": 0,
        //     "typeOfEmployment": "",
        //     "userId": "",
        //     "userRole": "",
        //     "userType": "",
        //     "zipCode": fieldArray['zipcode']
        // }
        const headerConfig = {
            headers: { Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token') },
        };
        console.log(window.sessionStorage.getItem('iord_id_token'))
        console.log(reqData)
        const response = await axios.post('http://122.166.172.240:3031/api/customers', reqData, headerConfig)
        console.log(response)
        if (response.status == 200 || response.status == 201) {
            window.sessionStorage.setItem('CUSTOMRE_DATA_REQ', JSON.stringify(fieldArray));
            return true
        }
        else {
            return false
        }


    }


    updateCustomer = async (stateData) => {
        
        let fieldArray = stateData;
        console.log("fieldArray for update customer",fieldArray)
        let reqData = {
            id: fieldArray['customerId'],
            accommodationType: fieldArray['accomodationType'],
            accountNo: '',
            appId: fieldArray['appId'] != undefined ? fieldArray['appId'] : "",
            assetValue: fieldArray['assetvalue'],
            bvn: '',
            casaAccountNo: '',
            cgCompanyName: fieldArray['companynameL2'] != undefined ? fieldArray['companynameL2'] : '',
            city: fieldArray['city'],
            compId: '',
            companyId: 0,
            companyName: '',
            country: fieldArray['nationality'],
            creditCardsLimits: fieldArray['creditCardsLimits']!=undefined?fieldArray['creditCardsLimits']:0,
            currency: 'SAR',
            dateOfJoining: fieldArray['dateOfJoining'],
            dateofBirth: fieldArray['dateOfBirthG'] != undefined ? fieldArray['dateOfBirthG'] : '',
            designation: fieldArray['designation'],
            directManagerEmail: '',
            directManagerExtnNo: '',
            directManagerName: '',
            directManagerTelNo: '',
            duplicateFound: '',
            emailId: '',
            emailsOTP: 0,
            employerName: fieldArray['employerName'],
            employmentType: fieldArray['employmentType'],
            expiryDate: '2020-11-10',
            familyArabicName: fieldArray['arabicfamilyname'] != undefined ? fieldArray['arabicfamilyname'] : '',
            familyName: fieldArray['familyName'] != undefined ? fieldArray['familyName'] : '',
            financePremium: fieldArray['financePremium'] != undefined ? fieldArray['financePremium'] : 0,
            financingInstallments: 0,
            firstName: fieldArray['firstName'] != undefined ? fieldArray['firstName'] : '',
            firstNameArabic: fieldArray['arabicfirstname'] != undefined ? fieldArray['arabicfirstname'] : '',
            gender: 'M',
            homeFinancePremium: fieldArray['homefinance']!=undefined? fieldArray['homefinance']:0,
            idIssueDate: '2020-11-10',
            idIssueplace: '',
            idNumber: fieldArray['customerId'],
            idType: 'NID',
            isCoApplicant: true,
            isCustomer: '',
            joiningDate: '2020-11-10',
            lastName: fieldArray['englishThirdName'] != undefined ? fieldArray['englishThirdName'] : '',
            martialStatus: '',
            middleName: fieldArray['englishSecondName'] != undefined ? fieldArray['englishSecondName'] : '',
            mobileNumber: fieldArray['mobileNumber'] != undefined ? fieldArray['mobileNumber'] : "",
            mobileOTP: 0,
            moduleFlag: '',
            monthlyAdditionalIncome: fieldArray['monthlyAdditionalIncome'],
            monthlyHomeRent: fieldArray['monthlyHomeRent'],
            monthlySalary: fieldArray['monthlySalary'],
            nameOfEmployer: fieldArray['employerName'] != undefined ? fieldArray['employerName'] : '',
            nationalAddress: fieldArray['address1'] + ' ' + fieldArray['address2'],
            nationality: fieldArray['nationality'],
            natureOfBusiness: '',
            noOfYearsInProfession: 0,
            noofchildren: fieldArray['noofchildren'],
            numofDpdntChildren: fieldArray['noofchildren'],
            numofdpdntSpouse: fieldArray['numofdpdntSpouse'],
            obligationsMonthly: fieldArray['obligationsMonthly']!=undefined?fieldArray['obligationsMonthly']:0,
            occupancyStatus: '',
            otpVerified: true,
            password: fieldArray['password'] ? fieldArray['password'] : '123456',
            percentOfShareholding: 0,
            placeOfStay: '1234444',
            poBox: fieldArray['poBox'],
            productcode: 'MURR',
            province: fieldArray['province'],
            regAnyStatuotaryAuthority: '',
            registrExpiryDate: '2020-11-10',
            registrationDate: '2020-11-10',
            registrationNumber: '',
            relatedemployer: '',
            retiredage: 0,
            retsalcreditanb: '',
            salcreditanb: '',
            secondNameArabic: fieldArray['arabicfathername'],
            sector: fieldArray['sector'],
            serviceinmonths: fieldArray['serviceinmonths'],
            status: '',
            streetName: fieldArray['street'],
            subSector: fieldArray['subSector'] != undefined ? fieldArray['subSector'] : "",
            thirdNameArabic: fieldArray['arabicfamilyname']!= undefined ? fieldArray['arabicfamilyname'] : "",
            totalExperience: 0,
            typeOfEmployment: fieldArray['employmentType'],
            userId: '',
            userRole: '',
            userType: '',
            zipCode: fieldArray['zipcode'],
            ninnumber:fieldArray['ninId']
        }
        // let reqData = {
        //     "id": fieldArray['customerId'],
        //     "accommodationType": "",
        //     "accountNo": "",
        //     "appId": fieldArray['appId'],
        //     "assetValue": 0,
        //     "bvn": "",
        //     "casaAccountNo": "",
        //     "cgCompanyName": fieldArray['companynameL2'],
        //     "city": fieldArray['city'],
        //     "compId": "",
        //     "companyId": 0,
        //     "companyName": "",
        //     "country": fieldArray['nationality'],
        //     "creditCardsLimits": 0,
        //     "currency": "",
        //     "dateOfJoining": fieldArray['dateOfJoining'],
        //     "dateofBirth": fieldArray['dobLocalDate'],
        //     "designation": fieldArray['designation'],
        //     "directManagerEmail": "",
        //     "directManagerExtnNo": "",
        //     "directManagerName": "",
        //     "directManagerTelNo": "",
        //     "duplicateFound": "",
        //     "emailId": "",
        //     "emailsOTP": 0,
        //     "employerName": fieldArray['employerName'],
        //     "employmentType": "",
        //     "expiryDate": "2020-11-10",
        //     "familyArabicName": "",
        //     "familyName": fieldArray['familyName'],
        //     "financePremium": fieldArray['financePremium'],
        //     "financingInstallments": 0,
        //     "firstName": fieldArray['firstName'],
        //     "firstNameArabic": fieldArray['firstNameArabic'],
        //     "gender": "M",
        //     "homeFinancePremium": 0,
        //     "idIssueDate": "2020-11-10",
        //     "idIssueplace": "",
        //     "idNumber": "",
        //     "idType": "",
        //     "isCoApplicant": true,
        //     "isCustomer": "",
        //     "joiningDate": "2020-11-10",
        //     "lastName": "",
        //     "martialStatus": "",
        //     "middleName": "",
        //     "mobileNumber": 0,
        //     "mobileOTP": 0,
        //     "moduleFlag": "",
        //     "monthlyAdditionalIncome": fieldArray['monthlyAdditionalIncome'],
        //     "monthlyHomeRent": 0,
        //     "monthlySalary": fieldArray['monthlySalary'],
        //     "nameOfEmployer": fieldArray['nameOfEmployer'],
        //     "nationalAddress": fieldArray['address1'] + " " + fieldArray['address2'],
        //     "nationality": fieldArray['nationality'],
        //     "natureOfBusiness": "",
        //     "noOfYearsInProfession": 0,
        //     "noofchildren": fieldArray['noofchildren'],
        //     "numofDpdntChildren": fieldArray['noofchildren'],
        //     "numofdpdntSpouse": fieldArray['numofdpdntSpouse'],
        //     "obligationsMonthly": 0,
        //     "occupancyStatus": "",
        //     "otpVerified": true,
        //     "password": "123456",
        //     "percentOfShareholding": 0,
        //     "placeOfStay": "1234444",
        //     "poBox": fieldArray['poBox'],
        //     "productcode": "",
        //     "province": fieldArray['province'],
        //     "regAnyStatuotaryAuthority": "",
        //     "registrExpiryDate": "2020-11-10",
        //     "registrationDate": "2020-11-10",
        //     "registrationNumber": "",
        //     "relatedemployer": "",
        //     "retiredage": 0,
        //     "retsalcreditanb": "",
        //     "salcreditanb": "",
        //     "secondNameArabic": "",
        //     "sector": fieldArray['sector'],
        //     "serviceinmonths": fieldArray['serviceinmonths'],
        //     "status": "",
        //     "streetName": fieldArray['street'],
        //     "subSector": fieldArray['subSector'],
        //     "thirdNameArabic": "",
        //     "totalExperience": 0,
        //     "typeOfEmployment": fieldArray['typeOfEmployment'],
        //     "userId": "",
        //     "userRole": "",
        //     "userType": "",
        //     "zipCode": fieldArray['zipcode']
        // }

        let headerConfig = {
            headers: { Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token') },

        };
        // console.log(headerConfig)
        console.log("updateCustomerData", reqData)
        const response = await axios.put('http://122.166.172.240:3031/api/customers', reqData, headerConfig)
        console.log(response)
        if (response.status == 200 || response.status == 201) {
            window.sessionStorage.setItem('CUSTOMRE_DATA_REQ', JSON.stringify(fieldArray));
            return true
        }
        else {
            return false
        }
    }



    checkSimah = async (stateData) => {

        let fieldArray = stateData;
        let reqData = {
            "EmployerName": fieldArray['arabicname'],
            "LoanAmount": 30000.00,
            "IDNumber": "1067583474",
            "IdExpiryDate": fieldArray['placeOfBirth'],
            "BirthDate": fieldArray['placeOfBirth'],
            "LastName": fieldArray['arabicLastname'],
            "FirstName": fieldArray['arabicFirstname'],
            "SecondName": fieldArray['arabicSecondname'],
            "ThirdName": fieldArray['arabicThirdname'],
            "LastNameEnglish": fieldArray['englishLastname'],
            "FirstNameEnglish": fieldArray['englishfirstname'],
            "SecondNameEnglish": fieldArray['englishSecondName'],
            "ThirdNameEnglish": fieldArray['englishThirdName'],
            "StreetName": "شارع ابن مجاهد ",
            "UnitNumber": 1,
            "PostCode": 19651,
            "City": "المزاحمية",
            "Mobile": "0564132627",
            "WorkingMonths": 0,
            "HousingAllowance": 0.00,
            "OtherAllowance": 0.00,
            "BasicWage": 13900.00
        }



        let headerConfig = {
            headers: { Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token') },
        };

        const response = await axios.post('http://122.166.172.240:4000/SIMAH/GetSimahInfo', reqData, headerConfig)
        console.log(response)
        if (response.status == 200) {
            window.sessionStorage.setItem('CUSTOMRE_DATA_REQ', JSON.stringify(fieldArray));
            return true
        }
        else {
            return false
        }

    }



    addLoan = async (stateData) => {
        let fieldArray = stateData;
        let reqData = {
            "agentId": window.sessionStorage.getItem('agentId'),
            // "appId": fieldArray['appId'],
            "assetIds": "",
            "balloonPayment": 0,
            "compApplId": "",
            "createdDate": "2020-11-11",
            "currency": "SAR",
            "custId": fieldArray['customerId'],
            "downPayment": 0,
            "idNumber": fieldArray['customerId'],
            "loanCurrentStatus": "Draft",
            "productid": "",
            "reqAmount": 30000,
            "schemeId": "10",
            "sendTo3i": true,
            "subProduct": "",
            "tenure": fieldArray['tenure'],
            "vendorName": window.sessionStorage.getItem('vendor'),
            "activekey": fieldArray['activekey']
        }
        let headerConfig = {
            headers: { Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token') },
        };
        console.log('in add loan', reqData)
        const response = await axios.post('http://122.166.172.240:3031/api/loans', reqData, headerConfig)
        console.log("addloanData", response.data)

        if (response.status == 200 || response.status == 201) {
            fieldArray['appId'] = response.data.id
            
            console.log(fieldArray)
            console.log(response.data.id)
            window.sessionStorage.setItem('TAHKUM_CUSTOMRE_DATA', JSON.stringify(fieldArray));

            return true
        }
        else {
            return false
        }


    }

    updateLoan = async (stateData) => {
        let fieldArray = stateData.fieldArray;
        console.log(fieldArray)
        let loan = stateData.loan
        let reqData = {
            "id": fieldArray['appId'],
            "agentId": window.sessionStorage.getItem('agentId'),
            "appId": fieldArray['appId'],
            "assetIds": "",
            "balloonPayment": 0,
            "compApplId": loan['compApplId'],
            "createdDate": "2020-11-11",
            "currency": "SAR",
            "custId": fieldArray['customerId'],
            "downPayment": loan['downPayment'],
            "idNumber": fieldArray['customerId'],
            "loanCurrentStatus": fieldArray['loanCurrentStatus']!=undefined?fieldArray['loanCurrentStatus']:"",
            "productid": "",
            "reqAmount": loan['reqAmount'],
            "schemeId": "10",
            "sendTo3i": true,
            "subProduct": "",
            "tenure": loan['tenure'],
            "vendorName": window.sessionStorage.getItem('vendor'),
            "activekey": fieldArray['activekey']
        }
        const headerConfig = {
            headers: { Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token') },
        };
        console.log("sentDataInUpdateLoan", reqData)
        const response = await axios.put('http://122.166.172.240:3031/api/loans', reqData, headerConfig)
        console.log("updateLoanData", response.data)
        if (response.status == 200) {
            fieldArray['appId'] = response.data.id
            window.sessionStorage.setItem('CUSTOMRE_DATA_REQ', JSON.stringify(fieldArray));
            return true
        }
        else {
            return false
        }
    }

    getLoan = async (stateData) => {
        let fieldArray = stateData.fieldArray;
        const headerConfig = {
            headers: { Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token') },
        };
        try {
            const response = await axios.get(`http://122.166.172.240:3031/api/loans?custId.equals=` + fieldArray['customerId'], headerConfig);
            console.log(response.data)
            if (response.data.length == 0) {
                return true;
            }
            else {
                console.log(response.data)
                if (response.data.length > 0) {
                    response.data.map((loan) => {
                        if (loan.loanCurrentStatus == 'Draft') {
                            return false
                        }
                    })
                    return true
                } else {
                    return true
                }
                // fieldArray['addressId'] = response.data[0].id
                // return false
            }

        } catch (error) {
            console.log(error);
            return false;
        }
    }

    loanCalculator = async (stateData) => {
        let outh;
        let headerConfig = {
            headers: {
                Authorization: 'Basic NjhlMWE4YjlmOWNkNjc1MjIwYTRjY2U2NGFhNjA5NjYwZTQ2OjFiMGNhNDA5OWY1ZWI2OWQ1OTE0YjkwNWIwMThlYTY0',
            },
            params: {
                grant_type: 'password',
                username: 'user_admin',
                password: config.KASTLE_PASS,
            },
        }
        try {
            outh = await axios.post(config.KASTLE_URL + 'oauth/token', null, headerConfig)

        }
        catch (error) {
            console.log(error)
        }
        let fieldArray = stateData;
        let rateOfInterest = 0
        if (fieldArray['tenure'] <= 12) {
            rateOfInterest = 19
        }
        else if (fieldArray['tenure'] <= 24) {
            rateOfInterest = 35
        }
        else {
            rateOfInterest = 50
        }

        let reqData = {
            "loanAmount": fieldArray['reqAmount'],
            "noOfMonths": fieldArray['tenure'],
            "rateOfInterest": rateOfInterest
        }
        const response = await axios.post(config.KASTLE_URL + 'digital/paymentCalculator?access_token=' + outh.data.access_token, reqData)
        console.log(response)
        if (response.status == 200) {
            return response.data
            // fieldArray['monthlyInst'] = response.data.monthlyEMI
            // fieldArray['payableAmt'] = response.data.payableAmount
            // fieldArray['monthlyInst'] = response.data.monthlyEMI
            // return true
        }
        else {
            return {}
        }

    }






    onlineApplication3i = async (stateData) => {
        let outh;
        let headerConfig = {
            headers: {
                Authorization: 'Basic NjhlMWE4YjlmOWNkNjc1MjIwYTRjY2U2NGFhNjA5NjYwZTQ2OjFiMGNhNDA5OWY1ZWI2OWQ1OTE0YjkwNWIwMThlYTY0',
            },
            params: {
                grant_type: 'password',
                username: 'user_admin',
                password: config.KASTLE_PASS,
            },
        }
        outh = await axios.post(config.KASTLE_URL + 'oauth/token', null, headerConfig)



        let fieldArray = stateData.fieldArray;
        console.log("appppppp", fieldArray['appId'])
        let loan = stateData.loan;
        let reqData = [
            {
                "assetDtlsModel": [
                    {
                        "assetName": "iPhone 12",
                        "assetDetails": "iPhone 12, 512 GB RAM",
                        "assetCategory": "MOBILE",
                        "assetSubCategory": null,
                        "assetCondition": "N",
                        "assetMake": null,
                        "assetModel": null,
                        "assetModelYear": "2020",
                        "assetPrice": 50900,
                        "balloonPayment": 0,
                        "dealerName": "STC",
                        "downPayment": 0,
                        "referenceNumber": null,
                        "itemNumber": null,
                        "noOfUnits": 1,
                        "assetCost": 50900,
                        "vat": 900,
                        "createDate": "05-11-2020",
                        "requestId": null,
                        "vendorId": 360,
                        "agentName": "3"
                    }
                ],
                "userDtlsModel": [
                    {
                        "appId": fieldArray['appId'],
                        "moduleFlag": "I",
                        "idType": "NID",
                        "idNumber": fieldArray['ninId'],
                        "firstName": fieldArray['firstName'],
                        "martialStatus": "MARRIED",
                        "noofchildren": fieldArray['noofchildren'],
                        "nationalAddress": fieldArray['buildingnumber'] + fieldArray['street'] + fieldArray['address1'] + fieldArray['address2'] + fieldArray['provience'] + fieldArray['city'] + fieldArray['nationality'],
                        "typeOfEmployment": fieldArray['typeOfEmployment'],
                        "middleName": fieldArray['englishSecondName'],
                        "lastName": fieldArray['englishLastname'],
                        "designation": fieldArray['designation'],
                        "joiningDate": "1990-06-06",
                        "noOfYearsInProfession": "800",
                        "retiredage": null,
                        "relatedemployer": null,
                        "salcreditanb": null,
                        "directManagerNam": null,
                        "directManagerEmail": null,
                        "directManagerTelNo": null,
                        "directManagerExtnNo": null,
                        "companyName": fieldArray['employerName'],
                        "registrationNumber": null,
                        "registrationDate": null,
                        "registrExpiryDate": null,
                        "percentOfShareholding": null,
                        "streetName": fieldArray['street'],
                        "province": fieldArray['province'],
                        "zipCode": fieldArray['zipcode'],
                        "poBox": fieldArray['poBox'],
                        "country": fieldArray['nationality'],
                        "retsalcreditanb": null,
                        "mobileNumber": "8886476123",
                        "emailId": "dhanraj.dadhich@gmail.com",
                        "dateofBirth": "1977-04-17",
                        "gender": "M",
                        "nationality": "SAU",
                        "placeOfStay": "RIYADH",
                        "productcode": "MURR",
                        "cgCompanyName": null,
                        "totalExperience": null,
                        "regAnyStatuotaryAuthority": null,
                        "natureOfBusiness": null,
                        "isCoApplicant": "false",
                        "currency": "SAR",
                        "isCustomer": null,
                        "accountNo": null,
                        "familyName": fieldArray['familyName'],
                        "nameOfEmployer": fieldArray['nameOfEmployer'],
                        "idIssueDate": "0018-07-28",
                        "idExpireDate": "0028-07-28",
                        "idIssuePlace": "Riyadh",
                        "firstNameInArabic": "رحان",
                        "secondNameInArabic": " منصور",
                        "thirdNameInArabic": "الحارثي",
                        "arabicfamilyname": "عماري"
                    }
                ],
                "incomeLiabilityModel": [
                    {
                        "appId": fieldArray['appId'],
                        "grossMonthlyIncome": 4567890987654.0,
                        "currentEMI": 14567890987654.0,
                        "anyliabilities": "N",
                        "netIncome": 4567890987654.0,
                        "annualBonus": 4567890987654.0,
                        "avgMonthlyIncentive": 4567890987654.0,
                        "prevYearProfit": 4567890987654.0,
                        "currency": "SAR",
                        "costOfLiving": 4567890987654.0
                    }
                ],
                "loanDtlsModel": [
                    {
                        "appId": fieldArray['appId'],
                        "reqAmount": loan['reqAmount'],
                        "subProduct": "MURRCD",
                        "productid": "MURR",
                        "currency": "SAR",
                        "schemeId": "10",
                        "tenure": loan['tenure']
                    }
                ],
                "loanDependantScreenModel": [
                    {
                        "appId": fieldArray['appId'],
                        "loanPurpose": null,
                        "propertyType": null,
                        "assetLocation": null,
                        "assetStatus": null,
                        "assetDetails": null,
                        "assetCost": 0.0,
                        "typeOfResidence": null,
                        "vehicleModel": 0,
                        "vehicleMake": null,
                        " exShowroomPrice": 0,
                        "productList": null,
                        "currency": null
                    }
                ],
                "coApplicantDtlsModel": [
                    {
                        "appId": fieldArray['appId'],
                        "idType": null,
                        "idNumber": null,
                        "coApplicantName": "raj",
                        "owbership": null,
                        "isCoApplicant": "true",
                        "coFirstName": null,
                        "firstName": null,
                        "martialStatus": null,
                        "noofchildren": 2,
                        "nationalAddress": null,
                        "typeOfEmployment": null,
                        "middleName": null,
                        "cofamilyName": null,
                        "cogender": "F",
                        "employername": null,
                        "designation": null,
                        "joiningDate": null,
                        "noOfYearsInProfession": null,
                        "retiredage": null,
                        "relatedemployer": null,
                        "salcreditanb": null,
                        "directManagerNam": null,
                        "directManagerEmail": null,
                        "directManagerTelNo": null,
                        "directManagerExtnNo": null,
                        "companyName": null,
                        "bussnat": null,
                        "registrationNumber": null,
                        "registrationDate": null,
                        "registrExpiryDate": null,
                        "percentOfShareholding": null,
                        "streetName": null,
                        "city": null,
                        "province": null,
                        "zipCode": null,
                        "poBox": null,
                        "country": null,
                        "retsalcreditanb": null,
                        "grossMonthlyIncome": null,
                        "anyliabilities": null,
                        "currentEMI": null,
                        "nationality": "SAU",
                        "costaying": null,
                        "coLastName": null,
                        "obligation": null
                    }
                ],
                "addressDtlsModel": [
                    {
                        "appId": fieldArray['poBox'],
                        "phoneNumber": "8886476456",
                        "mobileNumber": "8886476456",
                        "email": "dhanraj@gmail.com",
                        "address1": fieldArray['address1'],
                        "address2": fieldArray['address2'],
                        "address3": "",
                        "city": fieldArray['city'],
                        "state": "RYD",
                        "country": fieldArray['nationality'],
                        "zipcode": fieldArray['zipcode'],
                        "livingSince": "2017"
                    }
                ]
            }
        ]
        const response = await axios.post(config.KASTLE_URL + 'digital/onlineApplication?access_token=' + outh.data.access_token, reqData)
        console.log(response)
        if (response.status == 200) {
            loan['compApplId'] = response.data.compApplId
            this.updateLoan(stateData)

            return true
        }
        else {
            return false
        }

    }



    getDocumentList = async (stateData) => {

        let outh;
        let headerConfig = {
            headers: {
                Authorization: 'Basic NjhlMWE4YjlmOWNkNjc1MjIwYTRjY2U2NGFhNjA5NjYwZTQ2OjFiMGNhNDA5OWY1ZWI2OWQ1OTE0YjkwNWIwMThlYTY0',
            },
            params: {
                grant_type: 'password',
                username: 'user_admin',
                password: config.KASTLE_PASS,
            },
        }
        console.log(headerConfig)
        outh = await axios.post(config.KASTLE_URL + 'oauth/token', null, headerConfig)

        let loan = stateData.loan;
        console.log(loan)
        console.log(outh)
        let documentListState = stateData.documentList

        let reqData = {
            "compApplId": loan['compApplId'],

        }
        console.log("reqData", reqData)
        const response = await axios.post(config.KASTLE_URL + 'digital/getDocumentList?access_token=' + outh.data.access_token, reqData)
        console.log(response)
        if (response.status == 200) {
            if(response.data.aalist){
                return response.data.aalist
            }else{
                return []
            }
            
        }
        else {
            return []
        }


    }

    uploaddocument = async (reqData) => {

        let outh;
        let headerConfig = {
            headers: {
                Authorization: 'Basic NjhlMWE4YjlmOWNkNjc1MjIwYTRjY2U2NGFhNjA5NjYwZTQ2OjFiMGNhNDA5OWY1ZWI2OWQ1OTE0YjkwNWIwMThlYTY0',
            },
            params: {
                grant_type: 'password',
                username: 'user_admin',
                password: config.KASTLE_PASS,
            },
        }

        outh = await axios.post(config.KASTLE_URL + 'oauth/token', null, headerConfig)




        const response = await axios.post(config.KASTLE_URL + 'digital/upload-documents?access_token=' + outh.data.access_token, reqData)
        console.log(response.data)
        if (response.status === 200) {

            return true
        }
        else {
            return false
        }


    }











}
const CustomerApi = new CustomerApiClass();

export default CustomerApi;