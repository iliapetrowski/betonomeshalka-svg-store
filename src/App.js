import React, {useEffect, useState} from 'react'
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import {Route} from "react-router-dom";
import Cart from "./pages/Cart";


function App() {
    const [items, setItems] = useState([]);


    useEffect(() => {
        fetch('http://localhost:3000/db.json')
            .then((resp)=> resp.json())
            .then((json)=>{
                setItems(json.mixers)
                console.log(items)
            })
    }, []);



    return (
        <div className="wrapper">
            <Header/>

            <div className="content">
                <Route exact path='/' render={(props) => <HomePage {...props} items={items} />}/>
                <Route  path='/cart' component={Cart}/>

            </div>
        </div>
    );
}

export default App;
