import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import Test from './components/test/test'
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';

import Page from './components/Page'
import Dashboard from './components/dashboard/Dashboard';

const routes =
    <Route path={'/'} components={Page}>
        <IndexRedirect to="/app/dashboard/index" />
        <Route path={'app'} component={App}>
            <Route path={'form'}>
                <Route path="enen" component={Test}></Route>
            </Route>
            <Route path={'dashboard/index'} component={Dashboard} />
        </Route>
    </Route>;


ReactDOM.render(
    <Router history={hashHistory}>
        {routes}
    </Router>,
    document.getElementById('root')
);