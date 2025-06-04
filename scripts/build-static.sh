#!/bin/bash

# Clean previous builds
rm -rf .next out

# Install dependencies
npm install

# Build and export the site
npm run build

# Create a backup of existing index.html if it exists
if [ -f "index.html" ]; then
    mv index.html index.html.backup
fi

# Copy all files from out/ to root directory
cp -r out/* ./

# Clean up
rm -rf .next out index.html.backup

echo "Static site has been built and copied to the root directory"
echo "You can now upload the following files and folders to your hosting:"
echo "- All HTML files in the root directory"
echo "- The _next/ directory"
echo "- Any static assets from the public directory" 