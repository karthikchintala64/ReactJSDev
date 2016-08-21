import React from 'react';
import { render } from 'react-dom';

import  Home  from './components/Home';
import  App  from './components/App';
import  About  from './components/About';
import  Services  from './components/Services';
import  Products  from './components/Products';
import  ProductDetails  from './components/ProductDetails';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, {history} from './store';

const router=(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Products}></IndexRoute>
                <Route path="/about" component={About}></Route>
                <Route path="/services" component={Services}></Route>
                <Route path="/products" component={Products}></Route>
                <Route path="/product/:productid" component={ProductDetails}></Route>
            </Route>
        </Router>
    </Provider>
)

render(router,document.getElementById('app'));