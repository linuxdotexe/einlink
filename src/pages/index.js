import * as React from "react"

import '../styles/global.css'

import Navbar from "../../components/Navbar"
import Hero from "../../components/Hero"
import Callout from "../../components/Callout"
import Features from "../../components/Features"
import How from "../../components/How"
import Footer from "../../components/Footer"

const IndexPage = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <How />
      <Callout />
      <Footer />
    </main>
  )
}

export default IndexPage
