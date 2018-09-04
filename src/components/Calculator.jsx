import React, { Component } from 'react';
import { Col, FormControl } from 'react-bootstrap';
import ReactBootstrapSlider from 'react-bootstrap-slider';





class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            localLoanAmount: 400000,
            localMonth: 30,
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

    calculateLoanShedule(loanAmount, loanMonth, nominalInterestRate) {
        var loanSchedule = [];
        var serviceFee = (loanAmount * 3) / 100;
        for (var i = 1; i <= loanMonth; i++) {
            var paymentDate = i === 1 ? new Date().setDate(new Date().getDate() + 31) :
                new Date(loanSchedule[i - 2].payDate).setDate(new Date(loanSchedule[i - 2].payDate).getDate() + 30);
            //  var percentAmount = i == 1 ? vm.loanData.nominalInterestRate
            var paymentAmount = 0;
            var remnant = 0;
            var redemption = 0;
            var originalRemnant = 0;

            if (i === 1) {
                paymentAmount = Math.abs(
                    (Math.pow(1 + nominalInterestRate * 30, -1 * loanMonth)) *
                    30 * nominalInterestRate / (Math.pow(1 + nominalInterestRate * 30, -1 *
                        loanMonth) - 1)) * loanAmount;
                originalRemnant = loanAmount - paymentAmount;
                remnant = Math.round(originalRemnant);
                redemption = loanAmount * 30 * nominalInterestRate;
            }
            else {
                paymentAmount = Math.abs(
                    (Math.pow(1 + nominalInterestRate * 30, -1 * (loanMonth - i + 1))) *
                    30 * nominalInterestRate / (Math.pow(1 + nominalInterestRate * 30, -1 *
                        (loanMonth - i + 1)) - 1)) * loanSchedule[i - 2].originalRemnant;
                originalRemnant = loanSchedule[i - 2].originalRemnant - paymentAmount;
                remnant = Math.round(originalRemnant);
                redemption = loanSchedule[i - 2].originalRemnant * 30 * nominalInterestRate;
            }


            if (remnant < 0) remnant = 0;

            var monthlyFee = paymentAmount + serviceFee + redemption;
            var obj = {
                month: i,
                payDate: paymentDate,
                redemptionPercent: redemption.toFixed(2),
                serviceFee: serviceFee,
                monthlyPayment: monthlyFee.toFixed(2),
                amountRemnant: remnant,
                loanPayment: paymentAmount,
                originalRemnant: originalRemnant
            };
            loanSchedule.push(obj);
        }
        // console.log(loanSchedule);
        // console.log(loanSchedule[0].payDate)
        // console.log(new Date(loanSchedule[0].payDate))
        return loanSchedule;
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
                        max={400000}
                        min={10000}

                    />
                </Col>
                <Col sm={12} className="item">
                    <div className="text-section">
                        <h2>Ամիս </h2>
                        <FormControl
                            type="number"
                            maxLength="30"
                            step={1}
                            value={this.state.localMonth}
                            // onBlur={this.onAmountBlur}
                            onChange={this.handleMonthChange}

                        />
                    </div>
                    <ReactBootstrapSlider
                        value={this.state.localMonth}
                        change={this.handleMonthChange}
                        step={1}
                        max={24}
                        min={12}
                    />
                    <div className="slider"></div>
                </Col>            </div>
            <div className="loan_details">
                <div className="item">
                    <h3>Գումար</h3>
                    <p className="price" >{this.state.localLoanAmount}</p>
                </div>
                <div className="item">
                    <h3>Ամիս</h3>
                    <p className="price">{this.state.localMonth}</p>
                </div>
                <div className="item">
                    <h3>Տրամադրման ենթակա գումար <br />
                        <span>-6% տրամադրման վճար</span></h3>
                    <p className="price">{this.state.localLoanAmount - this.state.localLoanAmount * 0.006}</p>
                </div>
                <div className="item">
                    <h3>Ամսական մարում</h3>
                    <p className="price">{Math.round(this.calculateLoanShedule(this.state.localLoanAmount,
                        this.state.localMonth, (24 / 100) / 365)[0].monthlyPayment)}</p>
                </div>
                <div className="item">
                    <h3>Ընդամենը վճարման գումար</h3>
                    <p className="price">{Math.round(this.calculateLoanShedule(this.state.localLoanAmount,
                        this.state.localMonth, (24 / 100) / 365)[0].monthlyPayment * this.state.localMonth)}</p>
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