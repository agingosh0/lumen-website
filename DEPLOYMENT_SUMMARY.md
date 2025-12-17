# 🚀 Quick Deployment Summary

## What You Need to Know

Your Next.js website is configured for **static export**, which means it can be hosted on GoDaddy's basic hosting. However, there are two parts:

1. **Frontend (Next.js)** → GoDaddy hosting ✅
2. **Backend (Strapi)** → Separate hosting needed ⚠️

---

## The Process (3 Steps)

### 1️⃣ Host Strapi Backend (Do This First!)

**Why:** Your website fetches blog data from Strapi during the build process.

**Where to host:**
- **Railway** (railway.app) - Easiest, free tier ⭐ Recommended
- **Render** (render.com) - Free tier
- **DigitalOcean** - $5/month

**Quick Steps:**
1. Generate environment keys: `cd my-strapi-project && node generate-env-keys.js`
2. Deploy to Railway (see `STRAPI_QUICK_START.md`)
3. Get your Strapi URL (e.g., `https://my-strapi.railway.app`)

**Full Guide:** See `STRAPI_DEPLOYMENT_GUIDE.md` for detailed instructions.

---

### 2️⃣ Build Your Website

**Create `.env.production` file:**
```env
NEXT_PUBLIC_STRAPI_API_URL=https://your-strapi-url.com
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_key
```

**Build command:**
```bash
npm run build
```

This creates an `out/` folder with all static files.

---

### 3️⃣ Upload to GoDaddy

**Via cPanel:**
1. Login to GoDaddy cPanel
2. Open File Manager
3. Go to `public_html/`
4. Delete old files
5. Upload everything from `out/` folder

**Via FTP:**
1. Get FTP credentials from cPanel
2. Use FileZilla
3. Upload `out/` contents to `public_html/`

---

## ⚠️ Important Notes

1. **Strapi must be running** when you build the site
2. **Blogs are static** - if you add new blogs, rebuild and redeploy
3. **SSL certificate** - Enable Let's Encrypt in cPanel for HTTPS
4. **Domain** - Should auto-point to GoDaddy, check DNS if needed

---

## 📚 Full Documentation

- **Detailed Guide:** See `DEPLOYMENT_GUIDE.md`
- **Quick Steps:** See `QUICK_DEPLOY.md`
- **Build Script:** Run `./build-and-deploy.sh`

---

## 🆘 Need Help?

**Common Issues:**
- Blogs not showing → Check Strapi URL, rebuild site
- 404 errors → Make sure you uploaded entire `out/` folder
- Images broken → Verify all files uploaded correctly

**Alternative:** Consider deploying to Vercel/Netlify (easier, still use GoDaddy domain)

---

## ✅ Checklist

- [ ] Strapi backend hosted and accessible
- [ ] `.env.production` file created with correct values
- [ ] Site built successfully (`npm run build`)
- [ ] Tested locally (`npx serve out`)
- [ ] Files uploaded to GoDaddy `public_html/`
- [ ] SSL certificate installed
- [ ] Website tested and working

---

**Estimated Time:** 30-60 minutes (depending on Strapi hosting setup)

