import React from 'react'
import Login from './Components/Login'
import Navbar from './Components/Navbar'
import './index.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Tracker from './Components/Tracker'
import ProtectedRoute from './Components/AuthProtection/ProtectedRoute'
import ChartComponent from './Components/Charts/Chartcomponent'
import LifetimeRecords from './Components/LifetimeRecords'
import Loadingtransactions from './Components/Helper/Loadingtransactions'
import InputfieldContoller from './Components/Contexts/InputfieldContoller'

const App = () => {
    return (
        <Router>
            <Navbar />
            <InputfieldContoller>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/l" component={ChartComponent} />
                    <Route exact path="/lo" component={Loadingtransactions} />
                    <ProtectedRoute path="/tracker" component={Tracker} />
                    <ProtectedRoute path="/lifetime-records" component={LifetimeRecords} />
                </Switch>
            </InputfieldContoller>
        </Router>
    )
}

export default App
