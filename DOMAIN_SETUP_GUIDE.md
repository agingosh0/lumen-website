# 🌐 Domain Setup Guide: GoDaddy Domain Configuration

Complete guide to configure your GoDaddy domain for both Strapi backend and Next.js frontend.

---

## 📋 Overview

You have **one domain** from GoDaddy that needs to serve:
1. **Frontend (Next.js)** → Main domain: `yourdomain.com`
2. **Strapi Backend** → Subdomain: `api.yourdomain.com` or `cms.yourdomain.com`

**OR** you can use:
- **Frontend:** `yourdomain.com` (on GoDaddy hosting)
- **Strapi:** Keep Railway's free domain (e.g., `your-app.up.railway.app`)

---

# Option 1: Use Subdomain for Strapi (Recommended)

This is the cleanest approach - your main domain serves the website, and a subdomain serves the API.

## Setup: Frontend on Main Domain

### Step 1: Point Domain to GoDaddy Hosting

1. **Login to GoDaddy**
   - Go to [godaddy.com](https://godaddy.com)
   - Sign in to your account

2. **Access DNS Management**
   - Go to **"My Products"**
   - Find your domain
   - Click **"DNS"** or **"Manage DNS"**

3. **Configure A Record**
   - Find the **A Record** for `@` (root domain)
   - It should point to GoDaddy's hosting IP
   - If not set, add:
     ```
     Type: A
     Name: @
     Value: [GoDaddy's hosting IP - usually auto-configured]
     TTL: 600 (or default)
     ```

4. **Configure CNAME for www**
   - Find or add **CNAME Record**:
     ```
     Type: CNAME
     Name: www
     Value: @ (or yourdomain.com)
     TTL: 600
     ```

5. **Save Changes**
   - DNS changes can take 24-48 hours, but usually propagate in 1-2 hours

### Step 2: Upload Next.js to GoDaddy

Follow the deployment guide to upload your `out/` folder to `public_html/` on GoDaddy.

### Step 3: Enable SSL on GoDaddy

1. In cPanel, go to **"SSL/TLS Status"**
2. Select your domain
3. Click **"Run AutoSSL"** or **"Install Let's Encrypt"**
4. Wait for SSL to activate (5-10 minutes)

**Your frontend will be live at:** `https://yourdomain.com`

---

## Setup: Strapi on Subdomain

### Step 1: Add Subdomain in GoDaddy DNS

1. **Go to DNS Management**
   - Same place as before (GoDaddy DNS settings)

2. **Add CNAME Record for API Subdomain**
   - Click **"Add"** to create new record
   - Configure:
     ```
     Type: CNAME
     Name: api (or cms, admin, backend - your choice)
     Value: your-app.up.railway.app
     TTL: 600
     ```
   - **Important:** Replace `your-app.up.railway.app` with your actual Railway URL

3. **Save Changes**

**Example:**
- If your domain is `lumenadvisory.com`
- And Railway URL is `lumen-strapi.up.railway.app`
- Add CNAME: `api` → `lumen-strapi.up.railway.app`
- Result: `https://api.lumenadvisory.com` will point to your Strapi

### Step 2: Configure Custom Domain in Railway

1. **Go to Railway Dashboard**
   - Open your Strapi service
   - Go to **"Settings"** tab
   - Scroll to **"Networking"** section

2. **Add Custom Domain**
   - Click **"Custom Domain"** or **"Add Domain"**
   - Enter: `api.yourdomain.com` (or your chosen subdomain)
   - Click **"Add"**

3. **Verify Domain**
   - Railway will show DNS records to verify
   - Since you already added CNAME in GoDaddy, Railway will detect it
   - Wait for verification (5-15 minutes)

4. **SSL Certificate**
   - Railway automatically provisions SSL certificate
   - Wait for it to activate (5-10 minutes)

**Your Strapi will be accessible at:** `https://api.yourdomain.com`

### Step 3: Update Environment Variables

1. **In Railway:**
   - Go to Strapi service → **"Variables"**
   - Update `CORS_ORIGIN` to:
     ```
     https://yourdomain.com,https://www.yourdomain.com
     ```

2. **In Next.js:**
   - Update `.env.production`:
     ```env
     NEXT_PUBLIC_STRAPI_API_URL=https://api.yourdomain.com
     ```
   - Rebuild: `npm run build`
   - Re-upload to GoDaddy

---

# Option 2: Keep Railway Domain (Simpler)

If you don't want to set up a subdomain, you can keep Railway's free domain.

## Setup

1. **Use Railway's domain for Strapi:**
   - Keep: `https://your-app.up.railway.app`

2. **Update CORS in Railway:**
   - Set `CORS_ORIGIN` to: `https://yourdomain.com,https://www.yourdomain.com`

3. **Update Next.js:**
   - Keep `NEXT_PUBLIC_STRAPI_API_URL=https://your-app.up.railway.app`
   - Rebuild and redeploy

**This works fine, but the subdomain approach (Option 1) is more professional.**

---

# Complete DNS Configuration Example

Here's what your GoDaddy DNS should look like:

## For Option 1 (Subdomain):

```
Type    Name    Value                          TTL
A       @       [GoDaddy Hosting IP]           600
CNAME   www     @                              600
CNAME   api     your-app.up.railway.app        600
```

## For Option 2 (Railway domain only):

```
Type    Name    Value                          TTL
A       @       [GoDaddy Hosting IP]           600
CNAME   www     @                              600
```

---

# Step-by-Step: Complete Domain Setup

## Step 1: Configure GoDaddy DNS

1. Login to GoDaddy
2. Go to **"My Products"** → Your Domain → **"DNS"**
3. Configure records as shown above
4. Save changes

## Step 2: Deploy Frontend to GoDaddy

1. Build Next.js: `npm run build`
2. Upload `out/` folder to `public_html/`
3. Enable SSL in cPanel

## Step 3: Configure Strapi Domain (if using subdomain)

1. Add CNAME in GoDaddy DNS (Step 1 above)
2. Add custom domain in Railway
3. Wait for verification and SSL

## Step 4: Update Environment Variables

1. **Railway:** Update `CORS_ORIGIN`
2. **Next.js:** Update `NEXT_PUBLIC_STRAPI_API_URL`
3. Rebuild and redeploy Next.js

## Step 5: Test Everything

- ✅ `https://yourdomain.com` - Frontend loads
- ✅ `https://www.yourdomain.com` - Frontend loads
- ✅ `https://api.yourdomain.com/admin` - Strapi admin loads
- ✅ `https://api.yourdomain.com/api/articles` - API works
- ✅ Frontend can fetch data from Strapi

---

# DNS Propagation

**Important:** DNS changes take time to propagate:
- **Usually:** 1-2 hours
- **Maximum:** 24-48 hours
- **Check status:** Use [whatsmydns.net](https://whatsmydns.net)

**While waiting:**
- You can still access via Railway's domain
- Once DNS propagates, custom domain will work

---

# SSL Certificates

## GoDaddy (Frontend)
- **Automatic:** Let's Encrypt via cPanel
- **Time:** 5-10 minutes after enabling
- **Free:** Yes

## Railway (Strapi)
- **Automatic:** Railway provisions SSL
- **Time:** 5-15 minutes after adding domain
- **Free:** Yes

---

# Troubleshooting

## "Domain not resolving"

1. **Check DNS propagation:**
   - Visit: [whatsmydns.net](https://whatsmydns.net)
   - Enter your domain/subdomain
   - Check if DNS records are propagated globally

2. **Verify DNS records:**
   - Double-check CNAME value matches Railway URL exactly
   - Check TTL is reasonable (600 seconds)

3. **Wait longer:**
   - DNS can take up to 48 hours
   - Clear browser cache
   - Try incognito/private window

## "SSL certificate not working"

1. **GoDaddy:**
   - Wait 10-15 minutes after enabling
   - Check SSL status in cPanel
   - Try accessing via HTTP first, then HTTPS

2. **Railway:**
   - Wait 15-20 minutes after adding domain
   - Check Railway dashboard for SSL status
   - Verify domain is verified in Railway

## "CORS errors"

1. **Check CORS_ORIGIN in Railway:**
   - Must include exact domain: `https://yourdomain.com`
   - Include www version: `https://www.yourdomain.com`
   - No trailing slashes

2. **Verify Strapi URL:**
   - Check `NEXT_PUBLIC_STRAPI_API_URL` is correct
   - Must use HTTPS
   - Must match Railway domain exactly

## "Strapi admin not loading"

1. **Check Railway deployment:**
   - Verify service is running
   - Check deployment logs

2. **Check domain:**
   - Try accessing via Railway's domain first
   - If that works, issue is DNS-related

---

# Recommended Setup

**For Production:**

```
Frontend:  https://yourdomain.com
           https://www.yourdomain.com

Strapi:    https://api.yourdomain.com
           (or keep Railway domain)
```

**Benefits:**
- ✅ Professional appearance
- ✅ Better SEO
- ✅ Easier to remember
- ✅ All under your domain

---

# Quick Reference

## GoDaddy DNS Records Needed

```
A Record:
@ → [GoDaddy IP]

CNAME Records:
www → @
api → your-app.up.railway.app (if using subdomain)
```

## Environment Variables

**Railway (Strapi):**
```
CORS_ORIGIN=https://yourdomain.com,https://www.yourdomain.com
```

**Next.js (.env.production):**
```
NEXT_PUBLIC_STRAPI_API_URL=https://api.yourdomain.com
# OR
NEXT_PUBLIC_STRAPI_API_URL=https://your-app.up.railway.app
```

---

# Checklist

- [ ] GoDaddy DNS configured (A record for @)
- [ ] CNAME for www configured
- [ ] CNAME for api subdomain configured (if using)
- [ ] Next.js deployed to GoDaddy hosting
- [ ] SSL enabled on GoDaddy
- [ ] Custom domain added in Railway (if using subdomain)
- [ ] SSL active on Railway
- [ ] CORS_ORIGIN updated in Railway
- [ ] NEXT_PUBLIC_STRAPI_API_URL updated in Next.js
- [ ] Next.js rebuilt and redeployed
- [ ] All URLs tested and working

---

**Your website will be live at your custom domain! 🎉**


