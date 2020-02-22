import axios from 'axios';

module.exports = {
  async show(req, res) {
    try {
      const username = req.params.id;

      const githubResponse = await axios.get(`https://api.github.com/users/${username}`);

      const {
        login, name, avatar_url, html_url, location, bio,
      } = githubResponse.data;

      const avatarUrl = avatar_url;
      const userUrl = html_url;


      const githubRepoResponse = await axios.get(`https://api.github.com/users/${username}/repos`);

      const repositories = githubRepoResponse.data;

      if (repositories.length === 0) return res.status(404).json({ error: 'None repository avaiable' });

      const repositoriesData = repositories.map((repo) => {
        const { repoName = repo.name, repoUrl = repo.html_url, description } = repo;
        return { repoName, repoUrl, description };
      });

      res.json({
        login,
        name,
        userUrl,
        avatarUrl,
        location,
        bio,
        repositoriesData,
      });
    } catch (e) {
      res.status(404).json({ error: 'User not found' });
    }
  },
};
