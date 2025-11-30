---
title: "Diffusion: Image Generation"
description: "Reference pages are ideal for outlining how things work in terse and clear terms."
summary: ""
date: 2025-11-20T16:12:37+02:00
lastmod: 2025-11-20T16:12:37+02:00
draft: false
weight: 910
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


### Diffusion: How AI Turns Static Into Stunning Images

Ever wondered how AI can create a cat wearing sunglasses 🐱🕶️ or a futuristic city out of thin air?
The magic behind it is called **diffusion**, and it’s much simpler than you think.

<figure class="my-4">
    <img
        src="/images/img-generation.png"
        alt="Image Generation using Diffusion"
        class="w-full h-auto rounded-lg shadow-md">
    <figcaption class="mt-2 text-sm text-gray-600 text-center">
        Figure: Image Generation using Diffusion
    </figcaption>
</figure>

---

### 1️⃣ What Is Diffusion?

Diffusion is the process where AI **turns random noise into meaningful images**.

Imagine you have a clear photo of a cat.
Now:

* Add a little dust → slightly fuzzy
* Add more dust → blurry
* Add even more → pure static

That final snowy, fuzzy static is **exactly where AI begins** when generating new images.

---

### 2️⃣ How Noise Is Added (During Training)

During training, the model learns by watching images slowly get destroyed with noise.

Process:

* The model receives real images (cats, cars, mountains, etc.)
* Noise is added **step-by-step**
* Each step makes the image more distorted
* Eventually, it becomes pure static
* At every step, the AI is trained to **predict the noise that was added**

The model learns the rule:

> “If I see this pattern of noise → I know how to reverse it.”

This is how it memorizes the recipe for turning noise back into meaningful structure.

---

### 3️⃣ How Noise Is Removed (During Image Generation)

When you prompt:
**“Draw a cat wearing sunglasses.”**

The AI does **not** start with a cat.
It starts with **pure noise**.

Then it:

* Removes noise step-by-step
* Gradually forms shapes
* Adds outlines
* Builds details and shading

By the final steps:

**Noise → Shapes → Outline → Complete Image**

A brand-new cat wearing sunglasses appears. 🐱🕶️
It’s like watching a Polaroid develop — but in reverse.

---

### 4️⃣ Why Start With Noise?

Noise is like *raw clay* — it has no structure.
This gives the AI complete creative freedom.

Starting from a blank white image would already impose structure and restrict creativity.

**Noise = infinite possibilities ✨**

---

### What Does “Noise” Mean?

In diffusion models:

* Each pixel in an image has numeric color values (RGB)
* Noise = changing these values randomly
* Repeated randomization breaks the original image structure

Example:

```
Original pixel: (0, 120, 255)
Noise added:   (+15, -30, +5)
Result:         (15, 90, 260)
```

Do this across the entire image thousands of times → the image becomes static.

So yes — noise directly changes **pixel values**, not pixel positions.

---

### Simple Analogy

Imagine a coloring book page of a cat.

Now you:

* Spill glitter → messy
* Add more glitter → less visible
* Add even more → only glitter

During training, the AI learns how to **remove the glitter in reverse**, restoring clarity.

During generation, instead of restoring the old cat, it uses your **prompt** to reveal a new one (with sunglasses, skateboards, anything).

---

### 5️⃣ TL;DR

> AI starts with random static (noise) and removes it step-by-step until an image matching your prompt appears.

**Result → Unique, never-seen-before creations. 🎨✨**

Next time you see an AI-generated picture, remember:
It began as chaos, and the AI sculpted order out of it.

---


#### Further reading

- Read [about reference](https://diataxis.fr/reference/) in the Diátaxis framework
