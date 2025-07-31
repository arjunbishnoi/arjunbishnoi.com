# Arjun Bishnoi - Personal Portfolio Website

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This repository contains the source code for my personal portfolio website, showcasing my skills, projects, and experience as a Developer & Designer. The site is built with modern web technologies, focusing on performance, responsiveness, and a clean user interface.

**Live Demo:** [arjunbishnoi.com](https://arjunbishnoi.com)

## ✨ Key Features

*   **Responsive Design:** Adapts seamlessly to various screen sizes (desktop, tablet, mobile).
*   **Nuxt 3 Framework:** Built with the latest version of Nuxt.js for server-side rendering (SSR), static site generation (SSG), and optimized performance.
*   **Tailwind CSS:** Utility-first CSS framework for rapid UI development.
*   **TypeScript:** Strong typing for enhanced code quality and maintainability.
*   **Interactive UI:** Smooth animations and transitions using GSAP and VueUse.
*   **Dark/Light Mode:** Theme toggling for user preference.
*   **Project Showcase:** Dedicated section to display featured projects with details and links.
*   **Skills Overview:** Lists technical skills across frontend, backend, and design tools.
*   **About Section:** Information about my background and journey.
*   **Contact Form:** Allows visitors to get in touch easily (frontend only, requires backend integration for submission).
*   **Resume Download:** Quick access to download my latest resume.
*   **SEO Optimized:** Configured with meta tags and prerendering for better search engine visibility.
*   **Code Quality:** Enforced using ESLint and Prettier.

## 🛠️ Technologies Used

*   **Framework:** [Nuxt.js](https://nuxt.com/) (v3)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components:** [Headless UI](https://headlessui.com/)
*   **Icons:** [Heroicons](https://heroicons.com/)
*   **Composition Utilities:** [VueUse](https://vueuse.org/)
*   **Animation:** [GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/)
*   **Linting:** [ESLint](https://eslint.org/)
*   **Formatting:** [Prettier](https://prettier.io/)
*   **Package Manager:** [npm](https://www.npmjs.com/)

## 🚀 Getting Started

Follow these instructions to set up the project locally for development or testing.

### Prerequisites

*   [Node.js](https://nodejs.org/) (Version >= 18.0.0 recommended, as specified in `package.json`)
*   [npm](https://www.npmjs.com/) (usually comes with Node.js)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/arjunbishnoi.com.git
    cd arjunbishnoi.com
    ```
    *(Replace `your-username` with your actual GitHub username)*

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Development Server

To run the website locally with hot-reloading for development:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the port specified in the console) in your browser.

## 🏗️ Building for Production

### Static Generation (SSG)

To build the application for static hosting (generates pre-rendered HTML files):

```bash
npm run generate
```

The output will be in the `.output/public` directory. You can deploy this folder to any static hosting service (like GitHub Pages, Netlify, Vercel).

### Server-Side Rendering (SSR)

To build the application with a Node.js server for SSR:

```bash
npm run build
```

The output will be in the `.output` directory. To start the production server:

```bash
npm run start
```
or
```bash
node .output/server/index.mjs
```

## 🚢 Deployment

This project includes configuration files that suggest potential deployment setups:

*   `deploy.sh`: A shell script likely used for automating deployment steps.
*   `nginx.conf`: Configuration for using Nginx as a reverse proxy or web server.
*   `arjunbishnoi.service`: A systemd service file, possibly for running the Node.js server on a Linux machine.
*   `setup-aws.sh`: A script suggesting deployment to AWS infrastructure.

Refer to these files or your hosting provider's documentation for specific deployment instructions.

## 🧹 Code Quality

*   **Linting:** Check for code errors and style issues.
    ```bash
    npm run lint
    ```
*   **Linting & Fixing:** Automatically fix linting issues.
    ```bash
    npm run lint:fix
    ```
*   **Type Checking:** Verify TypeScript types.
    ```bash
    npm run typecheck
    ```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details (or choose another license if preferred).

---

Made with ❤️ by Arjun Bishnoi
