import type { HeadFC, PageProps } from "gatsby"
import * as React from "react"

const IndexPage: React.FC<PageProps> = () => {
  return (<main>
    <h1 className="bg-red-500"> sexor</h1>
  </main>
    
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
