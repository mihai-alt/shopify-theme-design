---
name: shopify-theme-design
description: Create distinctive, marketplace-quality Shopify themes with strong brand cohesion. Design-first approach using Theme DNA to ensure every template reinforces the same vibe. Use when building full Shopify themes from scratch.
---

# Shopify Theme Design

## Overview

Build Shopify themes that convert AND captivate. This skill combines conversion-focused structure with distinctive visual design to create themes that stand out in a sea of Dawn clones. The goal: marketplace-quality themes you'd be proud to sell.

## Core Philosophy

**Priority Stack:**
1. Brand cohesion across all touchpoints
2. Homepage hero + collection grid (first impression)
3. Product page (conversion point)
4. Mobile experience

**The Anti-Slop Mandate:**
Every Shopify theme should be unmistakable. Actively avoid:
- The Dawn-clone aesthetic (minimal ≠ distinctive)
- Stock photo energy
- Feature bloat and overwhelming settings
- "That's clearly Shopify" tells

---

## MANDATORY: Vibe Discovery (Do This First)

**BEFORE writing any code, you MUST run the Vibe Discovery process.** This generates a UNIQUE aesthetic direction every time.

The goal: No two themes should look alike, even for similar stores.

### Brand Assets Check (Optional)

**Before diving into the questions, ask:**

> "Do you have an existing logo or brand colors you'd like me to work from? If so, share the logo image and I'll extract a color palette from it."

**If they provide a logo:**
1. Analyze the logo image to extract primary and secondary colors
2. Note the visual style (geometric, organic, minimalist, ornate, etc.)
3. **Ask how they want to use these colors:**

> "I've extracted [list colors]. How would you like to use these in the theme?"
> - **Direct** - Use these exact colors as the primary palette
> - **Complementary** - Build a palette using complements/analogous colors that harmonize with the logo
> - **Accent only** - Logo colors become accents, derive the rest from the vibe reference
> - **Something else** - Tell me your vision

4. The Vibe Discovery questions then INFORM how you apply those colors (which becomes primary, accent, etc.)

**If they don't have a logo:**
- Proceed with standard Vibe Discovery
- Derive colors from the place/object reference (Q2)

---

### The Discovery Questions

**Q1: What type of store is this?**
> Fashion/apparel | Tech/digital | Food/beverage | Home goods | Beauty | Luxury | Artisan/handmade | Sports/outdoor | Kids/baby | Other

**Q2: What's one real-world place or object this brand would be?**
> Not "what industry" - an actual specific thing. A Tokyo convenience store at 2am. A grandmother's kitchen. A brutalist parking garage. A coral reef. The cockpit of a 747. A flea market in Marrakech. A 1970s recording studio. A vintage record store. A luxury yacht interior.

**Q3: What's the ONE emotion a shopper should feel landing on this store?**
> Pick ONE: Calm. Energized. Curious. Trusted. Delighted. Impressed. Rebellious. Nostalgic. Inspired. Luxurious. Welcomed. Confident. Intrigued. Sophisticated.

**Q4: Pick TWO unexpected influences to collide:**
> Examples: "vintage pharmacy + streetwear", "art gallery + farmer's market", "space station + cozy cabin", "medical packaging + skateboard graphics", "luxury hotel + punk zine", "Japanese convenience store + Victorian library"

**Q5: What should this store NEVER be mistaken for?**
> Name 2-3 specific things to actively avoid. "A dropshipping store", "Another Dawn theme", "A fast fashion brand", "Something corporate", "A crypto project"

**Q6: What level of merchant customization?**
> - **Opinionated with guardrails** - Fewer options, but every combination looks good (harder to mess up)
> - **Flexible powerhouse** - Lots of customization options, trust the merchant
> - **Design-system approach** - Expose design tokens (colors, spacing, typography) but lock down layout decisions

**Q7: What's the tech approach?**
> - **Vanilla Liquid + CSS** - Pure Shopify, no build step, maximum compatibility
> - **Tailwind-based** - Use Tailwind CSS with a build process for rapid styling
> - **CSS custom properties heavy** - Vanilla CSS but architected around design tokens/variables

### Quick Context Questions (Minimal Version)

If someone just says "build me a Shopify theme" with no context, ask:

