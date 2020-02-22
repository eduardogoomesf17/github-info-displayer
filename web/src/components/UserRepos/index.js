import React from 'react';

import { ReposContainer } from './styled';

export default function UserRepo({ githubUserRepo }) {
  if (!githubUserRepo) return <div />;

  return (
    <a href={githubUserRepo.repoUrl} target="_blank" rel="noopener noreferrer">
      <ReposContainer>
        <p className="repoName">{githubUserRepo.repoName}</p>
        <p className="repoBio">{githubUserRepo.description}</p>
      </ReposContainer>
    </a>
  );
}
