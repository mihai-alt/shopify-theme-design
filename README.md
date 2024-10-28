# Shopify Theme Design

A Claude Code skill for creating distinctive, marketplace-quality Shopify themes.

## What This Does

This skill guides you through building Shopify themes that:
- Look unique (not another Dawn clone)
- Have strong brand cohesion across all pages
- Meet marketplace submission requirements
- Avoid generic AI-generated aesthetics

## The Approach

### 1. Vibe Discovery
Answer 7 questions to generate a unique aesthetic direction:
- Store type
- Real-world reference (place or object)
- Target emotion
- Two unexpected influences to collide
- What to never be mistaken for
- Customization level
- Tech stack

### 2. Theme DNA
Before touching any templates, codify the vibe into a formal design system:
- Color tokens with reasoning
- Typography choices
- Spacing and density
- Component patterns
- Animation vocabulary
- Photography direction

### 3. HTML Preview (Design First)
Build the design as static HTML before touching Liquid:
- Create `preview/` folder with HTML mockups
- Implement styles using CSS variables from DNA
- Preview in browser with simple Bun server
- Iterate fast without Shopify complexity

### 4. Design Approval
Get explicit approval before converting to Liquid:
- Review all pages against DNA spec
- Verify brand cohesion across templates
- Check responsive behavior
- Document any needed revisions

### 5. Liquid Conversion
Only after approval, convert to Shopify:
- Port CSS variables to Liquid settings
- Convert HTML sections to `sections/*.liquid`
- Add schema for theme editor
- Replace static content with Liquid tags

### 6. Template Composition
Build out remaining templates modularly:
1. Layout (DNA as CSS variables)
2. Homepage (50% effort on hero)
3. Collection page
4. Product page
5. Cart
6. Secondary templates as needed

## Installation

Add to your Claude Code plugins:

```bash
# Clone to your plugins directory
cd ~/.claude/plugins/local
git clone https://github.com/[your-username]/shopify-theme-design.git
```

Or reference directly in your Claude settings.

## Usage

Invoke the skill when starting a Shopify theme project:

```
/shopify-theme-design
```

Or let it trigger automatically when you mention building a Shopify theme.

## Features

- **Vibe Discovery Process** - Generates unique aesthetic direction every time
- **Theme DNA Document** - Ensures brand cohesion across all templates
- **HTML Preview Workflow** - Build and approve design before touching Liquid
- **Anti-AI-Slop Principles** - Specific guidance on what to avoid and alternatives
- **HTML to Liquid Conversion** - Clear mapping and conversion guide
- **Shopify CLI Integration** - Commands for scaffolding, development, and deployment
- **Marketplace Checklist** - Everything needed for Theme Store submission

## Philosophy

Every Shopify theme should be unmistakable. This skill actively fights against:
- The Dawn-clone aesthetic
- Stock photo energy
- Feature bloat
- "That's clearly Shopify" tells

Instead, it pushes for:
- Design derived from real-world references
- Intentional collisions of unexpected influences
- Wildcard elements that surprise
- Strong cohesion over individual page optimization

## License

MIT