1. "What type of store and what do they sell?"
2. "What's one place or object that captures this brand's energy?"
3. "What should this store NEVER look like?"

Then synthesize a vibe from those three answers.

---

## MANDATORY: Theme DNA Document

**After Vibe Discovery, codify everything into a Theme DNA spec before touching templates.**

This document becomes your source of truth. Every template decision references it.

```
THEME DNA: [Store Name]
========================

VIBE
----
Name: [2-3 word evocative name]
Reference: [Place/object from Q2]
Store Type: [From Q1]
Emotion: [From Q3]
Collision: [From Q4]
Anti-patterns: [From Q5]

DESIGN TOKENS
-------------
Colors:
  Source: [logo-extracted | reference-derived | both]
  Strategy: [direct | complementary | accent-only | custom] (if logo provided)
  --color-primary: [hex] - [why, from logo or reference]
  --color-secondary: [hex] - [why]
  --color-background: [hex] - [why]
  --color-surface: [hex] - [for cards, elevated elements]
  --color-text: [hex]
  --color-text-muted: [hex]
  --color-accent: [hex] - [the pop color]
  --color-sale: [hex] - [for price reductions]
  Palette name: [evocative name]

Typography:
  --font-heading: [specific font] - [why it fits the collision]
  --font-body: [specific font] - [why]
  --font-accent: [optional, for prices/labels]
  Scale: [tight/normal/spacious]

Spacing:
  --space-unit: [base unit, e.g., 4px or 8px]
  Density: [compact/balanced/airy]

Borders & Radius:
  --radius-small: [for buttons, inputs]
  --radius-medium: [for cards]
  --radius-large: [for sections, modals]
  Style: [sharp/slightly-rounded/pill/organic]

COMPONENT PATTERNS
------------------
Buttons:
  Primary: [description - filled, outline, ghost?]
  Secondary: [description]
  Hover behavior: [lift, glow, fill, etc.]

Cards (Product):
  Image treatment: [aspect ratio, hover effect]
  Info layout: [minimal/detailed]
  Price display: [prominent/subtle]

Navigation:
  Style: [sticky/static, transparent/solid]
  Mobile: [drawer/full-screen/bottom-nav]

ANIMATION VOCABULARY
--------------------
Level: [still/subtle/moderate/dynamic]
Entrance: [fade/slide/blur/scale]
Signature animation: [one defining motion]
Product hover: [zoom/swap/lift/none]

PHOTOGRAPHY DIRECTION
---------------------
Style: [lifestyle/studio/editorial/mixed]
Mood: [matches the emotion from Q3]
What to avoid: [generic stock, specific styles]

WILDCARD
--------
[One unexpected detail that doesn't "match" but makes it memorable]

TECHNICAL
---------
Customization level: [from Q6]
Tech stack: [from Q7]
```

### The Freshness Check

Before proceeding, verify:
- [ ] Colors derived fresh from logo or reference (NOT reused hex codes from previous projects)
- [ ] Fonts are NOT my usual defaults (check: am I using Inter? Roboto? Assistant? If yes, find something else)
- [ ] The collision from Q4 is actually visible in my choices
- [ ] Someone could NOT mistake this for my previous themes
- [ ] I included a wildcard that surprises even me

---

## Example Theme DNA

**Q1 - Store Type:** Fashion/streetwear

**Q2 - Place/Object:** "A 1990s Tokyo arcade"

**Q3 - Emotion:** "Energized"

**Q4 - Collision:** "Vending machines + high fashion editorial"

**Q5 - Never mistaken for:** "A skate shop, anything minimalist, generic streetwear"

**Q6 - Customization:** Design-system approach

**Q7 - Tech:** CSS custom properties

**Generated Theme DNA:**

