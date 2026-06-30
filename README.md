# Personal Website

The source for [khayrul.com](https://khayrul.com), my personal website and blog. It highlights my experience as a Computer Science and Business Administration student at Northeastern University, where I concentrate in Fintech, along with my work in responsible AI, teaching, and systems engineering.

## What's on the Site

- A profile page with recent updates and professional experience
- A blog about technology, education, and running a hosting company
- Links to my resume, GitHub, LinkedIn, and email
- Responsive dark-theme styling for desktop and mobile
- Search and social metadata, structured data, a sitemap, and `robots.txt`
- A custom 404 page

## Built With

The site is built with plain HTML, CSS, and JavaScript. It has no framework, package manager, or build step. Font Awesome is loaded from a CDN for social icons.

## Project Structure

```text
.
├── index.html          # Home page
├── blog/               # Blog index and posts
├── css/                # Site and blog styles
├── js/                 # Client-side interactions
├── cdn/                # Profile image, resume, and fallback assets
├── 404.html            # Custom not-found page
├── sitemap.xml
└── robots.txt
```

## Running Locally

Because the site is static, you can serve it with any local HTTP server. For example:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

## License

This project is available under the [MIT License](LICENSE).
