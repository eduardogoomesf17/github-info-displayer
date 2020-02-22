import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { get } from 'loadsh';
import { toast, ToastContainer } from 'react-toastify';

import GlobalStyles, { Container } from './styles/GlobalStyles';
import Form from './components/Form';
// import UserInfo from './components/UserInfo';
// import UserRepos from './components/UserRepos';

function App() {
  const [githubUserInfo, setGithubUserInfo] = useState({});
  const [githubUserRepos, setGithubUserRepos] = useState([]);

  useEffect(() => {
    console.log(githubUserInfo);
  }, [githubUserInfo]);

  useEffect(() => {
    console.log(githubUserRepos);
  }, [githubUserRepos]);

  async function handleUserSearch(username) {
    try {
      const response = await axios.get(`http://localhost:3010/repositories/${username}`);

      if (response.error) {
        toast.error('User or Repositories not found');
      }

      setGithubUserInfo({ ...response.data });

      const repos = response.data.repositoriesData;

      setGithubUserRepos([...repos]);

      toast.success('There you are');
    } catch (e) {
      toast.error('User or repositories not found');
    }
  }

  return (
    <Container>
      <h1>Find your github repositories</h1>

      <Form onSubmit={handleUserSearch} />
      <hr />

      <div>
        <h1>asdasdsa</h1>
        <h1>asdasdsa</h1>
        <h1>asdasdsa</h1>
        <h1>asdasdsa</h1>
        <h1>asdasdsa</h1>
        <h1>asdasdsa</h1>
      </div>

      {/* <div className="userInfo">
        {get(githubUserInfo, 'login', false) ? <UserInfo githubUserInfo={githubUserInfo} /> : <p />}
      </div> */}

      <hr />
      {/*
      <div className="userRepos">
        {githubUserRepos.map((githubUserRepo) => <UserRepos id={githubUserRepos.repoName} githubUserRepo={githubUserRepo} />)}
      </div>  */}

      <GlobalStyles />
      <ToastContainer autoClose={3000} />
    </Container>
  );
}

export default App;
