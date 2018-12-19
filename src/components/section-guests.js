import React from 'react'
import Guest from './guest'

export default ({ guests }) => {
  return (
    <section className="section wrap" id="guests">
      <h3>Gäster</h3>
      <p>
        Nyfiken på vem som kommer? Här kan du så småningom se vilka härliga
        personer som ska fira tillsammans med oss!
      </p>
      <div className="guest-list">
        {guests.map(({ node }, index) => (
          <Guest
            key={index}
            name={node.frontmatter.name}
            image={node.frontmatter.image}
            role={node.frontmatter.role}
            description={node.html}
          />
        ))}
      </div>
    </section>
  )
}
