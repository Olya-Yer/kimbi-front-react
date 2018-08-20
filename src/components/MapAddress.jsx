import React, { Component } from 'react'
import map_pin from './../assets/Content/images/map-pin.png'

class MapAddress extends Component {
    render() {
        return (
            <div className="map_address">
                <div className="container">
                    <h2>Հեշտությամբ <br />
                        <strong>ստացեք գումարը</strong>
                    </h2>
                    <div className="map_address_content" >
                        <img src={map_pin} alt="address on the map" />
                        <div >
                            <h2>Կանխիկ Ցիտադել մասնաճյուղում</h2>
                            <p className="detail-title-bold">Երևան, Տերյան 105 /1</p>
                            <p>
                                <strong>Աշխատանքային</strong><br />
                                ժամերը` երկուշաբթիից ուրբաթ`<br /> <strong>10:00-19:00</strong></p>
                            <p>Հեռ.՝ <br />
                                <strong>098588005</strong></p></div>
                        <div className="triangle"></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default MapAddress;