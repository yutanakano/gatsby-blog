import React from 'react';

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon
} from 'react-share';

export default ({
  location,
  title
}) => (
  <>
    <div className="flex justify-center p-4">
        <p className="font-semibold text-gray-500 text-opacity-100">＼ Share ／</p>
    </div>
    <div className="flex justify-center">
        <FacebookShareButton url={location.href}>
          <FacebookIcon size={64} round />
        </FacebookShareButton>
        <TwitterShareButton title={title} via={ 'yutanakano_net' } url={location.href} >
          <TwitterIcon size={64} round />
        </TwitterShareButton>
    </div>
  </>
);