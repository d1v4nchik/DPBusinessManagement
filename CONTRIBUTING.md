# Helping with the notes

Thanks for helping make these notes better for everyone taking IB Business Management.

## The quickest way: open an issue

You don't need to touch any code.

- **Something is wrong:** [send a correction](https://github.com/d1v4nchik/DPBusinessManagement/issues/new?template=correction.yml). Give the topic number (for example *3.7*), what's wrong, and a source if you have one (the subject guide, a textbook or a markscheme).
- **An idea:** [make a suggestion](https://github.com/d1v4nchik/DPBusinessManagement/issues/new?template=suggestion.yml).

## Running the site yourself

It's a static site with no build step and no dependencies. To run it on your computer:

```bash
git clone https://github.com/d1v4nchik/DPBusinessManagement.git
cd DPBusinessManagement
python3 -m http.server 8000
```

Then open <http://localhost:8000>. Any static file server works. You can also double-click `index.html`, because the whole site is one file.

```
.
├── index.html               # The whole site: notes, glossary, flashcards, questions, papers, styles and scripts
├── about.html               # What's inside, for students and teachers
├── sw.js                    # Saves the site for offline use and "Install app"
├── manifest.webmanifest     # App name and icons for "Install app"
├── version.json             # Build number, so the offline file knows when newer notes are out
├── assets/img/              # Social preview image and app icons
├── favicon.svg
├── 404.html
├── robots.txt
└── sitemap.xml
```

The site is published with GitHub Pages straight from `main`. On every change to `index.html`, the
*Offline copy* workflow attaches it to the
[`offline` release](https://github.com/d1v4nchik/DPBusinessManagement/releases/tag/offline) as
`ib-bm-notes-offline.html`, so the download link always gives the newest notes.

## Ground rules

- Keep explanations in plain words, and match the wording of the subject guide for definitions.
- Don't paste copyrighted IB material such as past paper questions or markschemes, and don't link to pirated copies. Write your own questions in the same style.
- Real company examples need a source anyone can check, such as the company's own reports or a major news outlet.
- Be kind in issues and reviews. Everyone here is a student or a teacher.
