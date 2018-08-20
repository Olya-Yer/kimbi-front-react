import React, { Component } from 'react'
import credit_card from './../assets/Content/images/credit-card.png'
import finger_up from './../assets/Content/images/finger-up.png'
import banks from './../assets/Content/images/banks.png'
import partners from './../assets/Content/images/partners.png'

class Partners extends Component {
    render() {
        return (
            <div className="partners">
                <div className="container">
                    <div className="item">
                        <img src={credit_card} alt="pay with bank" />
                        <div>
                            <h2>Փոխանցում Ձեր բանկային քարտին</h2>
                            <img src={banks} alt="our partner banks" />
                        </div>
                    </div>
                    <div className="item">
                        <img src={finger_up} alt="our partners" />
                        <div>
                            <h2>Կանխիկ` մեր գործընկերների միջոցով</h2>
                            <img src={partners} alt="our partners" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Partners;