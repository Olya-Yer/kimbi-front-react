import React, { Component } from 'react'
import how_to_apply from '../assets/Content/images/how-to-apply.png'

class HowToApply extends Component {
    render() {
        return (
            <div className="how_to_apply">
                <div className="container">
                    <div className="how_to_apply_content" >
                        <img src={how_to_apply} alt="how to apply for credit" />
                        <p>Դիմելու համար անհրաժեշտ է լինել ՀՀ ռեզիդենտ ֆիզիկական անձ,<strong> 23-70 տարեկան </strong>, ունենալ անձնագիր և հանրային ծառայություննեիր համարանիշ (սոց. քարտ) կամ միայն նույնականացման քարտ</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default HowToApply