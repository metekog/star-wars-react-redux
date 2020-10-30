import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Image, Dropdown } from "semantic-ui-react";
import img from "../images/logo.png";

class Navi extends Component {
  render() {
    return (
      <div style={{ border: "5px solid black " , borderRadius:"12px"}}>
        <Menu pointing style={{ backgroundColor: "black" }}>
          <Menu.Item>
            <Link to="/">
              <Image size="tiny" src={img}></Image>
            </Link>
          </Menu.Item>
          <Link to="/peoples">
            <Menu.Item style={{ color: "#ffcc00", marginTop: "33px" }}>
              PEOPLES
            </Menu.Item>
          </Link>
          <Dropdown
            style={{ color: "#ffcc00" /* marginTop: "10px"  */ }}
            item
            text="MENU"
          >
            <Dropdown.Menu style={{ backgroundColor: "black" }}>
              <Link to="/planets">
                <Menu.Item style={{ color: "#ffcc00", marginTop: "30px" }}>
                  <strong>PLANETS</strong>
                </Menu.Item>
              </Link>
              <Link to="/starships">
                <Menu.Item style={{ color: "#ffcc00", marginTop: "30px" }}>
                  <strong>STARSHIPS</strong>
                </Menu.Item>
              </Link>
              <Link to="/films">
                <Menu.Item style={{ color: "#ffcc00", marginTop: "30px" }}>
                  <strong>FILMS</strong>
                </Menu.Item>
              </Link>
            </Dropdown.Menu>
          </Dropdown>
          {/*  <Menu.Menu position="right">
            <Menu.Item>
              <Input size="tiny" icon="search" placeholder="Search..." />
            </Menu.Item>
          </Menu.Menu> */}
        </Menu>
      </div>
    );
  }
}
export default Navi;

/* import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Image } from "semantic-ui-react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import img from "../images/logo.png";

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar style={{ backgroundColor: "black" }} light expand="md">
        <NavbarBrand>
          <Link to="/">
            <Image src={img} size="tiny"></Image>
          </Link>
        </NavbarBrand>
        <NavbarToggler
          style={{ backgroundColor: "#feb72b" }}
          onClick={toggle}
        />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <Link to="/peoples">
              <NavItem style={{ color: "#ffcc00", margin: "10px" }}>
                PEOPLE
              </NavItem>
            </Link>
            <Link to="/planets">
              <NavItem style={{ color: "#ffcc00", margin: "10px" }}>
                PLANETS
              </NavItem>
            </Link>
            <Link to="/starships">
              <NavItem style={{ color: "#ffcc00", margin: "10px" }}>
                STARSHIPS
              </NavItem>
            </Link>
            <Link to="/films">
              <NavItem style={{ color: "#ffcc00", margin: "10px" }}>
                FILMS
              </NavItem>
            </Link>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navi; */
