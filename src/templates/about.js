import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/about.scss";

const AboutPage = (raw) => {
  const { data, location } = raw;

  return (
    <Layout
      location={location}
      icp={data.site.siteMetadata.icp}
      projectUrl={data.site.siteMetadata.projectUrl}
    >
      <Seo title="About" />
      <div className="about-wrapper">
        <div className="accerator glass card">
          <h2 className="title">About Me</h2>
          <div className="content">
            <p>
              Hi, I'm {data.site.siteMetadata.author.name}, a front-end
              developer.
            </p>
            <p>
              Contact me through{" "}
              <a
                alt="Telegram"
                className="purea"
                href={`https://t.me/cancergary`}
              >
                Telegram
              </a>
            </p>
            <p>To be continued...</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        icp
        projectUrl
        author {
          name
          mail
        }
      }
    }
  }
`;
