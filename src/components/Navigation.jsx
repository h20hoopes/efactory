import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

class Navigation extends Component {
  render() {
    const navigationProps = this.props.settings.navigationItems;
    const navigation = makeNavigation(navigationProps);

    return <React.Fragment>{navigation}</React.Fragment>;
  }
}

function makeNavigation(navigation) {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Collapse>
        <Nav className="mr-auto">{makeNavItems(navigation)}</Nav>
        <React.Fragment>{makeForm()}</React.Fragment>
      </Navbar.Collapse>
    </Navbar>
  );
}

function makeNavItemsWithIteration(listOfNavItems) {
  let navItem = listOfNavItems.map((listItem) =>
    listItem.sublinks.length > 0 ? (
      <NavDropdown // if sublinks
        className={isFirstLevel(listItem.group) ? "dropdown" : "dropright"}
        title={listItem.name}
        key={listItem.name}
      >
        {makeNavItemsWithIteration(listItem.sublinks)}
      </NavDropdown>
    ) : (
      // if no sublinks
      <Nav.Link className="nav-item" href={listItem.link} key={listItem.name}>
        {listItem.name}
      </Nav.Link>
    )
  );
  return navItem;
}

function makeNavItems(listOfNavItems) {
  return makeNavItemsWithIteration(listOfNavItems, 0);
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
