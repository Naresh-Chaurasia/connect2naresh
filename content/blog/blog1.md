---
title: "How to use Todoist"
description: "A beginner's guide to setting up your first Hugo site"
date: 2025-11-30T18:30:00+05:30
draft: false
weight: 10
tags:
  - hugo
  - web development
  - static site
categories:
  - Tutorials
contributors: []
pinned: false
---

## Introduction to Hugo

Hugo is a fast and modern static site generator written in Go. It's designed to be easy to use, flexible, and incredibly fast.

## Why Choose Hugo?

- **Blazing Fast Builds**: Hugo can build even large sites in seconds.
- **Easy Installation**: A single binary with no runtime dependencies.
- **Great Documentation**: Comprehensive and well-maintained documentation.
- **Active Community**: Large community and many themes available.

## Getting Started

To create a new Hugo site, simply run:

```bash
hugo new site my-hugo-site
cd my-hugo-site
git init
git submodule add https://github.com/theNewDynamic/gohugo-theme-ananke.git themes/ananke
echo 'theme = "ananke"' >> config.toml
hugo server -D
```

## Next Steps

- Explore Hugo's [documentation](https://gohugo.io/documentation/)
- Try different themes from [Hugo Themes](https://themes.gohugo.io/)
- Learn about content organization and templates

Happy coding!
