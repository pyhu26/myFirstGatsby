import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

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

export const Head=()=> <Seo title='pyhu26 home'> </Seo>

export default IndexPage