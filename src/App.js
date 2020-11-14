import React from 'react'
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import {Route} from "react-router-dom";
import Cart from "./pages/Cart";


function App() {
    return (
        <div className="wrapper">
            <Header/>

            <div className="content">
                <Route exact path='/' component={HomePage}/>
                <Route  path='/cart' component={Cart}/>

            </div>
        </div>
    );
}

export default App;
