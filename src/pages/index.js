import React from 'react'
import './index.css'
import Layout from '../components/layout'
import IntroSection from '../components/section-intro'
import InfoSection from '../components/section-info'
import FaqSection from '../components/section-faq'
import ToastermasterSection from '../components/section-toastmaster'
import GuestsSection from '../components/section-guests'
import Measure from 'react-measure'

const sections = [
  [IntroSection, 'transparent'],
  [InfoSection, '#eaf8ff'],
  [GuestsSection, '#fff5e5'],
  [FaqSection, '#fafafa'],
  [ToastermasterSection, '#f9f0f0']
]

class IndexPage extends React.Component {
  state = { contentHeight: 0, footerHeight: 0 }

  render () {
    const { contentHeight, footerHeight, didScroll } = this.state

    return (
      <Measure
        bounds
        onResize={footerRect => {
          const pageHeight = window.innerHeight
          const footerHeight = footerRect.bounds.height
          const contentHeight = pageHeight - footerHeight - 60
          this.setState({ footerHeight, contentHeight })
        }}
      >
        {({ measureRef }) => (
          <Layout measureRef={measureRef} didScroll={didScroll}>
            {sections.map(([Component, color], idx) => (
              <div key={idx} style={{
                background: color,
                marginBottom: idx === 0 ? footerHeight / 3 : 0,
                paddingBottom: idx === sections.length - 1 ? footerHeight / 1.5 : 0,
                display: 'flex',
                flexDirection: 'column',
                minHeight: contentHeight
              }}>
                <Component />
              </div>
            ))}
          </Layout>
        )}
      </Measure>
    )
  }
}

export default IndexPage
