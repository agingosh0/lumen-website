# Deployment Guide for GoDaddy Hosting

This guide will help you deploy your Next.js static site to GoDaddy and set up your Strapi backend.

## Important Notes

⚠️ **GoDaddy Limitations:**
- GoDaddy's basic hosting only supports static files (HTML, CSS, JS)
- Your Next.js app is already configured for static export, which is perfect for GoDaddy
- **Strapi backend CANNOT be hosted on GoDaddy's basic hosting** - you'll need separate hosting for Strapi

## Prerequisites

1. ✅ Domain purchased on GoDaddy
2. ✅ GoDaddy hosting account (cPanel access)
3. ✅ Strapi backend needs separate hosting (see options below)

---

## Step 1: Host Your Strapi Backend

Since GoDaddy doesn't support Node.js applications, you need to host Strapi separately:

### Option A: Free/Cheap Hosting Options
- **Railway** (railway.app) - Free tier available
- **Render** (render.com) - Free tier available
- **Fly.io** (fly.io) - Free tier available
- **DigitalOcean App Platform** - $5/month
- **Heroku** - Paid plans only

### Option B: VPS Hosting
- **DigitalOcean Droplet** - $6/month
- **Linode** - $5/month
- **Vultr** - $6/month

**Recommended:** Railway or Render for simplicity

---

## Step 2: Build Your Next.js Static Site

⚠️ **IMPORTANT:** Your Strapi backend MUST be running and accessible during the build process. The build will fetch blog data from Strapi to generate static pages.

### 2.1 Set Environment Variables

Create a `.env.production` file in your project root:

```env
NEXT_PUBLIC_STRAPI_API_URL=https://your-strapi-backend-url.com
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

Replace `your-strapi-backend-url.com` with your actual Strapi hosting URL.

**Note:** Make sure your Strapi backend is:
- ✅ Deployed and running
- ✅ Accessible via the URL you set
- ✅ CORS configured to allow requests (if needed during build)

### 2.2 Build the Static Site

Run these commands in your terminal:

```bash
# Install dependencies (if not already done)
npm install
# or
yarn install

# Build the static site
npm run build
# or
yarn build

# OR use the provided script:
./build-and-deploy.sh
```

This will create an `out/` folder with all your static HTML, CSS, and JS files.

**What happens during build:**
- Next.js fetches blog data from Strapi
- Generates static HTML pages for all routes
- Creates optimized CSS and JavaScript bundles
- All pages are pre-rendered as static files

---

## Step 3: Upload to GoDaddy

### 3.1 Access GoDaddy cPanel

1. Log in to your GoDaddy account
2. Go to "My Products" → "Web Hosting" → "Manage"
3. Click "cPanel Admin"

### 3.2 Upload Files via File Manager

1. In cPanel, open **File Manager**
2. Navigate to `public_html` folder (this is your website root)
3. **Delete or backup** any existing files (your old HTML site)
4. Upload all files from the `out/` folder to `public_html/`

**OR use FTP:**

1. In cPanel, find **FTP Accounts** or **FTP File Manager**
2. Use an FTP client (FileZilla, Cyberduck, etc.)
3. Connect using your FTP credentials
4. Upload all files from `out/` to `public_html/`

### 3.3 File Structure on GoDaddy

Your `public_html/` should look like this:
```
public_html/
├── index.html
├── about.html
├── services.html
├── blogs.html
├── contact.html
├── _next/
│   ├── static/
│   └── ...
├── [all your images and assets]
└── ...
```

---

## Step 4: Configure Your Domain

### 4.1 Point Domain to GoDaddy Hosting

1. In GoDaddy, go to **DNS Management**
2. Ensure your domain's **A Record** points to GoDaddy's IP (usually auto-configured)
3. Ensure **CNAME** for `www` points to your domain

### 4.2 SSL Certificate (HTTPS)

1. In cPanel, look for **SSL/TLS Status** or **Let's Encrypt**
2. Install a free SSL certificate for your domain
3. This enables HTTPS (required for modern websites)

---

## Step 5: Test Your Deployment

1. Visit your domain: `https://yourdomain.com`
2. Check all pages load correctly
3. Test the contact form
4. Verify blog posts load (if using Strapi)

---

## Troubleshooting

### Issue: Images not loading
- Check that all images in `/public` folder are uploaded
- Verify image paths are correct (should be relative paths)

### Issue: Blog posts not showing
- Verify `NEXT_PUBLIC_STRAPI_API_URL` is set correctly
- Check that Strapi backend is accessible and CORS is configured
- **Important:** Blogs are fetched at BUILD TIME, not runtime
- If you add new blogs to Strapi, you must rebuild and redeploy
- Rebuild the site after fixing environment variables

### Issue: Contact form not working
- Verify EmailJS environment variables are set
- Check browser console for errors

### Issue: 404 errors on routes
- Ensure you uploaded the entire `out/` folder, not just `index.html`
- Check that `_next/` folder is uploaded

---

## Alternative: Deploy to Vercel/Netlify (Recommended)

If you want better Next.js support and easier deployment:

### Vercel (Recommended for Next.js)
1. Push your code to GitHub
2. Go to vercel.com
3. Import your repository
4. Add environment variables
5. Deploy (takes 2 minutes)
6. Point your GoDaddy domain to Vercel

### Netlify
1. Push your code to GitHub
2. Go to netlify.com
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `out`
6. Add environment variables
7. Deploy
8. Point your GoDaddy domain to Netlify

**Benefits:**
- Automatic deployments on git push
- Better Next.js support
- Free SSL certificates
- CDN included
- Still use your GoDaddy domain

---

## Quick Reference Commands

```bash
# Build for production
npm run build

# Preview the built site locally (test before uploading)
npx serve out

# Check build output
ls -la out/

# Use the build script (checks for .env.production)
./build-and-deploy.sh
```

## Understanding Static Site Generation

Your Next.js app uses **Static Site Generation (SSG)**:
- ✅ All pages are pre-rendered as HTML during build
- ✅ Blog posts are fetched from Strapi at BUILD TIME
- ✅ After deployment, the site is 100% static (no server needed)
- ⚠️ To add new blog posts, you must rebuild and redeploy

**Why this works with GoDaddy:**
- GoDaddy only serves static files (HTML, CSS, JS)
- Your site is already converted to static files
- No Node.js server required on GoDaddy

---

## Need Help?

- GoDaddy Support: support.godaddy.com
- Next.js Docs: nextjs.org/docs
- Strapi Docs: docs.strapi.io

