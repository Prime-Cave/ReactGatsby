import React from 'react'
import AboutHero from '../components/aboutPage/AboutHero'
import Layout from '../layout/layout';
import AboutContent from '../components/aboutPage/AboutContent'

const contact = () => {
    return (
      <div>
      <Layout>
        <AboutHero />
        <AboutContent />
      </Layout>
      </div>
    )
}


export default contact
