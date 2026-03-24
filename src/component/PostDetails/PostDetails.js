import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Comment = ({ comment }) => (
  <div className="group py-4 first:pt-0 last:pb-0">
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">
        {comment.email.charAt(0).toUpperCase()}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 truncate">
          {comment.name}
        </p>
        <p className="text-xs text-primary-500 dark:text-primary-400 mb-2">
          {comment.email}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          {comment.body}
        </p>
      </div>
    </div>
  </div>
);

Comment.propTypes = {
  comment: PropTypes.object,
};

const PostDetails = ({ title, body, comments, userName, userId, isLoading }) => {
  if (isLoading) {
    return <PostDetailsSkeleton />;
  }

  return (
    <div data-testid="postdetails" className="max-w-5xl mx-auto px-4 sm:px-6 py-6 animate-fade-in">
      {/* Breadcrumb */}
      <nav className="mb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-primary-500 transition-colors no-underline"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to posts
        </Link>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Post content */}
        <div className="lg:col-span-3">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
            <div className="bg-gradient-to-br from-primary-600 to-primary-800 p-6 sm:p-8">
              {userName && (
                <Link
                  to={`/user/${userId}`}
                  className="inline-flex items-center gap-2 text-primary-200 hover:text-white text-sm font-medium no-underline transition-colors mb-4"
                >
                  <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white text-xs font-bold">
                    {userName.charAt(0)}
                  </div>
                  {userName}
                </Link>
              )}
              <h1 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                {title}
              </h1>
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                {body}
              </p>
            </div>
          </div>
        </div>

        {/* Comments sidebar */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden sticky top-24">
            <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <h2 className="font-semibold text-gray-900 dark:text-white">
                  Comments
                </h2>
                <span className="ml-auto bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-bold px-2 py-0.5 rounded-full">
                  {(comments || []).length}
                </span>
              </div>
            </div>
            <div className="p-6 max-h-[calc(100vh-12rem)] overflow-y-auto divide-y divide-gray-100 dark:divide-gray-700">
              {(comments || []).length === 0 ? (
                <p className="text-gray-400 dark:text-gray-500 text-sm text-center py-8">
                  No comments yet
                </p>
              ) : (
                (comments || []).map((comment) => (
                  <Comment key={comment.id} comment={comment} />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PostDetailsSkeleton = () => (
  <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
    <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded mb-6" />
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
      <div className="lg:col-span-3 bg-white dark:bg-gray-800 rounded-2xl overflow-hidden animate-pulse">
        <div className="bg-gray-200 dark:bg-gray-700 h-48" />
        <div className="p-8 space-y-3">
          <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded" />
          <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded" />
          <div className="h-4 w-4/6 bg-gray-200 dark:bg-gray-700 rounded" />
        </div>
      </div>
      <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl p-6 animate-pulse">
        <div className="h-5 w-24 bg-gray-200 dark:bg-gray-700 rounded mb-6" />
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex gap-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700" />
            <div className="flex-1 space-y-2">
              <div className="h-3 w-20 bg-gray-200 dark:bg-gray-700 rounded" />
              <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

PostDetails.propTypes = {
  title: PropTypes.string,
  userName: PropTypes.string,
  userId: PropTypes.number,
  body: PropTypes.string,
  comments: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default PostDetails;