```
THEME DNA: Neon District
========================

VIBE
----
Name: Neon District
Reference: 1990s Tokyo arcade
Store Type: Fashion/streetwear
Emotion: Energized
Collision: Vending machines + high fashion editorial
Anti-patterns: No skate shop aesthetic, no minimalism, no generic streetwear

DESIGN TOKENS
-------------
Colors:
  --color-primary: #0a0a0a - the darkness between machines
  --color-secondary: #1a1a2e - deep arcade purple-black
  --color-background: #0d0d0d - CRT off-state
  --color-surface: #161622 - slightly elevated panels
  --color-text: #e8e8e8 - screen glow white
  --color-text-muted: #6b6b7b - dimmed display
  --color-accent: #00ff88 - vending machine "ready" light
  --color-sale: #ff3366 - arcade "INSERT COIN" pink
  Palette name: "After Hours Glow"

Typography:
  --font-heading: Darker Grotesque - compressed, bold, arcade signage energy
  --font-body: Space Grotesk - technical but readable
  --font-accent: IBM Plex Mono - for prices, like LED displays
  Scale: tight

Spacing:
  --space-unit: 4px
  Density: compact (like crowded arcade aisles)

Borders & Radius:
  --radius-small: 2px
  --radius-medium: 4px
  --radius-large: 8px
  Style: sharp with slight rounding (CRT corners)

COMPONENT PATTERNS
------------------
Buttons:
  Primary: Filled with accent color, sharp edges, ALL CAPS
  Secondary: Outline with glow on hover
  Hover behavior: Subtle glow effect, like button lighting up

Cards (Product):
  Image treatment: 4:5 aspect ratio, scale-up on hover with slight glow
  Info layout: Minimal - just title and price
  Price display: Monospace font, prominent, LED-style

Navigation:
  Style: Sticky, solid dark background
  Mobile: Full-screen takeover with large touch targets

ANIMATION VOCABULARY
--------------------
Level: Moderate (energized but not chaotic)
Entrance: Fade-in with slight scale
Signature animation: Elements have subtle RGB shift on hover (like CRT phosphors)
Product hover: Scale up with glow bloom

PHOTOGRAPHY DIRECTION
---------------------
Style: Editorial with dramatic lighting
Mood: High contrast, neon-lit, nighttime energy
What to avoid: Natural light, lifestyle shots, anything "authentic"

WILDCARD
--------
Product grid occasionally "glitches" - one card slightly offset or with a scan-line effect

TECHNICAL
---------
Customization level: Design-system approach (expose tokens, lock layouts)
Tech stack: CSS custom properties heavy
```

---

## HTML Preview Phase (Before Liquid)

**Build the design as static HTML first. Get approval. Then convert to Liquid.**

This is faster, easier to iterate, and lets you validate the vibe before dealing with Shopify's templating system.

### Preview Folder Structure

```
preview/
├── index.html              # Homepage
├── collection.html         # Collection page
├── product.html            # Product page
├── cart.html               # Cart page
├── css/
│   └── theme.css           # All styles (DNA tokens as CSS vars)
├── js/
│   └── preview.js          # Any interactive elements
├── assets/
│   └── images/             # Sample product/lifestyle images
├── data/
│   └── products.json       # Mock product data
└── serve.ts                # Simple Bun preview server
```

### Setting Up the Preview

**1. Create the preview folder:**
```bash
mkdir -p preview/{css,js,assets/images,data}
```

**2. Create the preview server (preview/serve.ts):**
```typescript
// ABOUTME: Simple Bun server for previewing HTML mockups
// ABOUTME: Serves static files with live reload capability

const server = Bun.serve({
  port: 3000,
  async fetch(req) {
    const url = new URL(req.url);
    let path = url.pathname;

    // Default to index.html
    if (path === "/") path = "/index.html";

    // Try to serve the file
    const file = Bun.file(`./preview${path}`);
    if (await file.exists()) {
      return new Response(file);
    }

    // 404
    return new Response("Not found", { status: 404 });
  },
});

console.log(`Preview server running at http://localhost:${server.port}`);
```

**3. Run the preview:**
```bash
bun run preview/serve.ts
```

### HTML Template Structure

Each HTML file should mirror what the Shopify template will become. Use the same CSS variable names from your Theme DNA.

**Example: preview/index.html (Homepage)**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Store Name - Preview</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=YOUR_FONTS" rel="stylesheet">
  <link rel="stylesheet" href="/css/theme.css">
</head>
<body>
  <!-- HEADER: Will become sections/header.liquid -->
  <header class="site-header">
    <nav class="nav">
      <a href="/" class="logo">Store Name</a>
      <ul class="nav-links">
        <li><a href="/collection.html">Shop</a></li>
        <li><a href="#">About</a></li>
      </ul>
      <div class="nav-icons">
        <button class="icon-btn cart-btn">Cart (0)</button>
      </div>
    </nav>
  </header>

  <main>
    <!-- HERO: Will become sections/hero.liquid -->
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">Your Headline Here</h1>
        <p class="hero-subtitle">Supporting text that sells the vibe</p>
        <a href="/collection.html" class="btn btn-primary">Shop Now</a>
      </div>
      <div class="hero-media">
        <img src="/assets/images/hero.jpg" alt="Hero image">
      </div>
    </section>

    <!-- FEATURED COLLECTION: Will become sections/featured-collection.liquid -->
    <section class="featured-collection">
      <h2 class="section-title">Featured Products</h2>
      <div class="product-grid">
        <!-- Product cards - use mock data -->
        <article class="product-card">
          <div class="product-image">
            <img src="/assets/images/product-1.jpg" alt="Product Name">
          </div>
          <div class="product-info">
            <h3 class="product-title">Product Name</h3>
            <p class="product-price">$99.00</p>
          </div>
        </article>
        <!-- Repeat for more products -->
      </div>
    </section>
  </main>

  <!-- FOOTER: Will become sections/footer.liquid -->
  <footer class="site-footer">
    <p>&copy; 2024 Store Name</p>
  </footer>

  <script src="/js/preview.js"></script>
</body>
</html>
```

