# IndexNow

This site uses IndexNow with the key file:

- `https://www.packplannerpro.co.uk/73d7246734494764b0aab62f7f932004.txt`

For this static Vercel site, the useful setup is:

1. Host the key file at the root.
2. Submit changed URLs after important updates.

To submit the main site URLs and blog URLs:

```powershell
.\indexnow-submit.ps1
```

To submit specific URLs only:

```powershell
.\indexnow-submit.ps1 -Urls `
  "https://www.packplannerpro.co.uk/blog/how-to-organise-your-dog-walking-schedule"
```

Notes:

- IndexNow helps search engines discover changed URLs faster.
- It does not guarantee crawling or indexing.
- For this project, use it after publishing new pages, blog posts, or meaningful content updates.
