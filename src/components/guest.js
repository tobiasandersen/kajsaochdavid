import React from 'react'
import Img from 'gatsby-image'

export default ({ name, description, image, role }) => (
  <div className="guest">
    <div className="guest-short">
      <div className="guest-name"><strong>{name}</strong></div>
      {role && <div className="guest-role">{role}</div>}
      {image ? (
        <Img fluid={image.childImageSharp.fluid} className="guest-image" />
      ) : (
        <div className="guest-image fallback">?</div>
      )}
    </div>
    <div
      className="guest-description"
      dangerouslySetInnerHTML={{ __html: description }}
    />
  </div>
)
