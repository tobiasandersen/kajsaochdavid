import React from 'react'
import WeddingDressIcon from '../components/icon-wedding-dress'
import BalloonsIcon from '../components/icon-balloons'
import WeddingCardIcon from '../components/icon-wedding-card'
import WeddingRingIcon from '../components/icon-wedding-ring'

export default () => (
  <section className="section wrap" id="info">
    <h3>Info</h3>
    <ul className="info-list">
      <li>
        <span className="icon">
          <WeddingRingIcon />
        </span>
        <p>
          Vi gifter oss i{' '}
          <a
            href="https://goo.gl/maps/2hgLV32EfMn"
            alt="Google Maps to S:t Pauli Kyrka"
            target="_blank"
            rel="noopener noreferrer"
          >
            S:t Pauli Kyrka
          </a>{' '}
          i Malmö kl. 13.00.
        </p>
      </li>
      <li>
        <span className="icon">
          <BalloonsIcon />
        </span>
        <p>
          Efter vigseln blir det mat och fest på{' '}
          <a
            href="https://goo.gl/maps/AsyE7mSMDQD2"
            alt="Google Maps to S:t Pauli Kyrka"
            target="_blank"
            rel="noopener noreferrer"
          >
            Snoge Loge
          </a>{' '}
          så länge vi orkar.
        </p>
      </li>
      <li>
        <span className="icon">
          <WeddingDressIcon style={{ height: 43 }} />
        </span>
        <p>Klädsel: Kavaj</p>
      </li>
      <li>
        <span className="icon">
          <WeddingCardIcon style={{ height: 36 }}/>
        </span>
        <p>Vi vill veta om du kan komma senast den 1 mars 2019.</p>
      </li>
    </ul>
  </section>
)
