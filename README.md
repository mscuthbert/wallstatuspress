# Wall Status Press

Site for Wall Status Press

(Michael Scott Asato Cuthbert)

## Development, Testing, and Deployment  
* Updated 2025-09-09

### Tech Stack
- [Vite](https://vitejs.dev/) 5+ (bundler + dev server)
- [Bootstrap](https://getbootstrap.com/) 4.6
- [jQuery](https://jquery.com/) 3.6
- [Font Awesome](https://fontawesome.com/) 5.15
- [Sass](https://sass-lang.com/) (SCSS source, compiled via Vite)
- GitHub Actions for CI/CD → GitHub Pages for hosting
- Node.js 24.x (Active LTS as of 2025)

### Local Development
```bash
# install dependencies
npm install

# start dev server (auto-reloads + opens browser)
npm run dev
```

- Entry point is `main.js`
- SCSS lives in `scss/`
- Static assets (Publications, CNAME, favicon, etc.) go in `public/`


### Building for Production
```bash
npm run build
```

- Note that you don't need to do this when committing -- it will be built as part of CI commit in .github/workflows/deploy.yml
- Outputs to `dist/` (minified JS/CSS, hashed filenames).
- Don’t commit `dist/`; it’s built fresh each deploy.

### Testing the Build
```bash
npm run preview
```

Runs a local server serving the built `dist/` exactly as GitHub Pages will.

### Deployment (GitHub Pages)
- Repo is wired to build and deploy automatically via **GitHub Actions** on pushes to `main`.
- The automatic workflow is:  
  1. `npm ci`  
  2. `npm run build`  
  3. Uploads `dist/` as Pages artifact  
  4. Publishes to GitHub Pages  
- Custom domain: `wallstatuspress.com` (CNAME in `public/` ensures HTTPS + domain binding).
- Both `wallstatuspress.com` and `www.wallstatuspress.com` resolve to the site.

### Notes
- Node engine must satisfy: `>=22.12.0` (we’re on Node 24.x now).
