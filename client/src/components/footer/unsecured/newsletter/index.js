/* eslint-disable no-console */
import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'

import './index.css'

class NewsletterInvite extends Component {
  render() {
    return (
      <div styleName="Container">
        <div>SIGN UP FOR OUR FREE NEWSLETTER</div>
        <Input action={{ color: 'green', content: 'Send' }} placeholder="Your Email" />
      </div>
    )
  }
}

export default NewsletterInvite
