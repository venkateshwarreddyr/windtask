import React, { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { fetchPosts, fetchUsers } from "./../helpers/fetchDetails";

export const DataContext = createContext({
  loading: false,
  posts: [],
  users: [],
  error: null,
});

const DataContextProvider = (props) => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    Promise.all([fetchPosts(), fetchUsers()])
      .then(([postsData, usersData]) => {
        const postsDetails = postsData.map((post) => {
          const user = usersData.find((u) => u.id === post.userId);
          return { ...post, userName: user ? user.name : "Unknown" };
        });
        setPosts(postsDetails);
        setUsers(usersData);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <DataContext.Provider value={{ posts, users, loading, error }}>
      {props.children}
    </DataContext.Provider>
  );
};

DataContextProvider.propTypes = {
  children: PropTypes.node,
};

export default DataContextProvider;
