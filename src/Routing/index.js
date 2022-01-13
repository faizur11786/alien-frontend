import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
} from "react-router-dom";
import Landing from '../container/Landing';


const Routing = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Landing />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routing
