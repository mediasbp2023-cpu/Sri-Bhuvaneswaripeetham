# Sitemap files and how to regenerate

Files added:

- `docs/sitemap.mmd` — editable Mermaid source wrapped in Markdown fences (good for editing inside docs).
- `docs/sitemap.plain.mmd` — plain Mermaid source (no fences) used for rendering with the Mermaid CLI.
- `public/sitemap.html` — an HTML page that renders the Mermaid diagram in-browser using the Mermaid CDN.
- `public/images/sitemap.svg` — the rendered static SVG (generated via the Mermaid CLI).

To regenerate the SVG locally (PowerShell), run from the project root:

```powershell
npx @mermaid-js/mermaid-cli -i docs/sitemap.plain.mmd -o public/images/sitemap.svg
```

If you prefer to edit `docs/sitemap.mmd` (with fences), after editing copy the content between the fenced block into `docs/sitemap.plain.mmd` or run a small script to strip the fences before rendering.
