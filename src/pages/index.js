import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage=()=>{
  return(
    <Layout pageTitle='Home Page'>
      <p>처음부터 만드는 gatsby</p>
      <StaticImage
        alt='이미지 설명'
        src='../images/dog.png'
      ></StaticImage>
    </Layout>
  )
}

export const Head=()=> <title>pyhu26 home</title>

export default IndexPage