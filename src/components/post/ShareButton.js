import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon
} from 'react-share';

const ShareButton = ({title, slug}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            siteUrl
          }
        }
      }
    `
  );
  const via = site.siteMetadata.author + '_jp'
  const url = site.siteMetadata.siteUrl + slug
  return (
    <>
      <div className="flex justify-center p-4">
          <p className="font-semibold text-gray-500 text-opacity-100">＼ Share ／</p>
      </div>
      <div className="flex justify-center">
          <FacebookShareButton url={ url }>
            <FacebookIcon size={64} round />
          </FacebookShareButton>
          <TwitterShareButton title={ title } via={ via } url={ url }>
            <TwitterIcon size={64} round />
          </TwitterShareButton>
      </div>
    </>
  );
};

export default ShareButton;