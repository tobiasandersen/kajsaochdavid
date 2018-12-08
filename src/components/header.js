import React from 'react'
import { Link } from 'gatsby'
import CloseIcon from './icon-close'
import Portal from './portal'
import './header.css'

export default class Header extends React.Component {
  state = { showForm: false, height: 0, width: 0 }

  render () {
    const { showForm } = this.state

    return (
      <div className="header">
        <div className="links">
          <Link to="#info">Info</Link>
          <Link to="/gaster">Gäster</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/Toastmaster">Toastmaster</Link>
          <button
            onClick={() => {
              this.setState({
                showForm: !this.state.showForm,
                width: window.innerWidth,
                height: window.innerHeight
              })
            }}
          >
            O.S.A
          </button>
        </div>
        <Portal>
          <div style={{
            opacity: showForm ? 1 : 0,
            pointerEvents: showForm ? 'auto' : 'none',
            position: 'fixed',
            top: 80,
            width: '100%',
            zIndex: 2
          }}>
            <button className='close-button' onClick={() => {
              console.log('clicked')
              this.setState({ showForm: false })
            }}>
              <CloseIcon /> Stäng
            </button>
            <iframe
              title='O.S.A' src="https://docs.google.com/forms/d/e/1FAIpQLScdhSZ5x3Zyq67YgN-kpetbEuzMy5jnxkeBev-LKWm0Jjc4Gg/viewform?embedded=true&hl=se"
              width={this.state.width * 0.9}
              height={this.state.height - 160}
              style={{ marginLeft: '5%' }}
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
            />
          </div>
        </Portal>
      </div>
    )
  }
}
