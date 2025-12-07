# Deployment Guide - Othman Trigui Portfolio

## Quick Start: Deploy to Vercel

### Prerequisites
- GitHub account (https://github.com)
- Vercel account (https://vercel.com)

### Step-by-Step Instructions

#### 1. Create a GitHub Repository

1. Go to https://github.com/new
2. Fill in the details:
   - **Repository name:** `othman-portfolio`
   - **Description:** Personal portfolio website
   - **Visibility:** Public
3. Click "Create repository"

#### 2. Push Your Code to GitHub

After creating the repository, GitHub will show you commands to push code. Run these in your terminal:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: portfolio website"

# Add remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/othman-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

#### 3. Deploy to Vercel

1. Go to https://vercel.com/signup
2. Click "Continue with GitHub"
3. Authorize Vercel to access your GitHub account
4. Click "Import Project"
5. Search for and select `othman-portfolio` repository
6. Click "Import"
7. Vercel will auto-detect the project settings (no changes needed)
8. Click "Deploy"

**That's it!** Your site will be live at `https://othman-portfolio.vercel.app`

### Custom Domain (Optional)

To use a custom domain like `othman.dev`:

1. Buy a domain from:
   - Google Domains (domains.google.com)
   - Namecheap (namecheap.com)
   - GoDaddy (godaddy.com)

2. In Vercel Dashboard:
   - Go to your project settings
   - Click "Domains"
   - Add your custom domain
   - Follow Vercel's DNS setup instructions

### Local Development

To test locally before deploying:

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open http://localhost:5173 in your browser
```

### Build for Production

```bash
# Build the project
pnpm build

# Preview production build locally
pnpm preview
```

## Project Structure

```
othman-portfolio/
├── client/
│   ├── public/
│   │   └── othman_trigui_cv.pdf    # CV file for download
│   ├── src/
│   │   ├── pages/
│   │   │   └── Home.tsx            # Main portfolio page
│   │   ├── components/             # Reusable UI components
│   │   ├── App.tsx                 # App router and layout
│   │   ├── main.tsx                # React entry point
│   │   └── index.css               # Global styles and design tokens
│   └── index.html
├── server/
│   └── index.ts                    # Express server (for static serving)
├── package.json
├── vite.config.ts
├── tsconfig.json
└── components.json
```

## Technologies Used

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Vite** - Build tool
- **Wouter** - Client-side routing
- **Lucide React** - Icons
- **shadcn/ui** - UI components

## Features

✅ Dark theme with electric cyan accents
✅ Smooth scroll navigation
✅ Downloadable CV button
✅ Responsive design (mobile, tablet, desktop)
✅ Fast performance (optimized for Vercel)
✅ SEO-friendly

## Troubleshooting

### Build fails on Vercel
- Ensure `pnpm-lock.yaml` is committed to GitHub
- Check that all dependencies in `package.json` are correct

### Styles not loading
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Vercel will auto-rebuild on push

### CV download not working
- Ensure `client/public/othman_trigui_cv.pdf` exists
- Check file path in Home.tsx: `/othman_trigui_cv.pdf`

## Support

For issues with Vercel deployment, visit: https://vercel.com/docs

For React/Vite questions, check:
- React Docs: https://react.dev
- Vite Docs: https://vitejs.dev
- Tailwind Docs: https://tailwindcss.com

---

**Happy deploying! 🚀**
