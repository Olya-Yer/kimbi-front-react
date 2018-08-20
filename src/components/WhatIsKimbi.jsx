import React, { Component } from 'react'
import Good_logo from './../assets/Content/images/goodcredit-masis-logo.png'

class WhatIsKimbi extends Component {
    render() {
        return (
            <div className="what_is_kimbi">
                <div className="container">
                    <h2>Ինչ է kimbi-ն</h2>
                    <div className="what_is_content">
                        <div className="text">
                            <p>Կիմբին 4finance խմբի ապրանքանիշերից է: 4finance խումբը Եվրոպայի ամենամեծ և արագ աճող օնլայն սպառողական վարկեր տրամադրող խումբն է, որին հաջողվել է ապահովել հաճախորդների բարձրակարգ սպասարկում 18 երկրներում:</p>
                            <p>Հայաստանում Կիմբին պատկանում է «ԳուդԿրեդիտ» ընկերությանը, որը 4finance խմբի անդամ է: Մենք հավատում ենք, որ «ԳուդԿրեդիտ» ընկերության շնորհիվ Հայաստանում նույնպես կարող ենք ապահովել բարձրորակ սպասարկում:</p>
                            <p>Մենք առաջարկում ենք գումար, երբ մարդիկ դրա կարիքն ունեն: Մենք ապահովում ենք արագ, հարմար և պատասխանատու վարկավորում:</p>
                        </div>
                        <img src={Good_logo} alt="good credit logo" />
                    </div>
                </div>
            </div>
        )
    }
}

export default WhatIsKimbi