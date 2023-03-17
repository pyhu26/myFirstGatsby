import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage=()=>{
    return(
        <Layout pageTitle='About Me'>
            <p>트렌디한 개발자가 되고 싶습니다.</p>
        </Layout>
    )
}

export const Head=()=> <Seo title='About Me pyhu26'></Seo>
export default AboutPage