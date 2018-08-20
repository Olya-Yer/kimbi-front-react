import React, { Component } from 'react'
import Footer from './Footer'
import MainSectionBg from './MainSection-bg'
import Advantages from './Advantages'
import HowToApply from './HowToApply'
import ContinueBtn from './ContinueBtn'
import MapAddress from './MapAddress'


class Home extends Component {

    render() {
        return (
            <div>
                <MainSectionBg />
                <Advantages />
                <HowToApply />
                <ContinueBtn />
                <MapAddress />
                <Footer />
            </div>

        )
    }
}

export default Home;