import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import Header from '../header/header'
import SidebarComponent from './sidebar'
// import SidebarComponent from './sidebar0'
import HeaderComponent from './header'
import ContentComponent from './content'
import Footer from '../footer/footer'
import { Widget, addResponseMessage } from 'react-chat-widget';
//import '../../assets/css/bootstrap.css'
import './content.css'

const styles = StyleSheet.create({

    container: {
        height: '100%',
        minHeight: '100vh'
    },
    content: {
        // marginTop: 54
    },
    mainBlock: {
        backgroundColor: '#F7F8FC',
        // padding: 30
    }

});

class maindashboard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedItem: 'Dashboard',
            lang:window.sessionStorage.getItem('language')
            // userdata:''

        }
    }
    handleNewUserMessage = (newMessage) => {
        console.log(`New message incoming! ${newMessage}`);
        // Now send the message throught the backend API
        // addResponseMessage(response);
    };


    componentDidMount() {
        window.addEventListener('resize', this.resize);
        // this.setState({
        //     userdata:
        // })

    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize);
    }

    resize = () => this.forceUpdate();

    render() {
        const { selectedItem , lang } = this.state;
        //this.props.location.state.useremail
        // console.log(this.state.userdata, 'goodfor')
        // console.log(this.props, 'propsdashboard')
        return (
            <div>
                {/* <Header {...this.props} /> */}
                <Row className={css(styles.container)}>
                    
                    {/* <div className="leftside"> */}
                    {/* {this.state.lang} */}
                    <SidebarComponent className={css(styles.sidebarsticky)} selectedItem={selectedItem} lang={lang} onChange={(selectedItem) => this.setState({ selectedItem })} />
                    {/* </div> */}
                    <Column  flexGrow={1} className={css(styles.mainBlock)}>
                        <HeaderComponent title={selectedItem} lang={lang} onChange={(x) =>this.setState({lang:x})} />
                        <div className={css(styles.content)}>
                            <ContentComponent title={selectedItem} onChange={(selectedItem) => this.setState({ selectedItem })} selectedItem={selectedItem} lang={lang} {...this.props} />
                        </div>
                    </Column>
                    {/* <SidebarComponent className={css(styles.sidebarsticky)} selectedItem={selectedItem} onChange={(selectedItem) => this.setState({ selectedItem })} /> */}
                </Row>
                {/* <Widget
                    handleNewUserMessage={this.handleNewUserMessage}
                    title="Maleem Financing"
                    subtitle="Best Loan service"
                /> */}
                {/* <Footer {...this.props} /> */}
            </div>
        );
    }
}

export default maindashboard;