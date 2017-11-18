import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

//COMPONENTS
import Home from './components/home';
import Artist from './components/artist';
import LifeCycle from './components/lifecycle';

const App = () => {
    return(
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Home}></Route>
                <Route path="/artist/:artistid" component={Artist}></Route>
                <Route exact path="/lifecycle" component={LifeCycle}></Route>
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(<App/>,document.getElementById("root"));

// 1- GET DEFAULT STATE
// 2- SET INITIAL STATE
// 3- BEFORE GETS CREATED
// 4- RENDER JSX
// 5- AFTER A COMPONENT IS MOUNTED