---
title: "Hugo"
description: "Guides lead a user through a specific task they want to accomplish, often with a sequence of steps."
summary: ""
date: 2023-09-07T16:04:48+02:00
lastmod: 2023-09-07T16:04:48+02:00
draft: false
weight: 1000
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


### 🚀 Thulite Doks Features

**Documentation-First Design**

* Built specifically for *technical documentation*

---

**Powerful Search**

* Built-in **client-side search** (FlexSearch)
* Instant results while typing
* Works fully offline once site is loaded

---

**Navigation & Structure**

* Sidebar navigation with:
  * Nested sections
  * Auto-generated menus
* Breadcrumbs for easy orientation
* “On this page” **Table of Contents**
* Previous / Next page navigation

---

**Markdown + Shortcodes**

* Standard Markdown support
* Useful shortcodes like:

  * `alert`
  * `details`
  * `tabs`
  * `button`
* Easy callouts for notes, warnings, tips

Example:

---

**Modern UI & UX**

* Responsive (mobile-first)
* Clean typography
* Consistent spacing and layout
* Optimized for long-form reading

---

**Dark & Light Mode**

* Built-in **dark / light theme toggle**
* Respects system preferences
* No extra configuration needed

---

**Performance & SEO**

* Extremely fast (static site)
* SEO-optimized out of the box:

  * Meta tags
  * Open Graph
  * Sitemap
* Lighthouse-friendly defaults

---

**Content Enhancements**

* Syntax highlighting for code blocks
* Copy-to-clipboard for code snippets
* Anchor links for headings
* Automatic table styling

---

**Versioned Docs Support**

* Supports:

  * Multiple documentation versions
  * Version switcher (manual config)
* Useful for APIs, courses, evolving content

---

**Customization & Extensibility**

* Tailwind CSS based
* Easy to override layouts and styles
* Modular partials
* Hugo pipelines supported

---

**Production-Ready Features**

* Google Analytics support
* Privacy-friendly defaults
* Robots.txt + sitemap included
* Multilingual support

---

**Content Types Included**

* Docs pages
* Blog posts
* Landing pages
* Tutorials / Guides

---

**Developer Friendly**

* Clean folder structure
* Hugo modules support
* Easy local development
* Well-structured configuration

---

**Best Use Cases**

* Technical documentation
* Course notes
* Personal knowledge base
* Developer blogs
* API docs
* Learning journals (perfect for *dance + self-development notes* 😉)

---

### 🧩 Hugo Commands

**`hugo server`**

**Use when:** Quick development with fast reloads
- Everyday development | When you want fast rebuilds | Content changes only

---

**`hugo server --disableFastRender`**

**Use when:** Need accurate rendering
- Layout/template changes | CSS/JS changes | When changes aren't showing up | Debugging display issues

**`hugo server --ignoreCache --disableFastRender`**

**Use when:** Fresh start needed
- After config changes
- When cache might be stale
- Troubleshooting build issues
- First time setup

**`hugo server -D`**

**Use when:** Working with draft content
- Creating new pages
- Testing draft posts
- Content not ready for publish

---

**Build Commands**

**`hugo`**

**Use when:** Production deployment
- Building for GitHub Pages
- Deploying to web server
- Final site testing
- Before committing changes

**`hugo --gc`**

**Use when:** Site cleanup
- Removing unused files
- Reducing build size
- Before deployment

**Common Scenarios**

| Scenario | Command |
|----------|---------|
| Daily development | `hugo server` |
| Template changes | `hugo server --disableFastRender` |
| New content creation | `hugo server -D` |
| Production build | `hugo` |
| Troubleshooting | `hugo server --ignoreCache --disableFastRender` |
