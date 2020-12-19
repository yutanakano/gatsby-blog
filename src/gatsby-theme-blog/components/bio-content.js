import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

export default ({ author, description }) => (
  <>
    {author}<br />
    元ネトゲ廃人でwebエンジニアです。<br />
    関心事は 業務改善 組織改善 DDD Scrum です。<br />
    <b>{description}</b><br />
    <br />
    <a href="https://github.com/yutanakano">
      <FontAwesomeIcon
        color="#333"
        size="2x"
        icon={faGithubSquare} />
    </a>

    <a href="https://twitter.com/yutanakano_net">
      <FontAwesomeIcon
        color="#3eaded"
        size="2x"
        icon={faTwitterSquare} />
    </a>

  </>
);