**Example: preview/css/theme.css**
```css
/* ABOUTME: Theme styles using DNA tokens as CSS custom properties */
/* ABOUTME: This file will be split into Shopify's asset structure later */

:root {
  /* Colors - from Theme DNA */
  --color-primary: #0a0a0a;
  --color-secondary: #1a1a2e;
  --color-background: #0d0d0d;
  --color-surface: #161622;
  --color-text: #e8e8e8;
  --color-text-muted: #6b6b7b;
  --color-accent: #00ff88;
  --color-sale: #ff3366;

  /* Typography - from Theme DNA */
  --font-heading: 'Darker Grotesque', sans-serif;
  --font-body: 'Space Grotesk', sans-serif;
  --font-accent: 'IBM Plex Mono', monospace;

  /* Spacing - from Theme DNA */
  --space-unit: 4px;
  --space-xs: calc(var(--space-unit) * 2);
  --space-sm: calc(var(--space-unit) * 4);
  --space-md: calc(var(--space-unit) * 8);
  --space-lg: calc(var(--space-unit) * 16);
  --space-xl: calc(var(--space-unit) * 32);

  /* Borders - from Theme DNA */
  --radius-small: 2px;
  --radius-medium: 4px;
  --radius-large: 8px;
}

/* Base styles */
* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: var(--font-body);
  background: var(--color-background);
  color: var(--color-text);
  line-height: 1.6;
}

/* Component styles following DNA patterns */
.btn {
  font-family: var(--font-heading);
  text-transform: uppercase;
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-small);
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary {
  background: var(--color-accent);
  color: var(--color-primary);
  border: none;
}

.btn-primary:hover {
  box-shadow: 0 0 20px var(--color-accent);
}

/* ... rest of your styles */
```

### Mock Product Data

**preview/data/products.json**
```json
{
  "products": [
    {
      "id": 1,
      "title": "Product Name",
      "price": 9900,
      "price_formatted": "$99.00",
      "compare_at_price": null,
      "image": "/assets/images/product-1.jpg",
      "image_alt": "Product description",
      "vendor": "Brand Name",
      "variants": [
        { "id": 1, "title": "Small", "available": true },
        { "id": 2, "title": "Medium", "available": true },
        { "id": 3, "title": "Large", "available": false }
      ]
    }
  ],
  "collection": {
    "title": "All Products",
    "description": "Browse our collection"
  }
}
```

### Design Approval Checkpoint

**Before converting to Liquid, get explicit approval:**

```
DESIGN APPROVAL CHECKLIST
=========================

□ Homepage hero matches the vibe
□ Product grid demonstrates DNA patterns
□ Typography hierarchy is clear
□ Color usage follows DNA spec
□ Mobile responsive (test at 375px, 768px, 1024px+)
□ Animations/interactions feel right
□ "Same store" test passes across all pages
□ Wildcard element is present

APPROVAL: [ ] Approved to convert to Liquid
          [ ] Needs revisions (list below)

Revisions needed:
-
```

