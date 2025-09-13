# BrandForge

AI-Powered Brand & Product Design Studio - A comprehensive platform for creating professional product visuals, brand materials, and social media content.

## Features

- **Product Craft**: AI-powered product photo enhancement and background removal
- **Brand Tools**: Consistent branding across all marketing materials
- **Social Media**: Platform-optimized content generation
- **AI Enhancement**: Intelligent lighting, color matching, and quality improvements

## Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/meertechnology01/brandforge.git
cd brandforge

# Install dependencies
npm install

# Copy environment configuration
cp .env.example .env.local

# Start development server
npm run dev
```

The application will be available at `http://localhost:3000`

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint issues |
| `npm run type-check` | Check TypeScript types |

## Environment Configuration

Copy `.env.example` to `.env.local` and configure:

```env
VITE_APP_ENV=development
VITE_API_BASE_URL=http://localhost:3001
VITE_ENABLE_AI_FEATURES=true
VITE_ENABLE_ANALYTICS=false
```

## Production Deployment

### Build

```bash
npm run build
```

The build artifacts will be in the `dist/` directory.

### Deployment Options

#### Static Hosting (Netlify, Vercel, GitHub Pages)

1. Connect your repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Configure environment variables

#### Docker

```dockerfile
FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

#### CDN Configuration

Recommended headers for static assets:
- `Cache-Control: public, max-age=31536000` for JS/CSS files
- `Cache-Control: public, max-age=86400` for images

## Technology Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Backend**: Supabase (optional)
- **Styling**: Tailwind CSS with custom components

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance

- Code splitting with dynamic imports
- Tree shaking for optimized bundles
- Image optimization and lazy loading
- Service worker for caching (production)

## Security

- Content Security Policy headers
- Environment variable validation
- XSS protection
- HTTPS only in production

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For issues and feature requests, please use the GitHub issues page.
