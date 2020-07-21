import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import logo from "../content/images/logo.png";

class Navigation extends Component {
  render() {
    const navigationProps = this.props.settings.navigation.navigationItems;
    const style = this.props.settings.navigation.style;
    // const logo = this.props.settings.navigation.logo;
    const navigation = makeNavigation(navigationProps, logo, style);

    return <React.Fragment>{navigation}</React.Fragment>;
  }
}

function makeNavigation(navigation, logo, style) {
  return (
    <React.Fragment>
      <a href="/">
        <img src={logo} alt="Efactory Camisetas" />
      </a>
      <Navbar bg="" expand="md" style={style.bar}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="mr-auto">{makeNavItems(navigation, style.items)}</Nav>
          <React.Fragment>{makeForm()}</React.Fragment>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}

function makeNavItems(listOfNavItems, itemStyles) {
  let navItem = listOfNavItems.map((listItem) =>
    listItem.sublinks.length > 0 ? (
      <NavDropdown // if sublinks
        className={isFirstLevel(listItem.group) ? "dropdown" : "dropright"}
        title={listItem.name}
        key={listItem.name}
        style={itemStyles}
      >
        {makeNavItems(listItem.sublinks)}
      </NavDropdown>
    ) : (
      // if no sublinks
      <Nav.Link
        className="nav-item"
        href={listItem.link}
        key={listItem.name}
        style={itemStyles}
      >
        {listItem.name}
      </Nav.Link>
    )
  );
  return navItem;
}

function makeForm() {
  return (
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  );
}

function isFirstLevel(group) {
  if (group !== "top-navigation") {
    return false;
  } else {
    return true;
  }
}

export default Navigation;
