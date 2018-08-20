import React, { Component } from 'react'
import google_play_link from './../assets/Content/images/google-play.svg'

class Footer extends Component {
    render() {
        return (
            <div className="home_footer">
                <div className="container">
                    <div className="item">
                        <h2>ԿՈՆՏԱԿՏԱՅԻՆ ՏՎՅԱԼՆԵՐ</h2>
                        <div className="separator"></div>
                        <div className="content">
                            <p>098 58 80 05</p>
                            <p>	customersupport@goodcredit.am</p>
                            <p>	ք․Երևան, Տերյան 105/1 Ցիտադել մասնաճյուղ</p>
                        </div>
                    </div>
                    <div className="item">
                        <h2>ՕԳՏԱԿԱՐ</h2>
                        <div className="separator"></div>
                        <div className="content">
                            <p>
                                <a href="https://www.goodcredit.am/home/sparoxakan-varker">Kimbi.am նկարագրություն</a><br />
                                <a href="https://www.goodcredit.am/">Այլ ծառայություններ</a><br />
                                <a href="http://kimbi.goodcredit.am/api/attachment/GetFile?id=2">Գաղտնիության քաղաքականություն</a>
                            </p>
                        </div>
                    </div>
                    <div className="item">
                        <h2>ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ</h2>
                        <div className="separator"></div>
                        <div className="content">
                            <p>Facebook</p>
                            <p>Youtube</p>
                            <p>GoodCredit</p>
                            <p>Խելամիտ վառկ</p>
                            <p className="address">
                                <a href="https://play.google.com/store/apps/details?id=com.altacode.kimbimobile">
                                    <img alt="play store app" src={google_play_link} /></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer;