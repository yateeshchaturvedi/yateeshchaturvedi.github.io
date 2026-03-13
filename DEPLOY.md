# Deploy Next.js Portfolio to GitHub Pages

## Local development

```powershell
npm.cmd install
npm.cmd run dev
```

## Production build

```powershell
npm.cmd run build
```

This app uses `output: "export"`, so static files are generated in `out/`.

## GitHub Pages

1. Push this repository to GitHub (`main` branch).
2. Open `Settings -> Pages`.
3. Select `Build and deployment: GitHub Actions`.
4. Workflow `.github/workflows/deploy-pages.yml` will deploy automatically.

## Contact form setup

Set a real Formspree endpoint in `data/portfolio.js`:
- `contactEndpoint: "https://formspree.io/f/<your-id>"`

Without this change, contact submissions will fail and users should use email links.