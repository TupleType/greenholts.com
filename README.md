[![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000?logo=shadcnui&logoColor=fff&style=for-the-badge)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-grey?style=for-the-badge&logo=tailwind-css&logoColor=38B2AC)
![License](https://img.shields.io/:license-mit-blue.svg?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)
[![CI](https://github.com/tupletype/greenholts.com/actions/workflows/ci.yml/badge.svg)](https://github.com/tupletype/greenholts.com/actions/workflows/ci.yml)

![Preview](public/images/projects/greenholts.png)

# Greenholts.com

A responsive personal website built with [MagicUI](https://magicui.design/) templates, featuring my portfolio and blog posts.

## Features

- 🎨 Modern UI/UX
- 📱 Fully responsive with mobile support
- ⚡ Optimized performance ([Core Web Vitals](https://web.dev/articles/vitals))
- 🔍 SEO optimized
- 👨‍💻 Personal portfolio showcase
- 📝 Blog page
- 🔀 Custom 404 page
- ⚙️ Configure by editing [settings files](./src/data)

## Development

### Prerequisites

- Node.js
- pnpm

### Installation

```bash
# Clone repository
git clone https://github.com/yourusername/your-repo-name.git

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Update Open Source Projects section

The `update-github-stats` script is used to fetch the Open Source Projects data to `github-stats.json`.

To update your GitHub stats, you can optionally provide a GitHub token as an environment variable:

```bash
export GITHUB_TOKEN=your_token
```

Note: The GitHub token is optional. Without it, you'll be subject to lower API rate limits.

Then run:

```bash
pnpm run update-github-stats
```
