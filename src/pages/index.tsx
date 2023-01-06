import type { HeadFC, PageProps } from "gatsby"
import * as React from "react"
import Footer from "../partials/Footer"

const IndexPage: React.FC<PageProps> = () => {
  return (<main>
    <Footer/>
  </main>
    
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
