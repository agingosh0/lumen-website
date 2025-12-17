# 🚀 Complete Deployment Guide: Next.js + Strapi to GoDaddy

This is your complete guide to deploy both your Next.js frontend and Strapi backend.

---

## 📋 Overview

You have two parts to deploy:

1. **Strapi Backend** → Railway/Render (Node.js hosting)
2. **Next.js Frontend** → GoDaddy (Static files)

---

## Part 1: Deploy Strapi Backend

### Quick Start (Railway - Recommended)

1. **Generate Environment Keys:**
   ```bash
   cd my-strapi-project
   node generate-env-keys.js
   ```
   Copy the generated keys!

2. **Deploy to Railway:**
   - Go to [railway.app](https://railway.app)
   - Sign up with GitHub
   - Create New Project
   - Add PostgreSQL Database
   - Add GitHub Repo (select `my-strapi-project` folder)
   - Set environment variables (see `STRAPI_DEPLOYMENT_GUIDE.md`)
   - Get your URL: `https://your-app.up.railway.app`

3. **Test:**
   - Visit: `https://your-app.up.railway.app/admin`
   - Create admin account
   - Test API: `https://your-app.up.railway.app/api/articles`

**Full Strapi Guide:** See `STRAPI_DEPLOYMENT_GUIDE.md`

---

## Part 2: Deploy Next.js Frontend to GoDaddy

### Step 1: Set Environment Variables

Create `.env.production` in your Next.js project root:

```env
NEXT_PUBLIC_STRAPI_API_URL=https://your-strapi-url.up.railway.app
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

**Important:** Replace `your-strapi-url.up.railway.app` with your actual Strapi URL from Part 1!

### Step 2: Build the Site

```bash
# Make sure Strapi is running and accessible
npm run build
```

This creates an `out/` folder with all static files.

### Step 3: Upload to GoDaddy

**Via cPanel:**
1. Login to GoDaddy cPanel
2. Open File Manager
3. Navigate to `public_html/`
4. Delete old files (backup first!)
5. Upload everything from `out/` folder

**Via FTP:**
1. Get FTP credentials from cPanel
2. Use FileZilla or similar
3. Upload `out/` contents to `public_html/`

### Step 4: Configure Domain & SSL

1. **DNS:** Should auto-point to GoDaddy (check if needed)
2. **SSL:** Enable Let's Encrypt in cPanel for HTTPS

### Step 5: Test

Visit your domain and test:
- ✅ Homepage loads
- ✅ All pages work
- ✅ Blog posts show (if any)
- ✅ Contact form works

---

## 🔄 Updating Content

### Adding New Blog Posts

1. **In Strapi:**
   - Login to admin panel
   - Create new blog post
   - Publish

2. **Rebuild Next.js:**
   ```bash
   npm run build
   ```

3. **Redeploy:**
   - Upload new `out/` folder to GoDaddy
   - Replace old files

**Note:** Blogs are static (generated at build time), so you must rebuild after adding content.

---

## ✅ Complete Checklist

### Strapi Backend
- [ ] Generated environment keys
- [ ] Deployed to Railway/Render
- [ ] PostgreSQL database connected
- [ ] Environment variables set
- [ ] Admin panel accessible at `/admin`
- [ ] API endpoints working
- [ ] CORS configured for your domain

### Next.js Frontend
- [ ] `.env.production` created with Strapi URL
- [ ] Site built successfully (`npm run build`)
- [ ] Tested locally (`npx serve out`)
- [ ] Files uploaded to GoDaddy `public_html/`
- [ ] SSL certificate installed
- [ ] Domain tested and working
- [ ] All pages load correctly
- [ ] Blog posts display (if any)

---

## 🆘 Troubleshooting

### Strapi Issues

**"Database connection failed"**
- Check `DATABASE_URL` is correct
- Verify PostgreSQL service is running

**"CORS errors"**
- Update `CORS_ORIGIN` in Strapi environment variables
- Add your GoDaddy domain to allowed origins

**"Admin panel not loading"**
- Verify all `APP_KEYS` are set
- Check `ADMIN_JWT_SECRET` is set

### Next.js Issues

**"Blogs not showing"**
- Verify `NEXT_PUBLIC_STRAPI_API_URL` is correct
- Check Strapi is accessible
- Rebuild after fixing environment variables

**"404 errors"**
- Make sure you uploaded entire `out/` folder
- Check file paths are correct

**"Images broken"**
- Verify all files from `out/` are uploaded
- Check image paths

---

## 📚 Documentation Files

- **`STRAPI_DEPLOYMENT_GUIDE.md`** - Detailed Strapi deployment
- **`STRAPI_QUICK_START.md`** - Quick Strapi deployment
- **`DEPLOYMENT_GUIDE.md`** - Detailed Next.js deployment
- **`QUICK_DEPLOY.md`** - Quick Next.js deployment
- **`DEPLOYMENT_SUMMARY.md`** - Overview

---

## 💡 Pro Tips

1. **Use Railway for Strapi** - Easiest and free tier available
2. **Test locally first** - Use `npx serve out` to test before uploading
3. **Backup before deploying** - Always backup your GoDaddy files
4. **Monitor Strapi** - Check Railway/Render dashboard for issues
5. **Environment variables** - Never commit secrets to Git

---

## 🎯 Estimated Time

- **Strapi Deployment:** 15-30 minutes
- **Next.js Deployment:** 15-20 minutes
- **Total:** 30-50 minutes

---

## 🆘 Need Help?

- **Strapi Docs:** https://docs.strapi.io
- **Next.js Docs:** https://nextjs.org/docs
- **Railway Docs:** https://docs.railway.app
- **GoDaddy Support:** support.godaddy.com

---

**Good luck with your deployment! 🚀**

