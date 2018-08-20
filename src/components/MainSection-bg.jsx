import React, { Component } from 'react'
import Header from './Header'
import { Col } from 'react-bootstrap';
import '../assets/styles/style.css';
import Calculator from './Calculator'
class MainSectionBg extends Component {
    render() {
        return (
            <div className="mainSectionBg">
                <Header />
                <div className="main-section-part">
                    <div className="container ">
                        <Col md={7} className="commertial-text">
                            <div className="commertial-headers">
                                <h1>Արդեն մինչև 400.000 դրամ </h1>
                                <h2>առանց գրավի և երաշխավորի</h2>
                            </div>
                            <Col className="commertial-points">
                                <ul>
                                    <li>
                                        <i className="fas fa-check"></i>
                                        <span>Լրացրեք հայտը օնլայն ցանկացած վայրից և ստացեք գումարը կանխիկ կամ Ձեր բանկային քարտին</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i>
                                        <span>Լրացրեք հայտը օնլայն ցանկացած վայրից և ստացեք գումարը կանխիկ կամ Ձեր բանկային քարտին</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i>
                                        <span>Լրացրեք հայտը օնլայն ցանկացած վայրից և ստացեք գումարը կանխիկ կամ Ձեր բանկային քարտին</span>
                                    </li>
                                </ul>
                            </Col>
                        </Col>
                        <Calculator />
                    </div>
                </div>
            </div>
        )
    }
}
export default MainSectionBg;