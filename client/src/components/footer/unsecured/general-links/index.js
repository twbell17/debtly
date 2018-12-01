/* eslint-disable no-console */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './index.css'

class GeneralLinks extends Component {
  render() {
    return (
      <div styleName="Container">
        <span>General</span>
        <Link to="/faqs">FAQs</Link>
        <Link to="/contact-us">Contact Us</Link>
      </div>
    )
  }
}

export default GeneralLinks
