
import React from "react";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";
// nodejs library to set properties for components
import { PropTypes } from "prop-types";

// reactstrap components
import {
  
  Collapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,

  Navbar,
  NavItem,
  NavLink,
  Nav,  
  Container,
  Row,
  Col
} from "bootstrap";

var ps;

class Sidebar extends React.Component {
  state = {
    collapseOpen: false
  };
  constructor(props) {
    super(props);
    this.activeRoute.bind(this);
  }
  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  // toggles collapse between opened and closed (true/false)
  toggleCollapse = () => {
    this.setState({
      collapseOpen: !this.state.collapseOpen
    });
  };
  // closes the collapse
  closeCollapse = () => {
    this.setState({
      collapseOpen: false
    });
  };
  // creates the links that appear in the left menu / Sidebar
  createLinks = routes => {
    return routes.map((prop, key) => {
      return (
        <NavItem key={key}>
          <NavLink
            to={prop.layout + prop.path}
            tag={NavLinkRRD}
            onClick={this.closeCollapse}
            activeClassName="active"
          >
            <i className={prop.icon} />
            {prop.name}
          </NavLink>
        </NavItem>
      );
    });
  };

  logout = () =>{
    this.props.onDestroySessionStorage();
    this.props.history.push("/");
  }

  render() {
    const { bgColor, routes, logo } = this.props;
    let navbarBrandProps;
    if (logo && logo.innerLink) {
      navbarBrandProps = {
        to: logo.innerLink,
        tag: Link
      };
    } else if (logo && logo.outterLink) {
      navbarBrandProps = {
        href: logo.outterLink,
        target: "_blank"
      };
    }
    return (
      <Navbar  
        style={window.innerWidth > 600 ? {top:'111px'} :null}    
        className="navbar-vertical fixed-left navbar-light bg-white"
        expand="md"
        id="sidenav-main"
      >
        <Container fluid>
        <UncontrolledDropdown nav>
                 <DropdownToggle className="pr-0" nav>
                   <Media className="align-items-center">
                     <span className="avatar avatar-sm rounded-circle">
                       <img
                         alt="..."
                        //  src={require("../../assets/img/user/user.png")}
                       />
                     </span>
                     <Media className="ml-2 d-none d-lg-block">
                       <span className="mb-0 text-sm font-weight-bold">
                         Suheal Pasha
                       </span>
                     </Media>
                   </Media>
                 </DropdownToggle>
                 <DropdownMenu className="dropdown-menu-arrow" right>
                   <DropdownItem className="noti-title" header tag="div">
                     <h6 className="text-overflow m-0">Welcome!</h6>
                   </DropdownItem>
                   <DropdownItem to="/admin/user-profile" tag={Link}>
                     <i className="ni ni-single-02" />
                     <span>My profile</span>
                   </DropdownItem>                  
                   <DropdownItem divider />
                   <DropdownItem onClick={this.logout}>
                     <i className="ni ni-user-run" />
                     <span>Logout</span>
                   </DropdownItem>
                 </DropdownMenu>
               </UncontrolledDropdown>
          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={this.toggleCollapse}
          >
            <span className="navbar-toggler-icon" />
          </button>
         
          <Collapse navbar isOpen={this.state.collapseOpen}>
            {/* Collapse header */}
            <div className="navbar-collapse-header d-md-none">
              <Row>               
                <Col className="collapse-close" xs="12">
                  <button
                    className="navbar-toggler"
                    type="button"
                    onClick={this.toggleCollapse}
                  >
                    <span />
                    <span />
                  </button>
                </Col>
              </Row>
            </div>
        
            <Nav navbar>{this.createLinks(routes)}</Nav>         
           
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

Sidebar.defaultProps = {
  routes: [{}]
};

Sidebar.propTypes = {
  // links that will be displayed inside the component
  routes: PropTypes.arrayOf(PropTypes.object),
  logo: PropTypes.shape({
    // innerLink is for links that will direct the user within the app
    // it will be rendered as <Link to="...">...</Link> tag
    innerLink: PropTypes.string,
    // outterLink is for links that will direct the user outside the app
    // it will be rendered as simple <a href="...">...</a> tag
    outterLink: PropTypes.string,
    // the image src of the logo
    imgSrc: PropTypes.string.isRequired,
    // the alt for the img
    imgAlt: PropTypes.string.isRequired
  })
};

export default Sidebar;
