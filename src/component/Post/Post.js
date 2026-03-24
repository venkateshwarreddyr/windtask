import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const COLORS = [
  "from-violet-500 to-purple-600",
  "from-blue-500 to-cyan-500",
  "from-emerald-500 to-teal-500",
  "from-orange-500 to-amber-500",
  "from-rose-500 to-pink-500",
  "from-indigo-500 to-blue-500",
  "from-fuchsia-500 to-purple-500",
  "from-cyan-500 to-blue-500",
  "from-teal-500 to-emerald-500",
  "from-amber-500 to-yellow-500",
];

const Post = ({ userId, userName, id, title }) => {
  const colorClass = COLORS[(userId || 0) % COLORS.length];

  return (
    <div
      data-testid="post"
      className="group bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300 overflow-hidden hover:-translate-y-1"
    >
      <Link className="block no-underline p-5" to={`/post/${id}`}>
        <div className="flex items-start gap-4">
          {/* Avatar */}
          <Link
            to={`/user/${userId}`}
            onClick={(e) => e.stopPropagation()}
            className="flex-shrink-0"
          >
            <div
              className={`w-11 h-11 rounded-full bg-gradient-to-br ${colorClass} flex items-center justify-center text-white text-sm font-bold shadow-lg group-hover:scale-110 transition-transform duration-300`}
            >
              {(userName || "?").charAt(0)}
            </div>
          </Link>

          <div className="min-w-0 flex-1">
            {/* Author */}
            <Link
              to={`/user/${userId}`}
              onClick={(e) => e.stopPropagation()}
              className="no-underline"
            >
              <span className="text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
                {userName}
              </span>
            </Link>

            {/* Title */}
            <h3 className="mt-1 text-gray-900 dark:text-white font-medium leading-snug line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {title}
            </h3>

            {/* Read more indicator */}
            <span className="inline-flex items-center gap-1 mt-3 text-xs font-medium text-gray-400 group-hover:text-primary-500 transition-colors">
              Read more
              <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

Post.propTypes = {
  userId: PropTypes.number,
  id: PropTypes.number,
  title: PropTypes.string,
  userName: PropTypes.string,
};

export default Post;
