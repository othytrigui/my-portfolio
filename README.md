# Othman Trigui - Data & AI Engineer Portfolio

A modern, professional single-page portfolio website showcasing my experience, projects, skills, and certifications as a Data & AI Engineer.

## 🎨 Design

- **Theme:** Minimalist Technical Elegance with Swiss Modernism
- **Color Scheme:** Dark charcoal background (#0f0f0f) with electric cyan accents (#00d9ff)
- **Typography:** Playfair Display (headings) + Inter (body) + IBM Plex Mono (code)
- **Animations:** Smooth scroll effects and fade-in transitions
- **Responsive:** Fully optimized for mobile, tablet, and desktop

## ✨ Features

- ✅ Single-page layout with smooth navigation
- ✅ Downloadable CV button
- ✅ Complete experience timeline with project grouping
- ✅ Showcase of 4 major projects with technologies
- ✅ Organized technical skills (6 categories)
- ✅ Certifications with direct links
- ✅ Languages section
- ✅ Contact information with social links
- ✅ Mobile-responsive design
- ✅ Fast performance

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (or npm/yarn)

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open http://localhost:5173
```

### Build

```bash
# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 📁 Project Structure

```
client/
├── public/
│   └── othman_trigui_cv.pdf    # Downloadable CV
├── src/
│   ├── pages/
│   │   ├── Home.tsx            # Main portfolio page
│   │   └── NotFound.tsx        # 404 page
│   ├── components/
│   │   ├── ui/                 # shadcn/ui components
│   │   ├── ErrorBoundary.tsx
│   │   └── ...
│   ├── contexts/
│   │   └── ThemeContext.tsx    # Dark mode theme
│   ├── App.tsx                 # Router and layout
│   ├── main.tsx                # React entry point
│   └── index.css               # Global styles
└── index.html

server/
└── index.ts                    # Express server

shared/
└── const.ts                    # Shared constants
```

## 🛠 Tech Stack

- **Frontend:** React 19 + TypeScript
- **Styling:** Tailwind CSS 4
- **Build Tool:** Vite
- **Routing:** Wouter
- **UI Components:** shadcn/ui + Radix UI
- **Icons:** Lucide React
- **Server:** Express (for static serving)

## 📝 Content Sections

### Hero Section
- Introduction and professional summary
- Download CV button
- Contact information (email, phone, location)
- Links to LinkedIn and GitHub

### Experience
- Systems & Data Engineer at Netopia Solutions (Current)
- Data & DevOps Engineer Intern
- AI Engineer Intern
- Data Scientist Intern
- Web Development Intern
- Detailed project breakdowns (DPP, FSE projects)

### Projects
- Zero Chômage - Job Search Platform
- Attendance & Mask Detection App
- Obesity Level Prediction
- Online Sales Data Analysis

### Education
- Engineer's Degree in Data Engineering & AI
- Bachelor's Degree in Big Data Infrastructure
- DUT in Computer Engineering

### Skills
- Programming Languages
- Databases & Big Data
- Machine Learning & Data Science
- Web Development & Automation
- Cloud
- DevOps & CI/CD

### Certifications
- Microsoft Certified: Azure Data Scientist Associate
- Machine Learning Specialization - DeepLearning.AI
- Advanced Computer Vision - DeepLearning.AI
- Python for Data Science, AI & Development - IBM

### Languages
- English (Full professional proficiency)
- French (B2 TCF certified)
- Arabic (Native)

## 🌐 Deployment

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed instructions on deploying to:
- Vercel (recommended)
- GitHub Pages
- Netlify
- Other platforms

### Quick Deploy to Vercel

```bash
# 1. Push to GitHub
git push origin main

# 2. Go to https://vercel.com
# 3. Import your repository
# 4. Click Deploy

# Your site will be live at: https://othman-portfolio.vercel.app
```

## 🎯 Customization

### Change Colors
Edit `client/src/index.css` and modify the CSS variables in the `:root` and `.dark` sections:

```css
:root {
  --primary: #00d9ff;  /* Change accent color */
  --background: #f5f5f5;
  --foreground: #0f0f0f;
}
```

### Update Content
Edit `client/src/pages/Home.tsx` to update:
- Personal information
- Experience entries
- Projects
- Skills
- Certifications

### Change Fonts
Update the Google Fonts import in `client/index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap" rel="stylesheet" />
```

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 📄 License

MIT License - feel free to use this as a template for your own portfolio

## 👤 Author

**Othman Trigui**
- Email: othytrigui@gmail.com
- LinkedIn: linkedin.com/in/trigui
- GitHub: github.com/othytrigui
- Location: Berrechid, Morocco

## 🤝 Contributing

This is a personal portfolio, but feel free to fork and customize it for your own use!

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
