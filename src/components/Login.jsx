import React, { Component } from 'react';
import { Col, Modal } from 'react-bootstrap';
import ip from 'ip';
import Cookies from 'universal-cookie';
import axios from 'axios';
import qs from 'qs'


axios.defaults.baseURL = 'http://localhost:26290/';



class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            login_txt: "",
            psw_txt: "",
        }
        this.handleSsnChange = this.handleSsnChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        this.loginButtonClick = this.loginButtonClick.bind(this);
    }
    handleSsnChange(e) {
        const _login = e.target.value
        this.setState({
            login_txt: _login
        })
    }
    handlePassChange(e) {
        const _psw = e.target.value
        this.setState({
            psw_txt: _psw
        })
    }


    loginButtonClick() {
        const args = {
            login: this.state.login_txt,
            pass: this.state.psw_txt
        };
        this.login(args);
        //this.props.closeModal()
        console.log(this.state)
    }

    getGaCookie() {
        const cookies = new Cookies();
        const gaC = String(cookies.get("_ga"))
        return (gaC.split(".")[2] + "." + gaC.split(".")[3])
    };

    // Getting IP Address
    getIpAddress() {
        return ip.address()
    };
    login(args) {
        console.log("---------------calling login ")
        const body = {
            Login: args.login,
            Password: args.pass,
            ipAddress: this.getIpAddress(),
            gaClientId: this.getGaCookie(),
            FirstPartyBlackBox: args.firstPartyBlackBox,
            ThirdPartyBlackBox: args.thirdPartyBlackBox
        };
        console.log(body)


        axios.post("api/Security/Login", qs.stringify(body))
            .then(function (response) {
                //console.log("Security/Login response.status === " + response.status)
                //console.log(body)

                console.log(response)

            }).catch(function (error) {
                console.log(error)
            });

    }

    render() {
        return (
            <Modal show={this.props.showModal} onHide={this.props.closeModal} className="login-modal-test">
                <Modal.Header closeButton={true} onHide={this.props.closeModal}>
                    <h2>Մուտք</h2>
                    <h3>Մուտքագրեք Ձեր մուտքանունը և գաղտնաբառը</h3>
                </Modal.Header>
                <Modal.Body className="LoginModalBody">
                    <div className="row LoginFormHolder">
                        <Col xs={12} className="LoginEachInputAllHolder">
                            <div className="row">
                                <Col xs={12} className="LoginInputName">
                                    <p>{"Մուտքանուն"}</p>
                                </Col>
                                <Col xs={12} className="LoginInputDescription">
                                    <p>{"Սոց քարտ"}</p>
                                </Col>
                                <Col xs={12} className="LoginInputHolder">
                                    <input autoFocus type="text" className="loginSsn"
                                        onChange={this.handleSsnChange}
                                        id="loginSsn" name="loginSsn" maxLength="10" />

                                </Col>
                            </div>
                        </Col>
                        <Col xs={12} className="LoginEachInputAllHolder">
                            <div className="row">
                                <Col xs={12} className="LoginInputName">
                                    <p>{"password"}</p>
                                </Col>
                                <Col xs={12} className="LoginInputHolder">
                                    <input
                                        type={"password"}
                                        className="ssn-input"
                                        onChange={this.handlePassChange} />

                                </Col>
                                <Col xs={12} className="LoginInputDescription">
                                    <p>{"this.props.pageTexts.kimbi_migration_login_text"}</p>
                                </Col>
                            </div>
                        </Col>
                    </div>
                </Modal.Body>
                <Modal.Footer className="LoginModalFooter">
                    <Col xs={12} className="text-center">
                        <button type="button" className="loginModalButton"
                            onClick={this.loginButtonClick}>{"Login"}</button>
                    </Col>
                    {/* <Col xs={12} className="text-center">
                        <button className="forgot-link" type="link" onClick={this.forgotPassword}>{this.props.pageTexts.forgot_pass_text}</button>
                    </Col> */}
                </Modal.Footer>
            </Modal>
        )
    }
}

export default Login