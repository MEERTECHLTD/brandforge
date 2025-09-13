#!/bin/bash

# BrandForge Production Deployment Script
# This script handles the complete deployment process for production

set -e  # Exit on any error

echo "🚀 Starting BrandForge production deployment..."

# Check if required tools are available
command -v node >/dev/null 2>&1 || { echo "❌ Node.js is required but not installed. Aborting." >&2; exit 1; }
command -v npm >/dev/null 2>&1 || { echo "❌ npm is required but not installed. Aborting." >&2; exit 1; }

# Environment check
if [ ! -f ".env.local" ]; then
    echo "❌ .env.local file not found. Please copy .env.example to .env.local and configure it."
    exit 1
fi

echo "✅ Environment checks passed"

# Install dependencies
echo "📦 Installing dependencies..."
npm ci --only=production

# Type checking
echo "🔍 Running type checks..."
npm run type-check

# Linting
echo "🔍 Running linting..."
npm run lint

# Build for production
echo "🏗️  Building for production..."
npm run build

# Check if dist directory was created
if [ ! -d "dist" ]; then
    echo "❌ Build failed - dist directory not found"
    exit 1
fi

echo "✅ Build completed successfully"

# Optional: Run tests if they exist
if [ -f "package.json" ] && grep -q '"test"' package.json; then
    echo "🧪 Running tests..."
    npm test
fi

# Display build info
echo "📊 Build information:"
echo "   - Total files: $(find dist -type f | wc -l)"
echo "   - Total size: $(du -sh dist | cut -f1)"
echo "   - Main assets:"
ls -lh dist/assets/ 2>/dev/null || echo "   - No assets directory found"

# Deployment options
echo ""
echo "🎉 BrandForge is ready for production deployment!"
echo ""
echo "Deployment options:"
echo "1. Static hosting (Netlify, Vercel, GitHub Pages):"
echo "   - Upload the 'dist' folder contents"
echo "   - Set up environment variables in your hosting platform"
echo ""
echo "2. Docker deployment:"
echo "   docker build -t brandforge ."
echo "   docker run -p 3000:80 brandforge"
echo ""
echo "3. Docker Compose:"
echo "   docker-compose up -d"
echo ""
echo "4. Manual server deployment:"
echo "   - Copy 'dist' folder to your web server"
echo "   - Configure your web server to serve SPA routes"
echo "   - Set up SSL/HTTPS certificates"
echo ""

# Optional: Preview the build
read -p "🔍 Would you like to preview the production build locally? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🌐 Starting preview server..."
    npm run preview
fi

echo "✨ Deployment preparation complete!"