import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import RegistrationFirstPage from './components/RegistrationFirstPage'

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/registration' component={RegistrationFirstPage} />
            </Switch>
        )
    }
}

export default App;