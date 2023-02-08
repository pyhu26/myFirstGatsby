import * as React from 'react'
import Layout from '../components/layout'

const AboutPage=()=>{
    return(
        <Layout pageTitle='About Me'>
            <p>트렌디한 개발자가 되고 싶습니다.</p>
        </Layout>
    )
}

export const Head=()=> <title>About meme</title>
export default AboutPage