# 🔧 Git Repository Setup Guide

This guide will help you set up Git and push your code to GitHub (required for Railway deployment).

---

## Check if Git is Installed

```bash
git --version
```

If not installed, install Git:
- **Mac:** `brew install git` or download from [git-scm.com](https://git-scm.com)
- **Windows:** Download from [git-scm.com](https://git-scm.com)

---

## Option 1: Initialize New Git Repository

If you haven't set up Git yet:

### Step 1: Initialize Git

```bash
# Make sure you're in your project root
cd /Users/aginsmacbook/Downloads/code

# Initialize git repository
git init
```

### Step 2: Create .gitignore

Create a `.gitignore` file (if it doesn't exist):

```bash
# Check if .gitignore exists
cat .gitignore
```

If it doesn't exist or needs updating, create one with:

```
# Dependencies
node_modules/
/.pnp
.pnp.js

# Testing
/coverage

# Next.js
/.next/
/out/
/build

# Production
/build

# Misc
.DS_Store
*.pem

# Debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Local env files
.env*.local
.env.production

# Vercel
.vercel

# Typescript
*.tsbuildinfo
next-env.d.ts

# Strapi
my-strapi-project/.tmp/
my-strapi-project/.cache/
my-strapi-project/build/
my-strapi-project/dist/
my-strapi-project/node_modules/
my-strapi-project/.env
my-strapi-project/.env.production
```

### Step 3: Add Files to Git

```bash
# Add all files
git add .

# Check what will be committed
git status
```

### Step 4: Create Initial Commit

```bash
git commit -m "Initial commit: Next.js website with Strapi backend"
```

### Step 5: Create GitHub Repository

1. Go to [github.com](https://github.com)
2. Click **"+"** → **"New repository"**
3. Repository name: `lumen-website` (or your preferred name)
4. Description: "LUMEN Audit & Advisory website"
5. Choose **Public** or **Private**
6. **Don't** initialize with README, .gitignore, or license
7. Click **"Create repository"**

### Step 6: Connect to GitHub

GitHub will show you commands. Use these:

```bash
# Add remote repository (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Or if using SSH:
# git remote add origin git@github.com:YOUR_USERNAME/REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Example:**
```bash
git remote add origin https://github.com/johndoe/lumen-website.git
git branch -M main
git push -u origin main
```

---

## Option 2: Check Existing Git Repository

If you already have a Git repository:

### Check Remote Repository

```bash
# Show all remotes
git remote -v

# Show origin URL
git config --get remote.origin.url
```

### View Repository on GitHub

The output will show something like:
- `https://github.com/username/repo-name.git`
- Or: `git@github.com:username/repo-name.git`

Visit: `https://github.com/username/repo-name` to see your repository.

---

## Option 3: Find Your Repository URL

### If you know your GitHub username:

1. Go to: `https://github.com/YOUR_USERNAME`
2. Look for repositories
3. Find your project

### Check GitHub for recent pushes:

1. Login to [github.com](https://github.com)
2. Click your profile picture → **"Your repositories"**
3. Look for recently updated repositories

---

## Commands to Check Git Status

```bash
# Check if this is a git repository
git status

# Show remote repositories
git remote -v

# Show current branch
git branch

# Show last commit
git log -1

# Show repository URL
git config --get remote.origin.url
```

---

## For Railway Deployment

Railway needs:
1. ✅ Your code on GitHub
2. ✅ Repository is accessible (public or Railway has access)
3. ✅ Repository URL to connect

**Once you have your GitHub repository URL, use it in Railway:**
- Railway → New Project → Deploy from GitHub repo
- Select your repository
- Railway will automatically detect it

---

## Quick Setup Script

If you need to set up Git from scratch:

```bash
# 1. Initialize
git init

# 2. Add files
git add .

# 3. Commit
git commit -m "Initial commit"

# 4. Add remote (replace with your GitHub repo URL)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# 5. Push
git branch -M main
git push -u origin main
```

---

## Troubleshooting

### "Repository not found"
- Check repository name is correct
- Verify you have access (if private repo)
- Check GitHub username is correct

### "Authentication failed"
- Use GitHub Personal Access Token instead of password
- Or set up SSH keys

### "Nothing to commit"
- Check `.gitignore` isn't excluding everything
- Verify files exist in directory

---

## Next Steps

Once your code is on GitHub:
1. ✅ Go to Railway
2. ✅ Connect GitHub account
3. ✅ Select your repository
4. ✅ Deploy!

---

**Need help?** Check GitHub documentation: [docs.github.com](https://docs.github.com)


