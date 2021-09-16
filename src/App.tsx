import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from './components/Login/Login'
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";

function App() {
    return (
        <div className="App">
            <Router>
                <Header/>
                <Switch>
                    <Route exact path={'/'} render={() => <Login/>}/>
                    <Route exact path={'/home'} render={() => <Home/>}/>
                    <Route path={'/detail/:id'} render={() => <Detail/>}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
