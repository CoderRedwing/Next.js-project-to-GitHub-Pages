## About This Repository

This repository contains a simple step-by-step guide for deploying a **Next.js project** to **GitHub Pages**. It is designed for developers looking to host static Next.js sites with minimal configuration.

By following this guide, you can deploy your Next.js app to GitHub Pages with ease. Feel free to contribute or open issues if you face any problems.

# Deploy Next.js on GitHub Pages 🚀

This guide provides step-by-step instructions to **deploy a Next.js project** to **GitHub Pages** seamlessly.

---

## 🚀 Prerequisites

Before proceeding, ensure you have:

- **Node.js (LTS version)**
- **GitHub repository** created and set to public
- **Basic knowledge of Git & GitHub**

---

## Step 1: Create a Next.js Project (Skip if Already Done)

If you haven't created a Next.js project yet, run:

```sh
npx create-next-app@latest my-next-app
cd my-next-app
```

If you already have a project, **skip this step**.

---

## Step 2: Check & Fix Linting Issues (Important)

Before deployment, ensure there are **no linting errors** by running:

```sh
npm run lint -- --fix
```

or

```sh
npx eslint . --fix
```

✅ **Make sure there are no errors before proceeding!**

---

## Step 3: Modify `next.config.js` and `package.json`

### Edit `next.config.js` (or `next.config.ts` for TypeScript)

Add the following configuration:

```js
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js Image Optimization
  },
  basePath: isProd ? "/<your-repo-name>" : "",
  assetPrefix: isProd ? "/<your-repo-name>/" : "",
};

module.exports = nextConfig;
```

**✅ Ensure that `basePath` and `assetPrefix` match your repository name.**

### Update `package.json` Scripts

Modify your `package.json` to include:

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "export": "next export",
  "deploy": "next build && next export && touch out/.nojekyll && gh-pages -d out"
}
```

---

## Step 4: Install Required Dependencies

Run the following command to install `gh-pages`:

```sh
npm install gh-pages
```

---

## Step 5: Update Image Paths

To ensure images load correctly, **update all image paths**:  
If your images are inside the `public/images/` folder, use:

```jsx
<img src="/<your-repo-name>/images/logo.png" alt="Logo" />
```

✅ **Sometimes the following works, but if images don’t load, use the first approach:**

```jsx
<img src="/images/logo.png" alt="Logo" />
```

---

## Step 6: Push Your Code to GitHub

Commit and push your changes to your GitHub repository:

```sh
git add .
git commit -m "Configured Next.js for GitHub Pages"
git push origin main
```

---

## Step 7: Open GitHub Repository

1. Go to **GitHub** and open your repository.
2. Click on **Settings** (for the repository, NOT your profile).

---

## Step 8: Configure GitHub Pages

1. **Scroll down** to the **Pages** section.
2. Under **Build and Deployment**, select **GitHub Actions**.
3. Click **Configure**.

---

## Step 9: Follow These Image Instructions

<a href="/deploye.pdf" target="_blank" rel="noopener noreferrer">View PDF</a>

## Step 10: Deploy Your Project

After GitHub Actions runs successfully, visit:  
**`https://<your-username>.github.io/<your-repo-name>/`**

---

## ✅ Additional Notes

- If images **don’t load**, ensure you’ve set `basePath` and `assetPrefix` correctly.
- If you get **404 errors**, recheck the GitHub Pages settings.
- To redeploy after updates, simply run:
  ```sh
  npm run deploy
  ```

---

## 📌 Alternative: Deploying on Vercel

For easier deployment, use **Vercel**:

1. Sign in to [Vercel](https://vercel.com/)
2. Connect your GitHub repo
3. Click **Deploy** (No extra configuration needed!)

---

This guide ensures a smooth **Next.js deployment on GitHub Pages** without errors. 🚀 If you found this helpful, **star this repo!** ⭐

---
