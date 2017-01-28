import React from 'react'
import InnerNavbar from './InnerNavbar.js'

export default function Help () {
  return (
    <div>
      <InnerNavbar />
      <div className='inner'>
        <header className='help'>
          <h1>Help Me</h1>
        </header>
        <div className='lower'>
          <h2>FAQs and How-to-dos</h2>
          <p>It would be nice to have some cool breadcrumbs and how-to docs here.</p>
        </div>
      </div>
    </div>
  )
}
