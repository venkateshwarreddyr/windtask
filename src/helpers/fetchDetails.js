import * as config from "../config.json";

const { BASE_URL } = config;

const fetchJSON = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }
  return response.json();
};

export const fetchPosts = () => fetchJSON(`${BASE_URL}posts`);
export const fetchUsers = () => fetchJSON(`${BASE_URL}users`);
export const fetchPost = (id) => fetchJSON(`${BASE_URL}posts/${id}`);
export const fetchComments = (id) => fetchJSON(`${BASE_URL}posts/${id}/comments`);
export const fetchUser = (id) => fetchJSON(`${BASE_URL}users/${id}`);
