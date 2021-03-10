/* eslint-disable react/prop-types */
import React from 'react'
import Layout from '../components/Layout/layout'
import Header from '../components/Headers/header'
import About from '../components/About/about'
import Projects from '../components/Projects/projects'
import Writing from '../components/Writing/writing'
import Contact from '../components/Contact/contact'
import '../styles/main.scss'
// import ScreenWidth from "../components/Utils/ScreenWidth"
import SEO from '../components/seo'

const IndexPage = ({ location }) => {
  // const { width } = ScreenWidth()
  const hash = location.hash.split('#')[1]
  const currentRoute = hash || 'home'
  const title = currentRoute.replace(/^./, currentRoute[0].toUpperCase())

  return (
    <Layout>
      <SEO title={title} />
      <Header />
      <About />
      <Projects />
      <Writing />
      <Contact />
    </Layout>
  )
}

export default IndexPage
