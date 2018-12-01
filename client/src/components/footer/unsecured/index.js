import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import GeneralLinks from './general-links'
import Social from './social'
import NewsletterInvite from './newsletter'

class UnsecuredLinks extends Component {
  render() {
    return (
      <div className="links">
        <GeneralLinks />
        <Social />
        <NewsletterInvite />
      </div>
    )
  }
}

export default withRouter(UnsecuredLinks)