**Only proceed to Liquid conversion after approval.**

---

## HTML to Liquid Conversion

**Once the HTML preview is approved, convert to Shopify's structure.**

### Conversion Mapping

| HTML Preview | Shopify Equivalent |
|--------------|-------------------|
| `preview/index.html` | `templates/index.json` + sections |
| `preview/collection.html` | `templates/collection.json` + sections |
| `preview/product.html` | `templates/product.json` + sections |
| `preview/cart.html` | `templates/cart.json` + sections |
| `preview/css/theme.css` | `assets/theme.css` + `snippets/css-variables.liquid` |
| HTML comments `<!-- SECTION NAME -->` | Individual section files |

### Conversion Steps

**1. Set up Shopify theme structure:**
```bash
shopify theme init [theme-name]
```

**2. Port CSS variables to Liquid settings:**

Create `snippets/css-variables.liquid`:
```liquid
{% raw %}
<style>
  :root {
    --color-primary: {{ settings.color_primary }};
    --color-secondary: {{ settings.color_secondary }};
    --color-background: {{ settings.color_background }};
    --color-surface: {{ settings.color_surface }};
    --color-text: {{ settings.color_text }};
    --color-text-muted: {{ settings.color_text_muted }};
    --color-accent: {{ settings.color_accent }};
    --color-sale: {{ settings.color_sale }};

    --font-heading: {{ settings.type_heading_font.family }}, {{ settings.type_heading_font.fallback_families }};
    --font-body: {{ settings.type_body_font.family }}, {{ settings.type_body_font.fallback_families }};
  }
</style>
{% endraw %}
```

**3. Convert each HTML section to a Liquid section:**

Example - Hero section (`sections/hero.liquid`):
```liquid
{% raw %}
<section class="hero">
  <div class="hero-content">
    <h1 class="hero-title">{{ section.settings.heading }}</h1>
    <p class="hero-subtitle">{{ section.settings.subheading }}</p>
    <a href="{{ section.settings.button_link }}" class="btn btn-primary">
      {{ section.settings.button_text }}
    </a>
  </div>
  {% if section.settings.image != blank %}
  <div class="hero-media">
    <img
      src="{{ section.settings.image | image_url: width: 1200 }}"
      alt="{{ section.settings.image.alt | default: section.settings.heading }}"
      loading="eager"
      width="1200"
      height="800"
    >
  </div>
  {% endif %}
</section>

{% schema %}
{
  "name": "Hero",
  "settings": [
    {
      "type": "text",
      "id": "heading",
      "label": "Heading",
      "default": "Your Headline Here"
    },
    {
      "type": "text",
      "id": "subheading",
      "label": "Subheading",
      "default": "Supporting text that sells the vibe"
    },
    {
      "type": "image_picker",
      "id": "image",
      "label": "Hero image"
    },
    {
      "type": "text",
      "id": "button_text",
      "label": "Button text",
      "default": "Shop Now"
    },
    {
      "type": "url",
      "id": "button_link",
      "label": "Button link"
    }
  ],
  "presets": [
    {
      "name": "Hero"
    }
  ]
}
{% endschema %}
{% endraw %}
```

**4. Convert product loops:**

HTML:
```html
<article class="product-card">
  <img src="/assets/images/product-1.jpg" alt="Product">
  <h3>Product Name</h3>
  <p>$99.00</p>
</article>
```

Liquid:
```liquid
{% raw %}
{% for product in collection.products %}
  <article class="product-card">
    <img
      src="{{ product.featured_image | image_url: width: 600 }}"
      alt="{{ product.featured_image.alt | default: product.title }}"
      loading="lazy"
    >
    <h3>{{ product.title }}</h3>
    <p>{{ product.price | money }}</p>
  </article>
{% endfor %}
{% endraw %}
```

**5. Move styles to assets:**
- Copy `preview/css/theme.css` to `assets/theme.css`
- Replace hardcoded CSS variable values with Liquid settings where needed

### Conversion Checklist

- [ ] All CSS variables ported to `snippets/css-variables.liquid`
- [ ] Each HTML section converted to `sections/*.liquid`
- [ ] Schema added to each section with appropriate settings
- [ ] Static text replaced with Liquid settings or translations
- [ ] Images using Shopify's image_url filter
- [ ] Product loops using Liquid for/endfor
- [ ] Links using Shopify URL filters
- [ ] Styles moved to `assets/`
- [ ] `shopify theme check` passes

