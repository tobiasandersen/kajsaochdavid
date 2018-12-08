import React from 'react'
import './index.css'
import Layout from '../components/layout'
import David from '../components/img-david'
import Kajsa from '../components/img-kajsa'
import InfoSection from '../components/section-info'
import InfoFAQ from '../components/section-faq'

const IndexPage = () => (
  <Layout>
    <div className="content">
      <div className="images">
        <div className="david">
          <David />
        </div>
        <div className="kajsa">
          <Kajsa />
        </div>
      </div>
      <h1>Kajsa & David</h1>
      <h2>Lördag 10 augusti 2019</h2>
    </div>
    <InfoSection />
    <InfoFAQ />
  </Layout>
)

export default IndexPage
