import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch, 
} from 'react-router-dom';

/* Web application components */
import Home from './Layout/Component/Home';
import Services from './Layout/Component/Services';
// import Blogs from './Layout/Component/Blogs';
import About from './Layout/Component/About';
import ContactUs from './Layout/Component/ContactUs';
import Careers from './Layout/Component/Careers';
import NotFound from './Layout/Component/NotFound';
import Post from '../src/testing/Post'

const siteRoutes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/services' component={Services} />
                {/* <Route exact path='/blogs' component={Blogs} /> */}
                <Route exact path='/about' component={About} />
                <Route exact path='/careers' component={Careers} />
                <Route exact path='/contact-us' component={ContactUs} />
                <Route exact path='/posts' component={Post} />
                <Route exact path='*' component={NotFound} />
            </Switch>
        </Router>
    )
}

export default siteRoutes;