# CMS Setup Guide for The Legal Chambers

This guide will help you set up the Content Management System (CMS) for managing content on the Resources page.

## Prerequisites

1. A Sanity account (free tier available at https://sanity.io)
2. Node.js and npm installed

## Step 1: Create a Sanity Project

1. Go to https://sanity.io and sign up/login
2. Click "Create new project"
3. Name your project (e.g., "The Legal Chambers")
4. Choose a dataset name (default: "production")
5. Copy your Project ID from the project settings

## Step 2: Configure Environment Variables

1. Create a `.env.local` file in the root directory
2. Add the following variables:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
ADMIN_PASSWORD=your_secure_password_here
```

Replace `your_project_id_here` with your actual Sanity Project ID and set a secure password for admin access.

## Step 3: Install Dependencies

The required packages should already be installed. If not, run:

```bash
npm install
```

## Step 4: Deploy Sanity Schema

1. Install Sanity CLI globally (if not already installed):
```bash
npm install -g @sanity/cli
```

2. Login to Sanity:
```bash
sanity login
```

3. Initialize and deploy the schema:
```bash
sanity init --env
sanity deploy
```

Or use the Sanity Studio directly at `/admin/studio` after setting up environment variables.

## Step 5: Access the Admin Panel

1. Start your development server:
```bash
npm run dev
```

2. Navigate to `http://localhost:3000/admin/login`
3. Enter your admin password (set in `.env.local`)
4. You'll be redirected to the admin dashboard

## Step 6: Using the CMS

### Accessing Sanity Studio

1. From the admin dashboard, click "Open Sanity Studio"
2. Or navigate directly to `http://localhost:3000/admin/studio`

### Managing Content

The CMS includes 4 content types:

1. **News Reports**: Add news articles with title, summary, and link
2. **Media**: Upload images or add links to YouTube/Instagram content
3. **Blogs**: Create full blog posts with rich text content
4. **Noted Judgements**: Add legal judgements with case details

### Adding Content

1. Click on a content type in the left sidebar
2. Click "Create new" or the "+" button
3. Fill in the required fields
4. Click "Publish" to make it live on the website

## Step 7: Viewing Content

Content added through the CMS will automatically appear on the Resources page at `/resources`. The page fetches data in real-time from Sanity.

## Security Notes

- **Change the default admin password** in production
- Keep your `.env.local` file secure and never commit it to version control
- Consider using environment-specific passwords for different deployments

## Troubleshooting

### Images not showing
- Ensure images are uploaded through Sanity Studio
- Check that `NEXT_PUBLIC_SANITY_PROJECT_ID` is set correctly

### Can't access admin panel
- Verify `ADMIN_PASSWORD` matches what you're entering
- Check browser cookies are enabled

### Content not appearing
- Ensure content is published (not just saved as draft)
- Check browser console for API errors
- Verify Sanity project ID and dataset name are correct

## Support

For Sanity-specific issues, refer to:
- Sanity Documentation: https://www.sanity.io/docs
- Sanity Community: https://slack.sanity.io

