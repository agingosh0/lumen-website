# 🚀 Quick Domain Setup for GoDaddy

Fast guide to connect your GoDaddy domain to your deployed website.

---

## 🎯 Two Options

### Option A: Subdomain for Strapi (Recommended)
- **Website:** `https://yourdomain.com`
- **Strapi API:** `https://api.yourdomain.com`

### Option B: Keep Railway Domain (Simpler)
- **Website:** `https://yourdomain.com`
- **Strapi API:** `https://your-app.up.railway.app`

---

# Quick Setup: Option A (Subdomain)

## Step 1: Configure GoDaddy DNS (5 minutes)

1. **Login to GoDaddy**
   - Go to [godaddy.com](https://godaddy.com) → Sign In

2. **Access DNS Settings**
   - My Products → Your Domain → **"DNS"** or **"Manage DNS"**

3. **Add/Verify Records:**

   **A Record (for main domain):**
   ```
   Type: A
   Name: @
   Value: [GoDaddy hosting IP - usually auto-set]
   ```

   **CNAME (for www):**
   ```
   Type: CNAME
   Name: www
   Value: @
   ```

   **CNAME (for API subdomain):**
   ```
   Type: CNAME
   Name: api
   Value: your-app.up.railway.app
   ```
   ⚠️ Replace `your-app.up.railway.app` with your actual Railway URL!

4. **Save** all changes

## Step 2: Add Domain in Railway (5 minutes)

1. **Go to Railway Dashboard**
   - Open your Strapi service
   - Settings → **"Networking"**

2. **Add Custom Domain**
   - Click **"Custom Domain"** or **"Add Domain"**
   - Enter: `api.yourdomain.com`
   - Click **"Add"**

3. **Wait for Verification**
   - Railway will verify DNS (5-15 minutes)
   - SSL will auto-provision (5-10 minutes)

## Step 3: Update Environment Variables

### In Railway:
```
CORS_ORIGIN=https://yourdomain.com,https://www.yourdomain.com
```

### In Next.js (.env.production):
```env
NEXT_PUBLIC_STRAPI_API_URL=https://api.yourdomain.com
```

### Rebuild Next.js:
```bash
npm run build
# Upload new out/ folder to GoDaddy
```

---

# Quick Setup: Option B (Railway Domain)

## Step 1: Configure GoDaddy DNS (5 minutes)

1. **Login to GoDaddy** → DNS Settings

2. **Add/Verify:**
   ```
   A Record: @ → [GoDaddy IP]
   CNAME: www → @
   ```

3. **Save**

## Step 2: Update Environment Variables

### In Railway:
```
CORS_ORIGIN=https://yourdomain.com,https://www.yourdomain.com
```

### In Next.js (.env.production):
```env
NEXT_PUBLIC_STRAPI_API_URL=https://your-app.up.railway.app
```

### Rebuild Next.js:
```bash
npm run build
# Upload to GoDaddy
```

---

# Enable SSL on GoDaddy

1. **In cPanel:**
   - Go to **"SSL/TLS Status"**
   - Select your domain
   - Click **"Run AutoSSL"**

2. **Wait 5-10 minutes** for SSL to activate

---

# Test Your Setup

After DNS propagates (1-2 hours):

✅ `https://yourdomain.com` - Website loads
✅ `https://www.yourdomain.com` - Website loads  
✅ `https://api.yourdomain.com/admin` - Strapi admin (Option A)
✅ `https://api.yourdomain.com/api/articles` - API works

---

# DNS Propagation Check

Visit: [whatsmydns.net](https://whatsmydns.net)
- Enter your domain
- Check if DNS records are propagated globally
- Usually takes 1-2 hours, max 48 hours

---

# Troubleshooting

**"Domain not working"**
- Wait 1-2 hours for DNS propagation
- Check DNS records are correct
- Verify Railway domain is added correctly

**"SSL not working"**
- Wait 10-15 minutes after enabling
- Try accessing via HTTP first
- Clear browser cache

**"CORS errors"**
- Verify CORS_ORIGIN includes exact domain (with https://)
- Rebuild Next.js after updating environment variables

---

# Complete Checklist

- [ ] GoDaddy DNS configured
- [ ] Railway custom domain added (if Option A)
- [ ] SSL enabled on GoDaddy
- [ ] SSL active on Railway
- [ ] CORS_ORIGIN updated in Railway
- [ ] NEXT_PUBLIC_STRAPI_API_URL updated
- [ ] Next.js rebuilt and redeployed
- [ ] All URLs tested

---

**Your domain is now live! 🎉**

For detailed instructions, see `DOMAIN_SETUP_GUIDE.md`


