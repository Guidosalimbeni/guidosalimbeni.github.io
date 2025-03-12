# Cache-Busting Guide for GitHub Pages

When updating JavaScript, CSS, or images on a GitHub Pages site, browsers often serve cached versions instead of downloading the new files. This guide explains how to handle cache-busting effectively.

## Recommended Approach: Version Parameter

Add a version parameter to your script and stylesheet links that changes whenever you update the file. This forces browsers to download the new version.

Example:

```html
<script src="js/main.js?v=20250312"></script>
```

The key benefits of this approach:

- Simple to implement
- Doesn't require changing filenames
- Follows standard web practices

## When to Update the Version Parameter

Update the version parameter whenever you make changes to the file:

1. For date-based versioning (recommended): Use format `YYYYMMDD` or `YYYYMMDD-N` where N is incremented for multiple updates on the same day

   ```html
   <script src="js/main.js?v=20250312"></script>
   ```

2. For semantic versioning: Use format `major.minor.patch`

   ```html
   <script src="js/main.js?v=1.2.3"></script>
   ```

3. For simple incremental versioning: Just increment a number
   ```html
   <script src="js/main.js?v=42"></script>
   ```

## Additional Cache-Busting Techniques

For more stubborn caching issues:

1. Add a meta tag to discourage caching (add to `<head>` section):

   ```html
   <meta
     http-equiv="Cache-Control"
     content="no-cache, no-store, must-revalidate"
   />
   <meta http-equiv="Pragma" content="no-cache" />
   <meta http-equiv="Expires" content="0" />
   ```

2. Consider using a CDN like jsDelivr which can serve GitHub content with proper cache headers

## GitHub Pages Cache Issues

GitHub Pages uses aggressive caching that can sometimes persist longer than expected. If you're experiencing stubborn caching issues:

1. Wait 5-10 minutes after pushing changes before testing
2. Try viewing the site in an incognito/private browsing window
3. Try clearing your browser cache (Ctrl+F5 on most browsers)
4. Use a different browser or device to test
5. Use the Network tab in your browser's developer tools to verify if the correct version is being loaded

Remember: Your visitors will experience the same caching behavior, so proper cache-busting is essential for ensuring they see your latest changes.
