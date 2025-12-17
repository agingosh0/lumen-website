# ✅ Deployment Checklist

Print this or keep it open while deploying!

---

## PART 1: Strapi Backend Deployment

### Preparation
- [ ] Run `cd my-strapi-project && node generate-env-keys.js`
- [ ] Copy all generated keys (APP_KEYS, API_TOKEN_SALT, etc.)

### Railway Setup
- [ ] Create Railway account at railway.app
- [ ] Create new project
- [ ] Add PostgreSQL database
- [ ] Add Strapi service from GitHub repo
- [ ] Set root directory to `my-strapi-project`

### Configuration
- [ ] Set build command: `npm install && npm run build`
- [ ] Set start command: `npm start`
- [ ] Add APP_KEYS environment variable
- [ ] Add API_TOKEN_SALT environment variable
- [ ] Add ADMIN_JWT_SECRET environment variable
- [ ] Add TRANSFER_TOKEN_SALT environment variable
- [ ] Add JWT_SECRET environment variable
- [ ] Add DATABASE_CLIENT = `postgres`
- [ ] Add DATABASE_URL = `${{Postgres.DATABASE_URL}}`
- [ ] Add HOST = `0.0.0.0`
- [ ] Add NODE_ENV = `production`
- [ ] Add CORS_ORIGIN = `*` (update later with your domain)

### Deployment
- [ ] Wait for deployment to complete
- [ ] Generate public domain in Railway
- [ ] Copy Strapi URL (e.g., `https://xxx.up.railway.app`)

### Testing
- [ ] Visit `/admin` - see login page
- [ ] Create admin account
- [ ] Test API: `/api/articles` returns JSON
- [ ] Login to admin panel successfully

---

## PART 2: Next.js Frontend Deployment

### Preparation
- [ ] Create `.env.production` file in project root
- [ ] Add `NEXT_PUBLIC_STRAPI_API_URL` with your Strapi URL
- [ ] Add EmailJS variables (if using contact form)

### Build
- [ ] Run `npm install` (if needed)
- [ ] Run `npm run build`
- [ ] Verify `out/` folder created
- [ ] Test locally: `npx serve out` (optional)

### GoDaddy Upload
- [ ] Login to GoDaddy cPanel
- [ ] Open File Manager
- [ ] Navigate to `public_html/`
- [ ] Backup old files (compress to ZIP)
- [ ] Delete old files
- [ ] Upload all files from `out/` folder
- [ ] Verify file structure is correct

### Domain & SSL
- [ ] Verify domain DNS points to GoDaddy
- [ ] Enable SSL certificate in cPanel
- [ ] Wait for SSL to activate

### Testing
- [ ] Test homepage: `https://yourdomain.com`
- [ ] Test `/about` page
- [ ] Test `/services` page
- [ ] Test `/blogs` page
- [ ] Test `/contact` page
- [ ] Verify images load
- [ ] Verify blog posts display
- [ ] Test contact form (if configured)
- [ ] Test on mobile device

### Final Configuration
- [ ] Update CORS_ORIGIN in Railway with your domain
- [ ] Wait for Railway redeployment
- [ ] Test website again after CORS update

---

## 🎉 Deployment Complete!

### Your URLs:
- **Strapi Admin:** `https://xxx.up.railway.app/admin`
- **Strapi API:** `https://xxx.up.railway.app/api`
- **Website:** `https://yourdomain.com`

---

## 📝 Important Notes

- **Strapi URL:** Keep this safe - you'll need it for rebuilding Next.js
- **Environment Variables:** Never commit `.env.production` to Git
- **Blog Updates:** Must rebuild Next.js after adding new blogs
- **Backups:** Always backup before deleting/uploading files

---

## 🔄 Future Updates

When adding new blog posts:
1. [ ] Add content in Strapi admin
2. [ ] Run `npm run build` in Next.js project
3. [ ] Upload new `out/` folder to GoDaddy

---

**Time Estimate:** 45-60 minutes total

