import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const InfoRow = ({ icon, label, value }) => (
  <div className="flex items-start gap-3 py-3">
    <div className="w-9 h-9 rounded-xl bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center flex-shrink-0">
      {icon}
    </div>
    <div>
      <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wider font-medium">{label}</p>
      <p className="text-gray-900 dark:text-white font-medium mt-0.5">{value || "N/A"}</p>
    </div>
  </div>
);

InfoRow.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.string,
  value: PropTypes.string,
};

const User = ({ username, name, email, website, company, phone, address, isLoading }) => {
  if (isLoading) {
    return <UserSkeleton />;
  }

  return (
    <div data-testid="user" className="max-w-4xl mx-auto px-4 sm:px-6 py-6 animate-fade-in">
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

      {/* Profile card */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        {/* Banner */}
        <div className="h-32 sm:h-40 bg-gradient-to-br from-primary-500 via-primary-600 to-purple-700 relative">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 400 200">
              <defs>
                <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <circle cx="15" cy="15" r="1" fill="white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>

        {/* Avatar + name */}
        <div className="relative px-6 sm:px-8 pb-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 -mt-12 sm:-mt-10">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary-400 to-primary-700 flex items-center justify-center text-white text-3xl font-bold shadow-xl border-4 border-white dark:border-gray-800">
              {(name || "?").charAt(0)}
            </div>
            <div className="text-center sm:text-left pb-2">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{name}</h1>
              <p className="text-primary-500 dark:text-primary-400 font-medium">@{username}</p>
            </div>
          </div>
        </div>

        {/* Info grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-gray-100 dark:border-gray-700">
          {/* Personal info */}
          <div className="p-6 sm:p-8 border-b md:border-b-0 md:border-r border-gray-100 dark:border-gray-700">
            <h2 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
              Personal Info
            </h2>
            <div className="divide-y divide-gray-50 dark:divide-gray-700/50">
              <InfoRow
                icon={<svg className="w-4 h-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                label="Email"
                value={email}
              />
              <InfoRow
                icon={<svg className="w-4 h-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
                label="Phone"
                value={phone}
              />
              <InfoRow
                icon={<svg className="w-4 h-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>}
                label="Website"
                value={website}
              />
              {address && (
                <InfoRow
                  icon={<svg className="w-4 h-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                  label="Location"
                  value={`${address.city}, ${address.street}`}
                />
              )}
            </div>
          </div>

          {/* Company info */}
          <div className="p-6 sm:p-8">
            <h2 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
              Company
            </h2>
            {company ? (
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700/50 dark:to-gray-700/30 rounded-xl p-5">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{company.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 italic">"{company.catchPhrase}"</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-sm font-medium rounded-full">
                    {company.bs}
                  </span>
                </div>
              </div>
            ) : (
              <p className="text-gray-400 dark:text-gray-500">No company info</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const UserSkeleton = () => (
  <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
    <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded mb-6" />
    <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden animate-pulse">
      <div className="h-40 bg-gray-200 dark:bg-gray-700" />
      <div className="px-8 pb-6">
        <div className="flex items-end gap-4 -mt-10">
          <div className="w-24 h-24 rounded-2xl bg-gray-300 dark:bg-gray-600 border-4 border-white dark:border-gray-800" />
          <div className="space-y-2 pb-2">
            <div className="h-6 w-40 bg-gray-200 dark:bg-gray-700 rounded" />
            <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded" />
          </div>
        </div>
      </div>
      <div className="border-t border-gray-100 dark:border-gray-700 p-8 space-y-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex gap-3">
            <div className="w-9 h-9 rounded-xl bg-gray-200 dark:bg-gray-700" />
            <div className="space-y-2 flex-1">
              <div className="h-3 w-16 bg-gray-200 dark:bg-gray-700 rounded" />
              <div className="h-4 w-40 bg-gray-200 dark:bg-gray-700 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

User.propTypes = {
  username: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
  website: PropTypes.string,
  phone: PropTypes.string,
  company: PropTypes.object,
  address: PropTypes.object,
  isLoading: PropTypes.bool,
};

export default User;