---

## Template Composition

**Build templates modularly, always referencing the Theme DNA.**

### Core Templates (Build First)

**1. layout/theme.liquid**
- Global elements: header, footer, CSS variables from DNA
- Meta tags, font loading, base styles
- This is where the DNA gets implemented as CSS custom properties
- Set up the design tokens that everything else uses

**2. Homepage (index.json + sections)**
- **Hero section** - 50% of effort here. This is the store's cover image, social preview, first impression
- Featured collection grid
- Brand story moment
- Social proof / trust signals
- Secondary collections or categories

**3. Collection Page (collection.liquid)**
- Collection header with description
- Filter/sort UI (matches DNA's component patterns)
- Product grid (consistent with DNA's card patterns)
- Pagination style

**4. Product Page (product.liquid)**
- Image gallery (matches photography direction)
- Product info hierarchy
- Variant selectors (styled per DNA)
- Add to cart experience
- Product recommendations

**5. Cart (cart.liquid or cart drawer)**
- Line item display
- Upsell opportunities
- Checkout flow initiation

### Secondary Templates (Add As Needed)

- **Blog**: article.liquid, blog.liquid
- **Pages**: page.liquid, page.about.liquid, page.contact.liquid
- **Customer accounts**: customers/*.liquid
- **Search**: search.liquid
- **404**: 404.liquid (make it memorable)

### Section Development Pattern

For each section:
1. Reference the DNA for colors, typography, spacing
2. Use the component patterns defined in DNA
3. Apply the animation vocabulary consistently
4. **Cohesion check**: "Does this feel like the same store as the other templates?"

---

## Shopify CLI Integration

### Project Setup

```bash
# Initialize new theme from Dawn (then customize heavily)
shopify theme init [theme-name]

# Or start from Dawn specifically
shopify theme init [theme-name] --clone-url https://github.com/Shopify/dawn.git

# For minimal start (more work, more control)
shopify theme init [theme-name] --clone-url https://github.com/Shopify/skeleton-theme.git
```

### Development Workflow

```bash
# Start local development server with hot reload
shopify theme dev --store [your-store.myshopify.com]

# Preview on specific port
shopify theme dev --port 9292

# Open theme editor alongside dev
shopify theme dev --theme-editor-sync
```

### Theme Management

```bash
# List all themes on store
shopify theme list

# Push theme to store (creates new or updates existing)
shopify theme push

# Push to specific theme
shopify theme push --theme [theme-id]

# Pull latest from store (if edited in admin)
shopify theme pull

# Package theme for submission
shopify theme package
```

### Useful Flags

```bash
# Only push specific files
shopify theme push --only templates/*.json sections/*.liquid

# Ignore certain files
shopify theme push --ignore config/settings_data.json

# Development on unpublished theme
shopify theme dev --theme [theme-id]
```

### Recommended Workflow

1. Create development theme: `shopify theme push --unpublished`
2. Develop with: `shopify theme dev --theme [dev-theme-id]`
3. Test on store without affecting live theme
4. When ready: push to live or package for marketplace

---

## Anti-AI-Slop Principles

### Fonts: Kill the Defaults

**AVOID:**
- System UI / -apple-system
- Helvetica Neue
- Assistant (Dawn default)
- Inter, Roboto, Open Sans, Lato
- Any font that screams "I didn't choose this"

**USE INSTEAD:**
- **Display**: Fraunces, Instrument Serif, Clash Display, Bricolage Grotesque, Darker Grotesque, Playfair Display
- **Body**: Outfit, Satoshi, General Sans, Switzer, Manrope, Plus Jakarta Sans
- **Accent/Mono**: JetBrains Mono, IBM Plex Mono, Space Mono, Fira Code (for prices, SKUs)

### Colors: No More Boring Neutrals

**AVOID:**
- Pure black (#000) on pure white (#fff)
- Generic gray (#666, #999, #ccc)
- "Safe" navy blue
- The Dawn palette
- Purple gradients

**USE INSTEAD:**
- Off-blacks with character (#1a1916, #0d1117, #1c1917)
- Tinted backgrounds (#faf9f7, #f5f5f0, #fefdfb)
- Colors derived from your Vibe Discovery reference
- Intentional accent that surprises
- Named palettes with meaning

### Layout: Break the Dawn Grid

**AVOID:**
- 4-column product grids everywhere
- Centered everything
- Predictable section stacking
- Equal padding on everything
- Container widths that match every other Shopify store

**USE INSTEAD:**
- Asymmetric grids (3+1, 2+2 offset)
- Full-bleed moments that break the container
- Varied section rhythms (dense → spacious → dense)
- Intentional whitespace as design element
- Hero sections that own the viewport

### Product Cards: Not Just Thumbnails

**AVOID:**
- Square images with title + price below
- Identical hover states (zoom or swap)
- No personality in typography
- Generic quick-add buttons

**USE INSTEAD:**
- Aspect ratios that match photography direction (4:5 fashion, 1:1 products, 3:4 lifestyle)
- Hover states derived from animation vocabulary
- Price styling that matches brand voice (prominent for value, subtle for luxury)
- Quick-view interactions that feel intentional

### Icons: Ditch the Defaults

**AVOID:**
- Heroicons (too common in Shopify)
- Feather icons
- Generic line icons
- Default Shopify icons

**USE INSTEAD:**
- Phosphor (flexible weights)
- Iconify Solar
- Tabler Icons
- Custom SVGs for key brand moments (cart, search, menu, account)

---

## Marketplace Review Checklist

**For Shopify Theme Store submission. Run through before packaging.**

### Required Templates
- [ ] layout/theme.liquid
- [ ] templates/index.json
- [ ] templates/product.json
- [ ] templates/collection.json
- [ ] templates/cart.json
- [ ] templates/blog.json
- [ ] templates/article.json
- [ ] templates/page.json
- [ ] templates/search.json
- [ ] templates/404.json
- [ ] templates/list-collections.json
- [ ] templates/gift_card.liquid
- [ ] templates/customers/account.json
- [ ] templates/customers/activate_account.json
- [ ] templates/customers/addresses.json
- [ ] templates/customers/login.json
- [ ] templates/customers/order.json
- [ ] templates/customers/register.json
- [ ] templates/customers/reset_password.json

### Performance Requirements
- [ ] Lighthouse performance score 60+ (mobile)
- [ ] No render-blocking resources in head
- [ ] Images lazy-loaded below fold
- [ ] CSS/JS minified in production
- [ ] No excessive DOM size (< 1500 nodes ideal)

### Accessibility Requirements
- [ ] All images have alt text (or decorative role)
- [ ] Color contrast meets WCAG AA (4.5:1 body, 3:1 large text)
- [ ] Keyboard navigation works throughout
- [ ] Focus states visible on all interactive elements
- [ ] Skip-to-content link present
- [ ] Form labels properly associated
- [ ] ARIA landmarks used appropriately

### Theme Editor Experience
- [ ] All sections have schema with settings
- [ ] Settings have sensible defaults
- [ ] Presets provided for key sections
- [ ] Info/paragraph settings explain non-obvious options
- [ ] Settings organized into logical groups
- [ ] No broken/empty states when settings are blank

### Code Quality
- [ ] No hardcoded text (all translatable via locales)
- [ ] No console errors or warnings
- [ ] No deprecated Liquid tags
- [ ] Valid JSON in all template files
- [ ] No inline styles (use CSS)
- [ ] Theme Check passes: `shopify theme check`

### Content Requirements
- [ ] Screenshot assets (desktop + mobile)
- [ ] Theme documentation
- [ ] Demo store with representative content
- [ ] Support contact information

---

## Quality Checklists

### Pre-Build Checklist
- [ ] Brand assets check completed (logo provided or skipped)
- [ ] Vibe Discovery completed (all 7 questions answered)
- [ ] Theme DNA document written
- [ ] Freshness check passed:
  - [ ] Colors derived fresh from logo or reference (not reused)
  - [ ] Fonts are NOT my usual defaults
  - [ ] Collision from Q4 is visible in choices
  - [ ] Wildcard element included

### Per-Template Checklist
- [ ] References Theme DNA for all design decisions
- [ ] Component patterns match DNA spec
- [ ] Animation vocabulary applied consistently
- [ ] Mobile experience considered (not an afterthought)
- [ ] **Same store test**: feels cohesive with other templates

### Final Quality Gates

**Brand Cohesion:**
- [ ] Homepage, collection, product feel like one store
- [ ] Typography consistent across all templates
- [ ] Color usage follows the DNA
- [ ] Animation behavior is predictable/learnable
- [ ] Would pass "screenshot test" - recognizable at a glance

**Visual Distinction:**
- [ ] NOT mistakable for a Dawn clone
- [ ] Wildcard element is present and memorable
- [ ] Photography direction is clear
- [ ] Has at least one "how'd they do that" moment

**Technical:**
- [ ] `shopify theme check` passes
- [ ] Mobile responsive (no horizontal scroll)
- [ ] Performance acceptable (Lighthouse 60+)
- [ ] All states handled (empty cart, no results, sold out, etc.)

---

## Inspiration Starters

### When Stuck on Q2 (Place/Object)

**Spaces:**
Night market in Bangkok | Empty museum at closing | Airport lounge at 4am |
Vintage record store | Hospital waiting room | Casino floor |
Greenhouse in winter | Subway platform | Observatory dome |
Abandoned factory | Luxury yacht interior | 24-hour laundromat |
Library rare books room | Auto body shop | Space station module |
Tokyo arcade | Parisian cafe at dawn | Desert gas station

**Objects:**
1980s synthesizer | Surgical instruments | Vintage luggage |
Racing motorcycle | Antique compass | Industrial loom |
Neon sign | Typewriter | Scientific glassware |
Leather-bound book | Circuit board | Porcelain dishware |
Polaroid camera | Brass telescope | Concrete planter

**Eras/Movements:**
Soviet constructivism | Memphis design | Swiss international |
Art nouveau | Bauhaus | De Stijl |
Googie architecture | Streamline moderne | Brutalism |
Japanese metabolism | Scandinavian modernism | Italian futurism |
1970s earth tones | 1990s cyber | Y2K maximalism

---

## Complete Workflow Summary

```
1. VIBE DISCOVERY
   └── Ask about logo/brand assets (optional)
   └── If logo provided, extract color palette
   └── Answer 7 questions
   └── Synthesize unique direction
   └── Name the vibe

2. THEME DNA
   └── Write full DNA document
   └── Define all tokens
   └── Pass freshness check
   └── This is your source of truth

3. HTML PREVIEW (Design First)
   └── Set up preview/ folder structure
   └── Build index.html (homepage) - 50% on hero
   └── Build collection.html
   └── Build product.html
   └── Build cart.html
   └── Implement all CSS using DNA tokens
   └── Test responsive (375px, 768px, 1024px+)
   └── Run preview server: bun run preview/serve.ts

4. DESIGN APPROVAL ⭐ CHECKPOINT
   └── Review against DNA spec
   └── Verify vibe matches intent
   └── Check all pages feel cohesive
   └── Get explicit approval before proceeding
   └── Document any revisions needed

5. LIQUID CONVERSION (After Approval Only)
   └── shopify theme init [theme-name]
   └── Port CSS variables to snippets/css-variables.liquid
   └── Convert each HTML section to sections/*.liquid
   └── Add schema to each section
   └── Replace static content with Liquid tags
   └── Move styles to assets/

6. POLISH
   └── Per-template checklist
   └── Anti-slop review
   └── Mobile pass
   └── Empty state handling

7. VALIDATE
   └── Quality gates
   └── shopify theme check
   └── Lighthouse audit
   └── Cross-browser test

8. MARKETPLACE (if submitting)
   └── Full marketplace checklist
   └── All required templates
   └── Documentation
   └── shopify theme package
```

---

## The Anti-Convergence Rules

1. **No hex code memory** - Generate colors fresh from the reference, don't recall "my usual palette"
2. **Font rotation required** - Cannot use the same display font in consecutive projects
3. **Collision must show** - If someone can't see BOTH influences from Q4, push harder
4. **Wildcard is mandatory** - Every theme needs one element that doesn't "fit" but makes it unique
5. **Name it** - An unnamed vibe becomes generic. A named vibe has identity.
6. **Same store test** - Every template should feel like it belongs to the same store
7. **Screenshot test** - Should be recognizable at thumbnail size
