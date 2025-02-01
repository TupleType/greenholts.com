![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
[![Made With React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Deploy to GitHub Pages](https://github.com/TupleType/greenholts.com/actions/workflows/deploy.yml/badge.svg)](https://github.com/TupleType/greenholts.com/actions/workflows/deploy.yml)
![License](https://img.shields.io/:license-mit-blue.svg?style=for-the-badge)
[![Build Status](https://github.com/TupleType/greenholts.com/workflows/Build/badge.svg)](https://github.com/yourusername/your-repo-name/actions)

# My Website

A responsive portfolio website built with React, featuring my projects, blog posts, and professional information.

## Features

- 🎨 Modern UI/UX
- 📱 Fully responsive with mobile support
- 👨‍💻 Personal portfolio showcase
- 📝 Blog section
- 🔍 SEO optimized
- 🔀 Custom 404 page

## Development

### Prerequisites

- Node.js
- npm

### Installation

```bash
# Clone repository
git clone https://github.com/yourusername/your-repo-name.git

# Install dependencies
npm install

# Start development server
npm start
```

### Update Open Source Projects section

The `git_data_fetcher.mjs` file is used to fetch the Open Source Projects data to `projects.json`.

Generate an access token with `read:user` permissions and add it to a `.env` file along with your username:

```
GITHUB_TOKEN = your_token;
GITHUB_USERNAME = your_username;
```

Then run

```bash
node git_data_fetcher.mjs
```

### Update 404 page

- If any new routes were added add them to CLIENT_SIDE_PATHS in `404-page/src/error404/Error.js`
- If any hcange was made to index.html, component, assets, etc. that is relevant to the 404 page, copy them to their corresponding folder in `404-page`.

1. To update the 404 page update the `Error.js` component.
2. cd to `404-page`.
3. run `npm run build`.
4. In the project root folder delete `public/static` and `404.html`.
5. Rename `404-page/build/index.html` to `404.html`.
6. Copy `404-page/build/404.html` and `404-page/build/static` to `public/`.
