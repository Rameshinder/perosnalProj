import React from 'react'

export default function (ComposedClass) {
  class AutoLogout extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        warningTime: 1000 * 60 * 10,
        signoutTime: 1000 * 60 * 15
      }
    }

    componentDidMount () {
      this.events = [
        'load',
        'mousemove',
        'mousedown',
        'click',
        'scroll',
        'keypress'
      ]

      for (var i in this.events) {
        window.addEventListener(this.events[i], this.resetTimeout)
      }

      this.setTimeout()
    }

    clearTimeoutFunc = () => {
      if (this.warnTimeout) { clearTimeout(this.warnTimeout) }

      if (this.logoutTimeout) { clearTimeout(this.logoutTimeout) }
    };

    setTimeout = () => {
      this.warnTimeout = setTimeout(this.warn, this.state.warningTime)
      this.logoutTimeout = setTimeout(this.logout, this.state.signoutTime)
    };

    resetTimeout = () => {
      this.clearTimeoutFunc()
      this.setTimeout()
    };

    warn = () => {
      console.log('You will be logged out automatically in 1 minute')
    };

    logout = () => {
      // Send a logout request to the API
      window.close()

      this.destroy()
    };

    destroy = () => {
      // clear the session
      window.location.assign('https://www.anz.com.au')
    };

    render () {
      return (
        <div>
          <ComposedClass {...this.props} />
        </div>
      )
    }
  }
  return AutoLogout
}
