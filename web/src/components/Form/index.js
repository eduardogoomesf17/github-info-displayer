import React, { useState } from 'react';

import { FormContainer } from './styled';

export default function Form({ onSubmit }) {
  const [githubUsername, setGithubUsername] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    await onSubmit(githubUsername);

    setGithubUsername('');
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <input
        type="text"
        name="github_username"
        placeholder="Type your github username"
        value={githubUsername}
        onChange={(e) => setGithubUsername(e.target.value)}
      />
      <button type="submit">Search</button>
    </FormContainer>
  );
}
