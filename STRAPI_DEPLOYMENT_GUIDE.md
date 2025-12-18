# Strapi Deployment Guide

This guide will help you deploy your Strapi backend to a hosting service. Since GoDaddy doesn't support Node.js, you'll need to use a platform that supports Node.js applications.

## 🎯 Recommended Hosting Options

### Option 1: Railway (Recommended - Easiest)
- ✅ Free tier available (with limits)
- ✅ Automatic deployments from GitHub
- ✅ Built-in PostgreSQL database
- ✅ SSL included
- ✅ Very easy setup

### Option 2: Render
- ✅ Free tier available
- ✅ PostgreSQL support
- ✅ SSL included
- ✅ Good documentation

### Option 3: DigitalOcean App Platform
- 💰 $5/month minimum
- ✅ Reliable and fast
- ✅ PostgreSQL support
- ✅ Good for production

---

## 📋 Prerequisites

1. GitHub account (for easy deployment)
2. Strapi project ready to deploy
3. Admin account created in Strapi (for accessing admin panel)

---

## 🚀 Deployment: Railway (Recommended)

### Step 1: Prepare Your Strapi Project

#### 1.1 Create `.env.production` file

Create a `.env.production` file in `my-strapi-project/` folder:

```env
# App Keys (generate random strings)
APP_KEYS=your-app-key-1,your-app-key-2,your-app-key-3,your-app-key-4
API_TOKEN_SALT=your-api-token-salt
ADMIN_JWT_SECRET=your-admin-jwt-secret
TRANSFER_TOKEN_SALT=your-transfer-token-salt
JWT_SECRET=your-jwt-secret

# Database (will be set by Railway)
DATABASE_CLIENT=postgres
DATABASE_URL=${DATABASE_URL}

# Server
HOST=0.0.0.0
PORT=${PORT}

# Admin Panel
ADMIN_URL=${ADMIN_URL}

# CORS (important for your Next.js frontend)
CORS_ORIGIN=*
# Or specific: CORS_ORIGIN=https://yourdomain.com,https://www.yourdomain.com
```

**Generate secure keys:**
```bash
# Run this in terminal to generate random keys:
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```
Run this 4 times for APP_KEYS, and once each for the other secrets.

#### 1.2 Update Database Configuration

Your `config/database.ts` already supports PostgreSQL, so it's ready!

#### 1.3 Update CORS Settings

Edit `config/middlewares.ts` to allow your frontend domain:

```typescript
export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com',
            'market-assets.strapi.io',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com',
            'market-assets.strapi.io',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: ['*'], // Change to your domain in production: ['https://yourdomain.com']
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
```

### Step 2: Deploy to Railway

#### 2.1 Create Railway Account

1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Click "New Project"

#### 2.2 Add PostgreSQL Database

