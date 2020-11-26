
import Axios from 'axios';
class agentDetailFunctionClass {


    getNewCustomerLabel() {
        Axios.get(config.STRAPI_URL + '/agent-newcustomers').then(res => {
            // this.setState({ newCustomerFields: res.data });
            console.log('newCustomerFields', this.state.newCustomerFields)
            return res.data;
        });
    }


}
const agentFunction = new agentDetailFunctionClass();

export default agentFunction;