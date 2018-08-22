import React, { Component } from 'react'
import { Col } from 'react-bootstrap'

class ContinueBtn extends Component {
    render() {
        return (
            <div className="continue-btn">
                <Col md={5} xs={12}>
                    <h2>Դուք մշտապես կարող եք կարգավորել Ձեր տվյալները <br />
                        <strong>ցանկացած վայրից համակարգչով կամ բջջային հեռախոսով</strong>
                    </h2>
                    <button className="continue-btn-general">{"Շարունակել"}</button>
                </Col>
            </div>
        )
    }
}
export default ContinueBtn;