1. In your Railway project, click "+ New"
2. Select "Database" → "Add PostgreSQL"
3. Railway will create a PostgreSQL database
4. Note the connection details (you'll need `DATABASE_URL`)

#### 2.3 Deploy Strapi

1. In Railway project, click "+ New"
2. Select "GitHub Repo"
3. Connect your repository
4. Select the `my-strapi-project` folder (or deploy from root and set root directory)

#### 2.4 Configure Environment Variables

In Railway, go to your Strapi service → Variables tab, add:

```env
APP_KEYS=your-app-key-1,your-app-key-2,your-app-key-3,your-app-key-4
API_TOKEN_SALT=your-api-token-salt
ADMIN_JWT_SECRET=your-admin-jwt-secret
TRANSFER_TOKEN_SALT=your-transfer-token-salt
JWT_SECRET=your-jwt-secret
DATABASE_CLIENT=postgres
DATABASE_URL=${{Postgres.DATABASE_URL}}
HOST=0.0.0.0
NODE_ENV=production
```

**Note:** `${{Postgres.DATABASE_URL}}` references the PostgreSQL service automatically.

#### 2.5 Configure Build Settings

In Railway, go to Settings → Deploy:

- **Build Command:** `npm install && npm run build`
- **Start Command:** `npm start`
- **Root Directory:** `my-strapi-project` (if deploying from repo root)

#### 2.6 Generate Domain

1. In Railway, go to your Strapi service
2. Click "Settings" → "Generate Domain"
3. Railway will give you a URL like: `your-app.up.railway.app`
4. Copy this URL - this is your Strapi API URL!

### Step 3: Access Admin Panel

1. Visit: `https://your-app.up.railway.app/admin`
2. Create your admin account (first time only)
3. Login and start managing content!

### Step 4: Update Your Next.js Frontend

Update your `.env.production` in the Next.js project:

```env
NEXT_PUBLIC_STRAPI_API_URL=https://your-app.up.railway.app
```

---

## 🚀 Deployment: Render (Alternative)

### Step 1: Prepare Project (Same as Railway)

Follow Step 1 from Railway guide above.

### Step 2: Deploy to Render

1. Go to [render.com](https://render.com)
2. Sign up with GitHub
3. Click "New +" → "Web Service"
4. Connect your GitHub repository
5. Configure:
   - **Name:** `strapi-backend`
   - **Root Directory:** `my-strapi-project`
   - **Environment:** `Node`
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm start`

### Step 3: Add PostgreSQL Database

1. In Render dashboard, click "New +" → "PostgreSQL"
2. Create database
3. Note the connection string

### Step 4: Set Environment Variables

In Render, go to your service → Environment:

```env
APP_KEYS=your-app-key-1,your-app-key-2,your-app-key-3,your-app-key-4
API_TOKEN_SALT=your-api-token-salt
ADMIN_JWT_SECRET=your-admin-jwt-secret
TRANSFER_TOKEN_SALT=your-transfer-token-salt
JWT_SECRET=your-jwt-secret
DATABASE_CLIENT=postgres
DATABASE_URL=<your-postgres-connection-string>
HOST=0.0.0.0
NODE_ENV=production
```

### Step 5: Get Your URL

Render will give you a URL like: `https://your-app.onrender.com`

---

## 🔧 Important Configuration

### CORS Configuration

For production, update CORS to only allow your domain:

```typescript
// config/middlewares.ts
{
  name: 'strapi::cors',
  config: {
    enabled: true,
    origin: [
      'https://yourdomain.com',
      'https://www.yourdomain.com',
      'http://localhost:3000' // For local development
    ],
  },
}
```

### Media Files

Strapi stores uploads locally by default. For production, consider:

1. **Cloud Storage:** Use AWS S3, Cloudinary, or similar
2. **Keep Local:** Files are stored in `public/uploads/` (works but not ideal for scaling)

---

## 📝 Environment Variables Reference

### Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `APP_KEYS` | 4 random keys (comma-separated) | `key1,key2,key3,key4` |
| `API_TOKEN_SALT` | Random string for API tokens | `random-string-here` |
| `ADMIN_JWT_SECRET` | Secret for admin JWT | `random-string-here` |
| `TRANSFER_TOKEN_SALT` | Secret for transfer tokens | `random-string-here` |
| `JWT_SECRET` | Secret for JWT tokens | `random-string-here` |
| `DATABASE_CLIENT` | Database type | `postgres` |
| `DATABASE_URL` | Database connection string | `postgresql://...` |
| `HOST` | Server host | `0.0.0.0` |
| `PORT` | Server port | `1337` (or auto) |
| `NODE_ENV` | Environment | `production` |

### Optional Variables

| Variable | Description |
|----------|-------------|
| `ADMIN_URL` | Admin panel URL |
| `CORS_ORIGIN` | CORS allowed origins |

---

## ✅ Post-Deployment Checklist

- [ ] Strapi is accessible at your URL
- [ ] Admin panel loads at `/admin`
- [ ] Can login to admin panel
- [ ] Database connection working
- [ ] API endpoints accessible (test: `https://your-url.com/api/articles`)
- [ ] CORS configured for your frontend domain
- [ ] Environment variables set correctly
- [ ] Next.js frontend updated with Strapi URL

---

## 🧪 Testing Your Deployment

### Test API Endpoint

```bash
curl https://your-strapi-url.com/api/articles
```

Should return JSON data.

### Test Admin Panel

Visit: `https://your-strapi-url.com/admin`

Should show login page.

---

## 🆘 Troubleshooting

### Issue: "Database connection failed"
- Check `DATABASE_URL` is correct
- Verify PostgreSQL service is running
- Check database credentials

### Issue: "Admin panel not loading"
- Verify all APP_KEYS are set
- Check `ADMIN_JWT_SECRET` is set
- Verify environment variables

### Issue: "CORS errors in frontend"
- Update CORS configuration in `config/middlewares.ts`
- Add your frontend domain to allowed origins
- Rebuild and redeploy

### Issue: "Media files not loading"
- Check file permissions
- Verify uploads folder exists
- Consider using cloud storage for production

---

## 🔄 Updating Content

After deployment:

1. Login to admin panel: `https://your-url.com/admin`
2. Create/edit content
3. **Important:** Your Next.js site fetches data at BUILD TIME
4. After adding new blogs, rebuild your Next.js site:
   ```bash
   npm run build
   ```
5. Redeploy the updated `out/` folder to GoDaddy

---

## 📚 Additional Resources

- [Strapi Deployment Docs](https://docs.strapi.io/dev-docs/deployment)
- [Railway Docs](https://docs.railway.app)
- [Render Docs](https://render.com/docs)

---

## 💡 Pro Tips

1. **Use Environment Variables:** Never commit secrets to Git
2. **Database Backups:** Set up automatic backups for PostgreSQL
3. **Monitoring:** Use Railway/Render's built-in monitoring
4. **Custom Domain:** You can add a custom domain to Railway/Render
5. **Staging Environment:** Create a separate deployment for testing

---

**Estimated Deployment Time:** 15-30 minutes


