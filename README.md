# mohak-portfolio

Static personal site. No build step for the page itself.

- `data.js` holds all content (experience, projects, Q&A answers). Edit this, not the HTML.
- `index.html` renders the page from `data.js`.
- `cv.txt` and `llms.txt` are generated from `data.js`. Regenerate after edits:

```bash
node build.cjs
```

Preview locally:

```bash
python3 -m http.server 8000
```

Deploy by uploading the folder as-is to any static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages).
