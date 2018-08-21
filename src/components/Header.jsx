import React, { Component } from 'react'
import logo from '../assets/Content/images/kimbi-logo.svg'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import '../assets/styles/style.css'
import '../assets/Content/bootstrap-slider.min.css'
import axios from 'axios';

axios.defaults.baseURL = 'https://stage-kimbi.am.instigatemobile.com:441';
class Header extends Component {

    handleLogin() {
        console.log("hey")
        this.getHomePage()
    }
    getHomePage() {

        axios.get("/api/CommonDetails/GetHomePage")
            .then(function (response) {
                console.log(response)
            }).catch(function (error) {
                console.log(error);
            });
    }
    render() {
        return (
            <Navbar className="transparent header">
                <Navbar.Header className="header-logo">
                    <Navbar.Brand>
                        <a href="/">
                            <img className="logo" src={logo} alt="կիմբի , օնլայն վարկ" />
                        </a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight className="header-nav">
                        <NavItem>
                            Ինչպես դիմել
                        </NavItem>
                        <NavItem>
                            Ինչպես ստանալ
                        </NavItem>
                        <NavItem>
                            Ինչ է կիմբին
                        </NavItem>
                        <NavItem>
                            Բլոգ
                        </NavItem>
                        <NavItem className="login-btn" onClick={() => this.handleLogin()}>
                            Մուտք
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar >
        )
    }
}
export default Header;