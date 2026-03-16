# windtask

React app for browsing posts, users, and comments. Built with React 17, React Router 6, and Tailwind CSS.

## Tech Stack

- **React 17** + React Router 6
- **Tailwind CSS** — utility-first styling
- **Create React App** — build tooling

## Quick Start

```bash
npm install
npm start
# http://localhost:3000
```

## Routes

| Path | Page |
|------|------|
| `/` | Home — list of posts |
| `/post/:postId` | Post detail with comments |
| `/user/:userId` | User profile |

## Project Structure

```
src/
├── App.js               # Router setup
├── container/           # Page-level containers (HomePage, PostPage, UserPage)
├── component/           # Reusable components (Post, PostDetails, DisplayPosts)
├── HOC/                 # Higher-order components
├── context/             # React context providers
└── helpers/             # Utility functions
```

## Build

```bash
npm run build
```
