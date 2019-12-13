import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import page1 from   './componentes/page1';
import page2 from   './componentes/page2';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
const Root=(
   
    <BrowserRouter>
        <Switch>
            <Route path="/page1"component={page1} />
            <Route path="/page2" component={page2} />
            <Redirect from="/" to="/page1"/>
        </Switch>
    </BrowserRouter>
    
);


ReactDOM.render(Root, document.getElementById('root'));


