import axios from 'axios'

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
    baseURL:GITHUB_URL,
    // headers:{ Authorization: `token ${GITHUB_TOKEN}` },
})

export const searchUsers = async (text) => {
  // setLoading();
  const params = new URLSearchParams({
    q: text,
  });
  console.log('params =',params)
  const response = await github.get(`/search/users?${params}`)
  console.log(response)
  return response.data.items;
};

export const getUserAndRepos = async (login) => {
  // setLoading();
  const [user,repos] = await Promise.all([
      github.get(`/users/${login}`),
      github.get(`/users/${login}/repos`),
  ])
  return {user:user.data,repos:repos.data}
  
};

// for test purposes
export const fetchUsers = async () => {
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: { Authorization: `token ${GITHUB_TOKEN}` },
    });
    const data = await response.json();
    return data
  };

