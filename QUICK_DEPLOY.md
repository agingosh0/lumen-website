# Quick Deployment Steps

## 🚀 Fast Track to GoDaddy

### Step 1: Set Up Environment Variables

Create `.env.production` file:
```env
NEXT_PUBLIC_STRAPI_API_URL=https://your-strapi-url.com
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### Step 2: Build the Site

```bash
npm run build
```

This creates an `out/` folder with all static files.

### Step 3: Upload to GoDaddy

**Option A: Via cPanel File Manager**
1. Login to GoDaddy cPanel
2. Open File Manager
3. Go to `public_html/`
4. Delete old files
5. Upload everything from `out/` folder

**Option B: Via FTP**
1. Get FTP credentials from GoDaddy cPanel
2. Use FileZilla or similar
3. Connect to your server
4. Upload `out/` contents to `public_html/`

### Step 4: Configure Domain

Domain should auto-point to GoDaddy hosting. If not:
1. Go to DNS Management in GoDaddy
2. Set A record to GoDaddy's IP
3. Enable SSL in cPanel (Let's Encrypt)

---

## ⚠️ Important: Strapi Backend

Your Strapi backend needs separate hosting. Options:

1. **Railway** (railway.app) - Easiest, free tier
2. **Render** (render.com) - Free tier
3. **DigitalOcean** - $5/month

After hosting Strapi, update `NEXT_PUBLIC_STRAPI_API_URL` and rebuild.

---

## ✅ Checklist

- [ ] Strapi backend hosted and accessible
- [ ] Environment variables set in `.env.production`
- [ ] Site built successfully (`npm run build`)
- [ ] Files uploaded to GoDaddy `public_html/`
- [ ] SSL certificate installed
- [ ] Domain tested and working

---

## 🆘 Common Issues

**Blogs not showing?**
- Check Strapi URL is correct
- Rebuild after fixing environment variables

**404 errors?**
- Make sure you uploaded entire `out/` folder, not just `index.html`

**Images broken?**
- Verify all files from `out/` are uploaded
- Check file paths are correct


