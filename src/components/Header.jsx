import React, { Component } from 'react'
import logo from '../assets/Content/images/kimbi-logo.svg'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import '../assets/styles/style.css'
import '../assets/Content/bootstrap-slider.min.css'
import axios from 'axios';
import Login from './Login';

axios.defaults.baseURL = 'https://stage-kimbi.am.instigatemobile.com:455/';
// axios.defaults.baseURL = 'http://localhost:26290/';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLoginModal: false,
        }
        this.handleLogin = this.handleLogin.bind(this);
        this.loginModalClose = this.loginModalClose.bind(this)
    }

    handleLogin() {
        // console.log("hey")
        // this.getHomePage()
        this.setState({
            showLoginModal: true,
        })
        // console.log(this.state)
    }
    loginModalClose() {
        this.setState({
            showLoginModal: false,
        })
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
                    <Navbar.Toggle />
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
                <Login showModal={this.state.showLoginModal} closeModal={this.loginModalClose} pageTexts={this.props.content} />
            </Navbar >
        )
    }
}
export default Header;