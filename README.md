![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
[![Made With React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=github&logoColor=white)
![License](https://img.shields.io/:license-mit-blue.svg?style=for-the-badge)
[![Deploy to GitHub Pages](https://github.com/TupleType/greenholts.com/actions/workflows/deploy.yml/badge.svg)](https://github.com/TupleType/greenholts.com/actions/workflows/deploy.yml)

# My Website

A responsive portfolio website built with React, featuring my projects, blog posts, and professional information.

## Features

- 🎨 Modern UI/UX
- 📱 Fully responsive with mobile support
- ⚡ Optimized performance ([Core Web Vitals](https://web.dev/articles/vitals))
- 🔍 SEO optimized
- 👨‍💻 Personal portfolio showcase
- 📝 Blog page
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
