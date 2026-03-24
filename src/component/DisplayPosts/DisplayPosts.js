import React from "react";
import PropTypes from "prop-types";
import Post from "../Post";

const DisplayPosts = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-16">
        <svg className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <p className="text-gray-400 dark:text-gray-500 text-lg">No posts found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {posts.map((post, i) => (
        <div
          key={post.id}
          className="animate-slide-up"
          style={{ animationDelay: `${i * 50}ms`, animationFillMode: "both" }}
        >
          <Post {...post} />
        </div>
      ))}
    </div>
  );
};

DisplayPosts.propTypes = {
  posts: PropTypes.array,
};

export default DisplayPosts;
