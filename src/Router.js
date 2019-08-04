import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Route/Home";
import Detail from "./Route/Detail";

export default ()=>{
    return(
    <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/detail/:id" component={Detail} />
    </BrowserRouter>
    )
}

