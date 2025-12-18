# 🚀 Strapi Quick Deployment Guide

## Fast Track to Deploy Strapi

### Step 1: Generate Environment Variables

```bash
cd my-strapi-project
node generate-env-keys.js
```

Copy the generated keys - you'll need them!

### Step 2: Deploy to Railway (Easiest)

1. **Go to [railway.app](https://railway.app)** and sign up with GitHub

2. **Create New Project** → **Add PostgreSQL Database**

3. **Add Strapi Service:**
   - Click "+ New" → "GitHub Repo"
   - Connect your repository
   - Select `my-strapi-project` folder

4. **Set Environment Variables:**
   ```
   APP_KEYS=<paste-generated-keys>
   API_TOKEN_SALT=<paste-generated>
   ADMIN_JWT_SECRET=<paste-generated>
   TRANSFER_TOKEN_SALT=<paste-generated>
   JWT_SECRET=<paste-generated>
   DATABASE_CLIENT=postgres
   DATABASE_URL=${{Postgres.DATABASE_URL}}
   HOST=0.0.0.0
   NODE_ENV=production
   ```

5. **Configure Build:**
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`

6. **Get Your URL:**
   - Railway will give you: `https://your-app.up.railway.app`
   - This is your Strapi API URL!

### Step 3: Access Admin Panel

Visit: `https://your-app.up.railway.app/admin`

Create your admin account and start managing content!

### Step 4: Update Next.js Frontend

In your Next.js project, update `.env.production`:

```env
NEXT_PUBLIC_STRAPI_API_URL=https://your-app.up.railway.app
```

Then rebuild:
```bash
npm run build
```

---

## ✅ Checklist

- [ ] Generated environment keys
- [ ] Deployed to Railway/Render
- [ ] PostgreSQL database connected
- [ ] Environment variables set
- [ ] Admin panel accessible
- [ ] API endpoints working
- [ ] Next.js frontend updated with Strapi URL

---

## 🆘 Common Issues

**"Database connection failed"**
- Check DATABASE_URL is correct
- Verify PostgreSQL service is running

**"CORS errors"**
- Update CORS_ORIGIN in environment variables
- Add your frontend domain

**"Admin panel not loading"**
- Verify all APP_KEYS are set
- Check ADMIN_JWT_SECRET is set

---

## 📚 Full Guide

See `STRAPI_DEPLOYMENT_GUIDE.md` for detailed instructions.


