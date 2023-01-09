import type { HeadFC, PageProps } from "gatsby"
import * as React from "react"
import About from "../partials/About"
import Footer from "../partials/Footer"
import Hero from "../partials/Hero"

const IndexPage: React.FC<PageProps> = () => {
  return (<main>
    <Hero/>
    <About/>
    <Footer/>
  </main>
    
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
