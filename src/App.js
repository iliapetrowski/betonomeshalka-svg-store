import React, {useEffect, useState} from 'react'
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import {Route} from "react-router-dom";
import Cart from "./pages/Cart";
import axios from 'axios'


function App() {
    const [items, setItems] = useState([]);


    useEffect(() => {
      axios.get('http://localhost:3000/db.json')
          .then(({data})=> {
              console.log(data)
              setItems(data.mixers)
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
