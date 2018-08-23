import React, { Component } from 'react'
import Footer from './Footer'
import MainSectionBg from './MainSection-bg'
import Advantages from './Advantages'
import HowToApply from './HowToApply'
import ContinueBtn from './ContinueBtn'
import MapAddress from './MapAddress'
import Partners from './Partners'
import WhatIsKimbi from './WhatIsKimbi'
import InfoSection from './InfoSection'
import SmallPartMainSection from './SmallPartMainSection'


class Home extends Component {

    render() {
        return (
            <div>
                <MainSectionBg />
                <SmallPartMainSection />
                <Advantages />
                <HowToApply />
                <ContinueBtn props={this.props} />
                <MapAddress />
                <Partners />
                <WhatIsKimbi />
                <InfoSection />
                <Footer />
            </div>

        )
    }
}

export default Home;