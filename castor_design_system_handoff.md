# Design System: CASTOR Boutique Wellness

## Visual Identity & Brand Personality
The CASTOR brand embodies "Boutique Wellness meets Vibrant Storytelling." The aesthetic is premium, organic, and trustworthy, utilizing a high-contrast palette of deep forest greens and soft creams to evoke a sense of luxury and natural efficacy.

## Color Palette

### Primary Colors
- **Forest Green:** `#1A2E1A` (Used for headers, footers, primary buttons, and deep background sections)
- **Cream:** `#FDFBF7` (The primary background color for a clean, organic feel)

### Secondary & Accent Colors
- **Golden Brown:** `#A67C52` (Used for countdown timers, star ratings, and subtle highlights)
- **Soft Sage:** `#E8EDE8` (Used for secondary card backgrounds and subtle borders)
- **Pure White:** `#FFFFFF` (Used for primary CTA text and hero typography)

---

## Typography

### Headings (Serif)
- **Font Family:** Premium Serif (e.g., *Cormorant Garamond* or *Playfair Display*)
- **Usage:** Used for high-impact headlines like "Elevate Your Ritual" and "Soothing, Bottled."
- **Style:** Elegant, high-contrast, often italicized for emphasis.

### Body & UI (Sans-Serif)
- **Font Family:** Clean Sans-Serif (e.g., *Inter* or *Montserrat*)
- **Usage:** Used for navigation links, body copy, bundle details, and button labels.
- **Style:** Highly legible, generous tracking for a premium feel.

---

## Components & UI Elements

### Global Styles
- **Borders:** Subtle 1px borders in Forest Green or Soft Sage.
- **Corner Radius:** `12px` to `16px` for cards and image containers; fully rounded (`pill`) for primary buttons.
- **Buttons:**
  - **Primary:** Forest Green background with White text. Hover state: Slight opacity shift or darkening.
  - **Secondary:** Cream background with Forest Green border.

### Specific Sections

#### 1. Limited Sale Banner
- **Background:** Cream
- **Typography:** Golden Brown serif for the timer; Forest Green sans-serif for the announcement.
- **Element:** Digital countdown timer (`00:00:00`).

#### 2. Hero Section
- **Background:** Full-width video background (Nature/Wellness theme).
- **Overlay:** Dark semi-transparent gradient for text legibility.
- **Content:** Centered White serif typography with a Star Rating.

#### 3. Featured On Marquee
- **Logos:** Monochromatic (Forest Green or Black) logos of Sephora, Ulta, Goop, etc.
- **Layout:** Horizontal row with generous padding.

#### 4. Product Bundle Cards ("Choose Your Supply")
- **Layout:** 3-column grid.
- **Active State:** Forest Green glowing border with a checkmark icon.
- **Pricing:** Bold sans-serif with "Best Value" or "Most Popular" badges.

#### 5. Customer Reviews ("Real Results")
- **Imagery:** Hyper-realistic portrait photos of customers holding the product.
- **Quote Style:** Italicized serif text with 5-star ratings.

---

## Content & Marketing Copy

### Hero
- **Headline:** "Elevate Your Ritual With Organic Castor Oil Roll-on"
- **Subtext:** "4.9 • 12,000+ verified reviews"
- **CTA:** "Are you ready to be soothed?"

### Storytelling
- **Headline:** "Soothing, Bottled"
- **Body:** "Experience the cooling relief of targeted application."

### Mini-Buy Section
- **Headline:** "Ready to find your soothe?"
- **CTA:** "Shop Now" (Scrolls back to bundle selection).

---

## Technical Handoff Notes
- **Platform:** Optimized for Shopify Liquid/Online Store 2.0.
- **Responsive Design:** Single-column scroll for mobile; multi-column grid for desktop.
- **Assets:** Use `{{DATA:IMAGE:IMAGE_25}}` for icons and brand marks.
