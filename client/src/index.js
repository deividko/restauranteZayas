// npm packages
import 'rxjs';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {Provider} from 'react-redux';

// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './app';
import store from './store';
import {requireAuth} from './util';

import Home from './pages/home';
import Create from './pages/create';
import Login from './pages/login';
import Register from './pages/register';
import NotFound from './pages/notfound';
// Plates pages routes
import Plates from './pages/plate';
import CreatePlate from './pages/plate/create';
// Other stufs
import ControlPanel from './pages/controlpanel/';
// Static pages
import AboutUs from './pages/aboutus';
import Testimonials from './pages/testimonials';

// JQuery for Bootstrap
global.jQuery = require('jquery/dist/jquery.min.js');
require('bootstrap/dist/js/bootstrap.min.js');

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);
// onEnter={requireAuth}
// render on page
ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="login" component={Login} />
        <Route path="create" component={Create} onEnter={requireAuth} />
        <Route path="register" component={Register} />
        <Route path="plates" component={Plates} onEnter={requireAuth} />
        <Route path="createplate" component={CreatePlate} onEnter={requireAuth} />
        <Route path="controlpanel" component={ControlPanel} onEnter={requireAuth} />
        <Route path="about" component={AboutUs} />
        <Route path="testimonials" component={Testimonials} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
