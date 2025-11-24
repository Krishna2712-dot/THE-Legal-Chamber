# Quick Setup Instructions

## Fix the "Configuration must contain `projectId`" Error

This error occurs because Sanity CMS environment variables are not set up yet. Follow these steps:

### Step 1: Create a Sanity Account and Project

1. Go to https://sanity.io and sign up (it's free)
2. Click "Create new project"
3. Name it "The Legal Chambers" (or any name you prefer)
4. Choose dataset name: `production` (or keep default)
5. **Copy your Project ID** from the project settings page

### Step 2: Create Environment Variables File

1. In the root directory of your project, create a file named `.env.local`
2. Add the following content (replace with your actual values):

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
ADMIN_PASSWORD=your_secure_password_here
```

**Example:**
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=abc123xyz
NEXT_PUBLIC_SANITY_DATASET=production
ADMIN_PASSWORD=MySecurePassword123!
```

### Step 3: Restart Your Development Server

1. Stop your current dev server (Ctrl+C)
2. Start it again:
   ```bash
   npm run dev
   ```

### Step 4: Access the Admin Panel

1. Navigate to: `http://localhost:3000/admin/login`
2. Enter your admin password (the one you set in `.env.local`)
3. Click "Open Sanity Studio" to start managing content

## Important Notes

- The `.env.local` file is already in `.gitignore` and won't be committed to version control
- Never share your Project ID or admin password publicly
- After setting up, the Resources page will show "No content available yet" until you add content through the CMS

## Need Help?

See `README_CMS.md` for detailed documentation on using the CMS.


