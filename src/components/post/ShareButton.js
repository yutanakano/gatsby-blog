import React from 'react';

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon
} from 'react-share';

const ShareButton = ({author, siteUrl, slug, title}) => {
  const via = author + '_jp'
  const url = siteUrl + slug
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