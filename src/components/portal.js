import React from 'react'
import ReactDOM from 'react-dom'

export default class Portal extends React.Component {
  state = {}
  
  componentDidMount () {
    this.setState({ didMount: true })
  }

  componentWillUnmount() {
    if (this.defaultNode) {
      document.body.removeChild(this.defaultNode)
    }

    this.defaultNode = null
  }

  render() {
    const { node, children, className, style } = this.props

    if (!this.state.didMount) {
      return null
    }

    if (!node && !this.defaultNode) {
      this.defaultNode = document.createElement('div')

      if (style) {
        this.defaultNode.style = style
      }

      if (className) {
        this.defaultNode.className = className
      }
      document.body.appendChild(this.defaultNode)
    }

    return ReactDOM.createPortal(children, node || this.defaultNode)
  }
}
