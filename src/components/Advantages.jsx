import React, { Component } from 'react'
import imgSimple from './../assets/Content/images/advantages-simple.png'
import imgFast from './../assets/Content/images/advantages-fast.png'
import imgComfortable from './../assets/Content/images/advantages-comfortable.png'


class Advantages extends Component {
    render() {
        return (<div className="advantages">
            <div className="container">
                <div className="heading">
                    <h2> Վարկ ստանալու ամենահեշտ <br />
                        <strong> և ամենաարագ տարբերակը </strong></h2>
                </div>
                <div className="adv-points">
                    <dir className="adv-point">
                        <img src={imgSimple} alt="fast credit" />
                        <h2>Պարզ</h2>
                        <p>Ընտրեք վարկի գումարը և ժամկետը, սեղմեք «Շարունակել» կոճակը</p>
                    </dir>
                    <dir className="adv-point">
                        <img src={imgFast} alt="fast credit" />
                        <h2>Պարզ</h2>
                        <p>Ընտրեք վարկի գումարը և ժամկետը, սեղմեք «Շարունակել» կոճակը</p>
                    </dir>
                    <dir className="adv-point">
                        <img src={imgComfortable} alt="fast credit" />
                        <h2>Պարզ</h2>
                        <p>Ընտրեք վարկի գումարը և ժամկետը, սեղմեք «Շարունակել» կոճակը</p>
                    </dir>
                </div>
            </div>
        </div>)
    }
}
export default Advantages