import React from 'react';

import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon
  } from 'react-share';

export default ({
    href,
    title
}) => (
  <div className="flex justify-center">
    <FacebookShareButton url={href}>
      <FacebookIcon size={64} round />
    </FacebookShareButton>
    <TwitterShareButton title={title} via={ 'yutanakano_net' } url={href} >
      <TwitterIcon size={64} round />
    </TwitterShareButton> 
  </div>   
);