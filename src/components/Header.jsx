import React, { Component } from 'react'
import logo from '../assets/Content/images/kimbi-logo.svg'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import '../assets/styles/style.css'
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
                {/* <ul>
                        <li>
                            <a class="animatable">Ինչպես դիմել</a>
                        </li>
                        <li>
                            <a class="animatable">Ինչպես ստանալ</a>
                        </li>
                        <li>
                            <a class="animatable">Ինչ է կիմբին</a>
                        </li>
                        <li>
                            <a href="https://www.kimbi.goodcredit.am/blog/" class="menu-blog">Բլոգ</a>
                        </li>
                        <li>
                            <a class="login main-login" id="kiss-home-login-btn">Մուտք</a>
                        </li>
                    </ul> */}
            </Navbar >
        )
    }
}
export default Header;