import React, { Component } from 'react'
import google_play_link from './../assets/Content/images/google-play.svg'
import facebookIcon from '../assets/Content/images/icon-facebook.png'
import youtubeIcon from '../assets/Content/images/icon-youtube.png'
import goodCreditIcon from '../assets/Content/images/icon-goodcredit.png'
import smartCreditIcon from '../assets/Content/images/Reasonable-creadit-logo.png'

class Footer extends Component {
    render() {
        return (
            <div className="home_footer">
                <div className="container">
                    <div className="item">
                        <h2>ԿՈՆՏԱԿՏԱՅԻՆ ՏՎՅԱԼՆԵՐ</h2>
                        <div className="separator"></div>
                        <div className="content">
                            <p>
                                <span> <i className="fas fa-phone"></i></span>
                                098 58 80 05</p>
                            <p>
                                <span><i className="far fa-envelope-open"></i></span>
                                customersupport@goodcredit.am</p>
                            <p>
                                <span> <i className="fas fa-map-marker-alt"></i></span>
                                ք․Երևան, Տերյան 105/1 Ցիտադել մասնաճյուղ</p>
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
                            <p>
                                <span> <img src={facebookIcon} alt="facebook icon" /></span>
                                Facebook</p>
                            <p>
                                <span> <img src={youtubeIcon} alt="youtube icon" /></span>
                                Youtube</p>
                            <p>
                                <span> <img src={goodCreditIcon} alt="GoodCredit icon" /></span>
                                GoodCredit</p>
                            <p>
                                <span> <img src={smartCreditIcon} alt="Smart credit icon" /></span>
                                Խելամիտ վառկ</p>
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