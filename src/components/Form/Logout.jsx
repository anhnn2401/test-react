import React from 'react'
import PropTypes from 'prop-types'
import { withCookies } from 'react-cookie'

class Logout extends React.Component {
  constructor (props) {
    super(props)
    const { cookies } = props
    if (!cookies.remove('token')) {
      props.history.push('/')
    }
  }

  render () {
    return (
      <div />
    )
  }
}
Logout.propTypes = {
  // cookies: String.isRequired
  cookies: PropTypes.object
}

export default withCookies(Logout)
