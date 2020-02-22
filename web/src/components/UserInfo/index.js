import React from 'react';
import { FaUserAlt, FaPenAlt } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';

import { InfoContainer } from './styled';

export default function UserInfo({ githubUserInfo }) {
  if (!githubUserInfo) { return <div>Cheguei aqui no userInfo</div>; }

  return (
    <InfoContainer>
      <img src={githubUserInfo.avatarUrl} alt="Profile" />

      <p>
        <FaUserAlt size={16} />
        {' '}
        <a href={githubUserInfo.userUrl} target="_blank" rel="noopener noreferrer">
          {githubUserInfo.name}
        </a>
      </p>

      <p id="bio">
        <FaPenAlt size={16} />
        {' '}
        {githubUserInfo.bio}
      </p>

      <p>
        <GoLocation size={16} />
        {' '}
        {githubUserInfo.location}
      </p>

    </InfoContainer>
  );
}
