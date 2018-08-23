import React, { Component } from 'react';
import { Col, FormControl } from 'react-bootstrap';
import ReactBootstrapSlider from 'react-bootstrap-slider';



class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            localLoanAmount: 95000,
            localMonth: 24,
        }
        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleMonthChange = this.handleMonthChange.bind(this);
    }
    handleValueChange(e) {
        const _loanAmountChange = e.target.value;
        this.setState({
            localLoanAmount: _loanAmountChange,
        })
    }
    handleMonthChange(e) {
        const _LocalMonth = e.target.value;
        this.setState({
            localMonth: _LocalMonth,
        })
    }

    render() {
        return (<div className="calculator">
            <div className="money-month">
                <Col sm={12} className="item">
                    <div className="text-section">
                        <h2>Գումար </h2>
                        <FormControl
                            type="number"
                            maxLength="5"
                            step={1000}
                            value={this.state.localLoanAmount}
                            // onBlur={this.onAmountBlur}
                            onChange={this.handleValueChange}

                        />
                    </div>
                    <ReactBootstrapSlider
                        value={this.state.localLoanAmount}
                        change={this.handleValueChange}
                        step={1000}
                        max={95000}
                        min={10000}

                    />
                </Col>
                <Col sm={12} className="item">
                    <div className="text-section">
                        <h2>Ամիս </h2>
                        <FormControl
                            type="number"
                            maxLength="24"
                            step={1}
                            value={this.state.localMonth}
                            // onBlur={this.onAmountBlur}
                            onChange={this.handleMonthChange}

                        />
                    </div>
                    <ReactBootstrapSlider
                        value={this.state.localMonth}
                        change={this.handleMontChange}
                        step={1}
                        max={24}
                        min={1}
                    />
                    <div className="slider"></div>
                </Col>            </div>
            <div className="loan_details">
                <div className="item">
                    <h3>Գումար</h3>
                    <p className="price">30000</p>
                </div>
                <div className="item">
                    <h3>Գումար</h3>
                    <p className="price">30000</p>
                </div>
                <div className="item">
                    <h3>Գումար</h3>
                    <p className="price">30000</p>
                </div>
                <div className="item">
                    <h3>Գումար</h3>
                    <p className="price">30000</p>
                </div>
                <div className="item">
                    <h3>Գումար</h3>
                    <p className="price">30000</p>
                </div>
                <p>*Ամիսը բաղկացած է 30 օրացույցային օրից</p>
                <button>
                    Շարունակել
                </button>
                <a href="">
                    Վարկի մարման ժամանակացույց
                </a>
                <a href="">
                    Ուսուցողական թերթիկ
                </a>
            </div>

        </div>)
    }
}

export default Calculator