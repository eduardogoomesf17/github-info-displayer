import React, { useState } from 'react';
import axios from 'axios';
import { get } from 'loadsh';
import { toast, ToastContainer } from 'react-toastify';

import GlobalStyles, { Container } from './styles/GlobalStyles';
import Form from './components/Form';
import UserInfo from './components/UserInfo';
import UserRepos from './components/UserRepos';

function App() {
  const [githubUserInfo, setGithubUserInfo] = useState({});
  const [githubUserRepos, setGithubUserRepos] = useState([]);

  async function handleUserSearch(username) {
    try {
      const response = await axios.get(`http://localhost:3010/repositories/${username}`);

      if (response.error) {
        toast.error('User or Repositories not found');
      }

      setGithubUserInfo({ ...response.data });

      const repos = response.data.repositoriesData;

      setGithubUserRepos([...repos]);

      toast.success('There you go =)');
    } catch (e) {
      toast.error('User or repositories not found =(');
    }
  }

  return (
    <Container>
      <h1>Find your github repositories</h1>

      <Form onSubmit={handleUserSearch} />
      <hr />

      <div className="userInfo">
        {get(githubUserInfo, 'login', false) ? <UserInfo githubUserInfo={githubUserInfo} /> : <p />}
      </div>

      <hr />

      <div className="userRepos">
        {githubUserRepos.map((githubUserRepo) => <UserRepos id={githubUserRepos.repoName} githubUserRepo={githubUserRepo} />)}
      </div>

      <GlobalStyles />
      <ToastContainer autoClose={4000} />
    </Container>
  );
}

export default App;
