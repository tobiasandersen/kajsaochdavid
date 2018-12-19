import React from 'react'
import CloseIcon from './icon-close'
import Portal from './portal'
import './header.css'
import debounce from 'lodash/debounce'

export default class Header extends React.Component {
  state = { showForm: false, didScroll: false, height: 0, width: 0 }

  onScroll = debounce(() => {
    const top = window.pageYOffset || document.documentElement.scrollTop

    if (top < 30 && this.state.didScroll) {
      this.setState({ didScroll: false, activeSection: null })
      return
    }

    if (top > 30 && !this.state.didScroll) {
      this.setState({ didScroll: true })
    }

    const activeSection = ['info', 'faq', 'toastmaster', 'guests' ].find(id => {
      const el = document.getElementById(id)
      const rect = el.getBoundingClientRect()
      const position = rect.top + (rect.height / 2)
      return position > 20 && position < rect.height + 100
    })

    this.setState({ activeSection })
  }, 100)

  componentDidMount() {
    document.addEventListener('scroll', this.onScroll)
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.onScroll)
  }

  onClick = id => () => {
    const el = document.getElementById(id)

    if (!el) {
      return
    }

    const rect = el.getBoundingClientRect()
    const top = window.pageYOffset || document.documentElement.scrollTop
    window.scroll({
      left: 0,
      top: rect.y - 100 + top,
      behavior: 'smooth',
    })
  }

  render() {
    const { showForm, didScroll, activeSection } = this.state
    const activeStyle = { borderBottom: '1px solid #222' }

    return (
      <div
        className="header"
        style={{
          boxShadow: didScroll ? '0 1px 20px -5px rgba(0, 0, 0, 0.5)' : '',
          transition: 'box-shadow .2s ease',
        }}
      >
        <div className="links wrap">
          <button
            style={{ ...(activeSection === 'info' ? activeStyle : {}) }}
            onClick={this.onClick('info')}
          >
            Info
          </button>
          <button
            style={{ ...(activeSection === 'faq' ? activeStyle : {}) }}
            onClick={this.onClick('faq')}
          >
            FAQ
          </button>
          <button
            style={{ ...(activeSection === 'toastmaster' ? activeStyle : {}) }}
            onClick={this.onClick('toastmaster')}
          >
            Toastmaster
          </button>
          <button
            style={{ ...(activeSection === 'guests' ? activeStyle : {}) }}
            onClick={this.onClick('guests')}
          >
            Gäster
          </button>
          <button
            className="osa-button"
            onClick={() => {
              this.setState({
                showForm: !this.state.showForm,
                width: window.innerWidth,
                height: window.innerHeight,
                iOS: /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
              })
            }}
          >
            O.S.A
          </button>
        </div>
        <Portal>
          <div
            style={{
              display: showForm ? 'block' : 'none',
              position: 'fixed',
              top: 40,
              height: this.state.height - 40,
              width: '100%',
              zIndex: 20,
            }}
          >
            <button
              className="close-button"
              onClick={() => {
                this.setState({ showForm: false })
              }}
            >
              <CloseIcon /> Stäng
            </button>
            <div className='osa-form-wrapper' style={{
              margin: '0',
              height: this.state.height - 60,
              overflow: this.state.iOS ? 'overlay' : 'hidden'
            }}>
              <iframe
                scrolling={this.state.iOS ? 'no' : 'auto'}
                className='osa-form'
                title="O.S.A"
                src="https://docs.google.com/forms/d/e/1FAIpQLScdhSZ5x3Zyq67YgN-kpetbEuzMy5jnxkeBev-LKWm0Jjc4Gg/viewform?embedded=true&hl=se"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
              />
            </div>
          </div>
        </Portal>
      </div>
    )
  }
}
