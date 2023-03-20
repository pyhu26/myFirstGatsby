import * as React from "react";
import Layout from "../components/layout";
import Profile from "../components/profile";
import Seo from "../components/seo";

const AboutPage = () => {
  return (
    <Profile>
      <Layout pageTitle="About Me">
        <p>트렌디한 개발자가 되고 싶습니다.</p>
      </Layout>
    </Profile>
  );
};

export const Head = () => <Seo title="About Me pyhu26"></Seo>;
export default AboutPage;
