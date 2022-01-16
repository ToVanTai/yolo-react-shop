
import React from 'react'
import {Switch,Route} from 'react-router-dom';
import Cart from './../pages/Cart'
import Catalog from './../pages/Catalog'
import Home from './../pages/Home'
import Product from './../pages/Product'
const Routes = () => {
    return (
        <Switch>
            <Route  path='/' exact component={Home}/>
            <Route  path='/catalog/:slug'  component={Product}/>
            <Route  path='/catalog'  component={Catalog}/>
            <Route  path='/cart'   component={Cart}/>
        </Switch>
    )
}

export default Routes
