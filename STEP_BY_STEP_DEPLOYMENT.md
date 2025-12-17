# 📋 Step-by-Step Deployment Guide

Complete guide to deploy both Strapi backend and Next.js frontend.

---

## 🎯 Overview

**What we're deploying:**
1. **Strapi Backend** → Railway (free hosting)
2. **Next.js Frontend** → GoDaddy (your existing hosting)

**Total Time:** 45-60 minutes

---

# PART 1: Deploy Strapi Backend to Railway

## Step 1: Prepare Strapi Project

### 1.1 Generate Environment Variables

Open terminal in your project root and run:

```bash
cd my-strapi-project
node generate-env-keys.js
```

**You'll see output like:**
```
APP_KEYS=abc123,def456,ghi789,jkl012
API_TOKEN_SALT=xyz789
ADMIN_JWT_SECRET=secret123
TRANSFER_TOKEN_SALT=transfer456
JWT_SECRET=jwt789
```

**📝 Copy all these values - you'll need them in Step 3!**

### 1.2 Verify CORS Configuration

The CORS configuration is already updated in `config/middlewares.ts` - no action needed.

---

## Step 2: Create Railway Account and Project

### 2.1 Sign Up

1. Go to **[railway.app](https://railway.app)**
2. Click **"Start a New Project"**
3. Sign up with **GitHub** (recommended) or email
4. Authorize Railway to access your GitHub

### 2.2 Create New Project

1. Click **"New Project"** button
2. Select **"Deploy from GitHub repo"**
3. If prompted, connect your GitHub account
4. Select your repository
5. Railway will create a new project

---

## Step 3: Add PostgreSQL Database

### 3.1 Create Database

1. In your Railway project dashboard, click **"+ New"** button
2. Select **"Database"**
3. Choose **"Add PostgreSQL"**
4. Railway will automatically create a PostgreSQL database
5. Wait for it to finish provisioning (takes ~30 seconds)

### 3.2 Note Database Connection

- Railway automatically provides `DATABASE_URL`
- You don't need to copy it manually - we'll reference it in environment variables

---

## Step 4: Deploy Strapi Application

### 4.1 Add Strapi Service

1. In Railway project, click **"+ New"** button again
2. Select **"GitHub Repo"**
3. Select your repository
4. Railway will detect it's a Node.js project

### 4.2 Configure Service Settings

1. Click on the newly created service
2. Go to **"Settings"** tab
3. Find **"Root Directory"** section
4. Set it to: `my-strapi-project`
5. Click **"Save"**

### 4.3 Configure Build Settings

Still in Settings tab:

1. Find **"Build Command"** section
2. Set it to: `npm install && npm run build`
3. Find **"Start Command"** section  
4. Set it to: `npm start`
5. Click **"Save"**

---

## Step 5: Set Environment Variables

### 5.1 Add Variables

1. In your Strapi service, go to **"Variables"** tab
2. Click **"+ New Variable"** for each variable below

### 5.2 Add These Variables

Add each variable one by one (click "Add" after each):

```
Variable Name: APP_KEYS
Value: [paste the 4 keys from Step 1.1, comma-separated]
Example: abc123,def456,ghi789,jkl012
```

```
Variable Name: API_TOKEN_SALT
Value: [paste from Step 1.1]
```

```
Variable Name: ADMIN_JWT_SECRET
Value: [paste from Step 1.1]
```

```
Variable Name: TRANSFER_TOKEN_SALT
Value: [paste from Step 1.1]
```

```
Variable Name: JWT_SECRET
Value: [paste from Step 1.1]
```

```
Variable Name: DATABASE_CLIENT
Value: postgres
```

```
Variable Name: DATABASE_URL
Value: ${{Postgres.DATABASE_URL}}
```
**Note:** `${{Postgres.DATABASE_URL}}` automatically references your PostgreSQL service

```
Variable Name: HOST
Value: 0.0.0.0
```

```
Variable Name: NODE_ENV
Value: production
```

```
Variable Name: CORS_ORIGIN
Value: *
```
**Note:** Change to your domain later: `https://yourdomain.com,https://www.yourdomain.com`

### 5.3 Verify All Variables

You should have 10 environment variables total. Double-check all are added.

---

## Step 6: Deploy and Get URL

### 6.1 Trigger Deployment

1. Railway will automatically start deploying
2. Go to **"Deployments"** tab to watch progress
3. Wait for build to complete (2-5 minutes)
4. Status should show "Active" when done

### 6.2 Generate Public URL

1. Go to **"Settings"** tab
2. Scroll to **"Networking"** section
3. Click **"Generate Domain"**
4. Railway will create a URL like: `your-app-name.up.railway.app`
5. **📝 Copy this URL - this is your Strapi API URL!**

Example: `https://lumen-strapi.up.railway.app`

---

## Step 7: Test Strapi Deployment

### 7.1 Test Admin Panel

1. Open browser
2. Go to: `https://your-strapi-url.up.railway.app/admin`
3. You should see Strapi admin login/register page
4. Create your admin account:
   - Enter your email
   - Create password
   - Fill in other details
   - Click "Let's start"

### 7.2 Test API Endpoint

1. Open new browser tab
2. Go to: `https://your-strapi-url.up.railway.app/api/articles`
3. You should see JSON data (may be empty array `[]` if no articles)

### 7.3 Verify in Admin Panel

1. Go back to admin panel
2. Navigate to **"Content Manager"**
3. Check that you can see your content types (Articles, Categories, etc.)

**✅ Strapi is now deployed and working!**

---

# PART 2: Deploy Next.js Frontend to GoDaddy

## Step 8: Prepare Next.js Project

### 8.1 Create Environment File

1. In your project root (not in `my-strapi-project`), create file: `.env.production`
2. Add these variables:

```env
NEXT_PUBLIC_STRAPI_API_URL=https://your-strapi-url.up.railway.app
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

**Important:** 
- Replace `https://your-strapi-url.up.railway.app` with your actual Strapi URL from Step 6.2
- Replace EmailJS values with your actual EmailJS credentials (if you have them)

### 8.2 Verify Strapi is Accessible

Before building, make sure your Strapi is running:
- Test: `https://your-strapi-url.up.railway.app/api/articles`
- Should return JSON (even if empty)

---

## Step 9: Build Next.js Site

### 9.1 Install Dependencies (if needed)

```bash
# Make sure you're in project root (not my-strapi-project)
npm install
```

### 9.2 Build the Site

```bash
npm run build
```

**What happens:**
- Next.js fetches blog data from Strapi
- Generates static HTML pages
- Creates optimized CSS and JavaScript
- Output goes to `out/` folder

**Expected output:**
```
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages
✓ Finalizing page optimization

Route (app)                              Size
┌ ○ /                                    XX kB
├ ○ /about                               XX kB
├ ○ /blogs                               XX kB
├ ○ /contact                             XX kB
└ ○ /services                            XX kB
```

### 9.3 Verify Build Output

```bash
ls -la out/
```

You should see:
- `index.html`
- `about.html`
- `blogs.html`
- `contact.html`
- `services.html`
- `_next/` folder (with CSS and JS)
- All your images and assets

**✅ Build successful!**

---

## Step 10: Test Build Locally (Optional but Recommended)

### 10.1 Install Serve (if needed)

```bash
npm install -g serve
```

### 10.2 Test the Build

```bash
serve out
```

### 10.3 Test in Browser

1. Open browser
2. Go to: `http://localhost:3000` (or the port shown)
3. Test all pages:
   - Homepage
   - About
   - Services
   - Blogs
   - Contact
4. Check that blog posts load (if any)

**If everything works, proceed to upload!**

---

## Step 11: Access GoDaddy cPanel

### 11.1 Login to GoDaddy

1. Go to **[godaddy.com](https://godaddy.com)**
2. Click **"Sign In"**
3. Enter your credentials

### 11.2 Access Web Hosting

1. Go to **"My Products"**
2. Find **"Web Hosting"** section
3. Click **"Manage"** button
4. Click **"cPanel Admin"** or **"Launch"**

### 11.3 Open File Manager

1. In cPanel, find **"Files"** section
2. Click **"File Manager"**
3. Navigate to `public_html` folder
   - This is your website root directory
   - Files here are accessible at your domain

---

## Step 12: Backup Old Files (Important!)

### 12.1 Backup Existing Files

1. In File Manager, select all files in `public_html/`
2. Right-click → **"Compress"**
3. Choose **"Zip Archive"**
4. Name it: `backup-old-site-YYYY-MM-DD.zip`
5. Click **"Compress Files"**
6. Download the backup to your computer (optional but recommended)

### 12.2 Delete Old Files

1. Select all files in `public_html/`
2. Click **"Delete"** button
3. Confirm deletion
4. **⚠️ Make sure you have a backup!**

---

## Step 13: Upload New Files

### 13.1 Prepare Files

On your computer, make sure you have the `out/` folder ready with all files.

### 13.2 Upload via File Manager

**Option A: Upload Individual Files (Small sites)**
1. In File Manager, make sure you're in `public_html/`
2. Click **"Upload"** button
3. Select all files from `out/` folder
4. Wait for upload to complete

**Option B: Upload via ZIP (Recommended for large sites)**
1. On your computer, compress `out/` folder to ZIP
2. In File Manager, click **"Upload"**
3. Upload the ZIP file
4. Right-click ZIP file → **"Extract"**
5. Delete the ZIP file after extraction

### 13.3 Verify File Structure

Your `public_html/` should contain:
- `index.html`
- `about.html`
- `blogs.html`
- `contact.html`
- `services.html`
- `_next/` folder
- All image files
- Other assets

**✅ Files uploaded!**

---

## Step 14: Configure Domain and SSL

### 14.1 Verify Domain Points to GoDaddy

1. In cPanel, find **"Domains"** section
2. Click **"DNS"** or **"Zone Editor"**
3. Verify your domain's A record points to GoDaddy's IP
4. Usually auto-configured, but check if needed

### 14.2 Enable SSL Certificate

1. In cPanel, find **"Security"** section
2. Click **"SSL/TLS Status"** or **"Let's Encrypt"**
3. Select your domain
4. Click **"Run AutoSSL"** or **"Install"**
5. Wait for SSL to be installed (2-5 minutes)
6. Your site will now use HTTPS

---

## Step 15: Test Your Website

### 15.1 Test Homepage

1. Open browser
2. Go to: `https://yourdomain.com`
3. Verify homepage loads correctly

### 15.2 Test All Pages

Visit and test:
- ✅ `https://yourdomain.com/about`
- ✅ `https://yourdomain.com/services`
- ✅ `https://yourdomain.com/blogs`
- ✅ `https://yourdomain.com/contact`

### 15.3 Test Functionality

- ✅ Images load correctly
- ✅ Navigation works
- ✅ Blog posts display (if any)
- ✅ Contact form works (if configured)
- ✅ All links work

### 15.4 Test on Mobile

- Open on phone
- Verify responsive design works
- Test navigation

**✅ Website is live!**

---

## Step 16: Update CORS in Strapi (Important!)

### 16.1 Update CORS for Production

1. Go back to Railway dashboard
2. Open your Strapi service
3. Go to **"Variables"** tab
4. Find `CORS_ORIGIN` variable
5. Click to edit
6. Change value from `*` to:
   ```
   https://yourdomain.com,https://www.yourdomain.com
   ```
7. Replace `yourdomain.com` with your actual domain
8. Click **"Save"**
9. Railway will automatically redeploy

### 16.2 Verify CORS Update

Wait for redeployment to complete, then test your website again.

---

# ✅ Deployment Complete!

## Final Checklist

### Strapi Backend
- [ ] Deployed to Railway
- [ ] PostgreSQL database connected
- [ ] Environment variables set
- [ ] Admin panel accessible
- [ ] API endpoints working
- [ ] CORS configured for your domain

### Next.js Frontend
- [ ] Environment variables set
- [ ] Site built successfully
- [ ] Files uploaded to GoDaddy
- [ ] SSL certificate installed
- [ ] All pages working
- [ ] Blog posts displaying
- [ ] Contact form working

---

## 🔄 Adding New Content

### When you add new blog posts:

1. **In Strapi Admin:**
   - Login to `https://your-strapi-url.up.railway.app/admin`
   - Create new blog post
   - Publish

2. **Rebuild Next.js:**
   ```bash
   npm run build
   ```

3. **Redeploy to GoDaddy:**
   - Upload new `out/` folder
   - Replace old files in `public_html/`

**Note:** Blogs are static (generated at build time), so you must rebuild after adding content.

---

## 🆘 Troubleshooting

### Strapi Issues

**"Admin panel not loading"**
- Check all environment variables are set
- Verify `APP_KEYS` has 4 comma-separated values
- Check Railway deployment logs

**"Database connection failed"**
- Verify `DATABASE_URL` is set to `${{Postgres.DATABASE_URL}}`
- Check PostgreSQL service is running in Railway

**"CORS errors"**
- Update `CORS_ORIGIN` in Railway variables
- Add your exact domain (with https://)

### Next.js Issues

**"Blogs not showing"**
- Verify `NEXT_PUBLIC_STRAPI_API_URL` is correct
- Check Strapi is accessible
- Rebuild after fixing

**"404 errors on pages"**
- Make sure you uploaded entire `out/` folder
- Check file structure in `public_html/`

**"Images broken"**
- Verify all files from `out/` are uploaded
- Check image paths are correct

---

## 📞 Need Help?

- **Railway Support:** [docs.railway.app](https://docs.railway.app)
- **GoDaddy Support:** [support.godaddy.com](https://support.godaddy.com)
- **Strapi Docs:** [docs.strapi.io](https://docs.strapi.io)
- **Next.js Docs:** [nextjs.org/docs](https://nextjs.org/docs)

---

**Congratulations! Your website is now live! 🎉**

