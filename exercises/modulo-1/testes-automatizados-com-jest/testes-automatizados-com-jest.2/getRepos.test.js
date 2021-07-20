const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

describe('Testing getRepos', () => {
  const url = 'https://api.github.com/orgs/tryber/repos';

  it('should contain the expected repositories', async () => {
    const repositories = await getRepos(url);

    const foundTodoList = repositories.some(
      (repoName) => repoName === 'sd-01-week4-5-project-todo-list',
    );

    const foundMemeGenerator = repositories.some(
      (repoName) => repoName === 'sd-01-week4-5-project-meme-generator',
    );

    expect(foundTodoList).toBeTruthy();
    expect(foundMemeGenerator).toBeTruthy();
  });
});
