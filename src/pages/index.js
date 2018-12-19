import React from 'react'
import './index.css'
import Layout from '../components/layout'
import IntroSection from '../components/section-intro'
import InfoSection from '../components/section-info'
import FaqSection from '../components/section-faq'
import ToastermasterSection from '../components/section-toastmaster'
import GuestsSection from '../components/section-guests'
import Measure from 'react-measure'
import { graphql } from 'gatsby'

const sections = [
  [IntroSection, 'transparent'],
  [InfoSection, '#eaf8ff'],
  [FaqSection, '#fafafa'],
  [ToastermasterSection, '#f9f0f0'],
  [GuestsSection, '#fff5e5']
]

class IndexPage extends React.Component {
  state = { contentHeight: 0, footerHeight: 0, pageHeight: 0 }

  render () {
    const { contentHeight, footerHeight } = this.state
    const {
      data: {
        allMarkdownRemark: { edges },
      },
    } = this.props

    return (
      <Measure
        bounds
        onResize={footerRect => {
          const pageHeight = window.innerHeight
          const footerHeight = footerRect.bounds.height
          const contentHeight = pageHeight - footerHeight - 60
          this.setState({ pageHeight, footerHeight, contentHeight })
        }}
      >
        {({ measureRef }) => (
          <Layout measureRef={measureRef} {...this.state}>
            {sections.map(([Component, color], idx) => (
              <div key={idx} style={{
                background: color,
                marginBottom: idx === 0 ? footerHeight / 3 : 0,
                paddingBottom: idx === sections.length - 1 ? footerHeight / 1.5 : 0,
                display: 'flex',
                flexDirection: 'column',
                minHeight: contentHeight
              }}>
                <Component guests={edges} />
              </div>
            ))}
          </Layout>
        )}
      </Measure>
    )
  }
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___order] }) {
      edges {
        node {
          html
          frontmatter {
            name
            role
            image {
              childImageSharp {
                fluid(maxWidth: 100) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
