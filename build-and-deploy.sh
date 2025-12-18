#!/bin/bash

# Build and Deploy Script for GoDaddy
# This script builds your Next.js static site for deployment

echo "🚀 Starting build process..."

# Check if .env.production exists
if [ ! -f .env.production ]; then
    echo "⚠️  Warning: .env.production not found!"
    echo "Creating template... Please update with your values:"
    cat > .env.production << EOF
NEXT_PUBLIC_STRAPI_API_URL=https://your-strapi-backend-url.com
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
EOF
    echo "✅ Created .env.production - Please update it with your actual values!"
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build the site
echo "🔨 Building static site..."
npm run build

# Check if build was successful
if [ -d "out" ]; then
    echo "✅ Build successful! Static files are in the 'out' folder"
    echo ""
    echo "📤 Next steps:"
    echo "1. Upload all files from the 'out' folder to GoDaddy's public_html directory"
    echo "2. Make sure your Strapi backend is running and accessible"
    echo "3. Test your website at your domain"
    echo ""
    echo "💡 Tip: You can use FTP or cPanel File Manager to upload files"
else
    echo "❌ Build failed! Check the error messages above"
    exit 1
fi



