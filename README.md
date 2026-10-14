# Soft Sage Statistical Programmer & Editor Portfolio

Responsive multi-page static website for GitHub Pages. Warm ivory, sage green, forest accents, editorial headings, subtle page transitions, scroll reveals, and a mobile menu.

## Files
- `index.html`: home, education, tools, current work, transition to editing
- `editing.html`: publishing and editorial work
- `cv.html`: experience, education, skills, certifications, grants, downloadable CV
- `contact.html`: email and professional links
- `styles.css`: design and responsive styling
- `script.js`: mobile navigation, gentle scroll reveal, current year

## Personalise
1. Replace `[Your Name]` and all other square-bracket placeholders.
2. Replace `assets/profile-placeholder.svg` with a portrait. For example, add `assets/profile.jpg` and change the image source in `index.html` to `assets/profile.jpg`.
3. Update education, current work, tools, certifications, grants, and editing examples.
4. Add your CV PDF at `assets/your-cv.pdf` or update the download link in `cv.html`.
5. Replace `YOUR.EMAIL@example.com`, `[YOUR_LINKEDIN_URL]`, and `[YOUR_GITHUB_URL]`.
6. Only publish work samples you own or have permission to share. Use synthetic/public data; never upload confidential employer, sponsor, or participant information.

## Preview
Open `index.html` in a browser. You can also use VS Code Live Server for a local preview.

## Publish on GitHub Pages
1. Create a GitHub repository. For a personal site, name it `YOURUSERNAME.github.io`; otherwise, use a project repository.
2. Upload the *contents* of this folder to the repository root (not the ZIP file itself).
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/(root)`, then save.
6. Wait for deployment. GitHub will show the published URL in Settings → Pages.

Project sites usually use `https://YOURUSERNAME.github.io/REPOSITORY-NAME/`. Navigation uses relative paths to support this.

## Notes
- Motion respects `prefers-reduced-motion` accessibility settings.
- Google Fonts load from an external service and fall back to system fonts.
- The contact page uses `mailto:` links; static GitHub Pages does not process form submissions by itself.
