import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import CSSModules from 'react-css-modules'

import css from './index.css'
import Header from '../components/header'
import Footer from '../components/footer'

// Secure Pages
import Landing from './secure/landing'
import Profile from './secure/profile'
import SignOut from './secure/sign-out'

// 404 Page
import BadRequest from './unsecure/bad-request/'
// Unsecure Pages
import ContactUs from './unsecure/contact-us/'
import FAQs from './unsecure/faqs/'
import Home from './unsecure/home/'
import Login from './unsecure/login/'
import Register from './unsecure/register'
import Recover from './unsecure/recover'
import Reset from './unsecure/reset'


class App extends Component {
  render() {
    const { pathname } = this.props.location
    return (
        <div styleName="appContainer">
            <Header pathname={pathname} />
            <div styleName="leftSide" />
                <Switch>
                    <Route exact path="/" component={Home} />,
                    <Route exact path="/login" component={Login} />,
                    <Route exact path="/create-account" component={Register} />,
                    <Route exact path="/forgot-password" component={Recover} />,
                    <Route exact path="/reset-password" component={Reset} />,
                    <Route exact path="/faqs" component={FAQs} />,
                    <Route exact path="/contact-us" component={ContactUs} />,

                    <Route exact path="/sign-out" component={SignOut} />
                    <Route exact path="/landing" component={Landing} />
                    <Route path="/profile" component={Profile} />
                    <Route component={BadRequest} />
                </Switch>
            <div styleName="rightSide"/>
            <Footer pathname={pathname} />
        </div>
    )
  }
}

export default withRouter(CSSModules(App, css))
