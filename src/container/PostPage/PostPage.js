import React, { useEffect, useState, useContext } from "react";
import { fetchComments } from "./../../helpers/fetchDetails";
import PostDetails from "../../component/PostDetails";
import { DataContext } from "./../../context/dataContext";
import { useParams } from "react-router-dom";

const PostPage = () => {
  const postId = Number(useParams().postId);
  const [post, setPost] = useState({});
  const context = useContext(DataContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchComments(postId)
      .then((comments) => {
        const postDetails = context.posts.find((p) => p.id === postId);
        if (postDetails) {
          setPost({ ...postDetails, comments });
        }
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [context.posts, postId]);

  if (error) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20 text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center">
          <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <p className="text-gray-500 dark:text-gray-400">Failed to load post: {error}</p>
      </div>
    );
  }

  return (
    <PostDetails {...post} isLoading={context.loading || loading} />
  );
};

export default PostPage;
