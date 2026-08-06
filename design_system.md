# Radha Goyal — Portfolio Design System

Self-contained spec. Every token and component below includes exact values and a code snippet — no other file is needed to implement this.

---

## 1. Concept

**"git log" meets soft editorial.** A developer's portfolio that avoids both the dark-terminal cliché and the generic corporate-clean template. Sections and cards are treated like commits and case studies — numbered, labeled, logged — but rendered in a warm, rounded, colorful visual language. One small handwritten-font accent (a note + arrow near the hero photo) is the only "human, not corporate" touch — keep it rare and deliberate, not scattered throughout.

---

## 2. Design tokens (CSS custom properties)

Drop this block into `:root`:

```css
:root {
  /* Surfaces & text */
  --base: #FAF6EF;        /* page background — warm off-white, never pure white */
  --surface: #FFFFFF;     /* card backgrounds */
  --ink: #15162B;         /* primary text — deep indigo-black, never pure #000 */
  --text-2: #5B5D74;      /* secondary text */
  --text-3: #8A8CA0;      /* muted / metadata text */

  /* Accents — each has ONE fixed job, never reassign */
  --violet: #6C63F0;      /* primary — hero, primary CTAs, category 1 */
  --violet-tint: #EDECFD;
  --lime: #E1E93F;        /* secondary — card headers, category 2 */
  --lime-tint: #FAFBE0;
  --lime-ink: #8B9200;    /* text-safe dark version for labels on lime tint */
  --pink: #F02E93;        /* highlight/links — card headers, category 3 */
  --pink-tint: #FDE7F3;
  --green: #1C9A50;       /* semantic: backend/success */
  --green-tint: #E4F5E8;
  --teal: #0FA3A3;        /* semantic: tools/core-CS */
  --teal-tint: #E3F6F6;

  /* Radius */
  --radius-lg: 28px;   /* hero, page-level blocks */
  --radius-md: 22px;   /* project/video cards */
  --radius-sm: 14px;   /* timeline rows, info cards, list cards */
  --radius-pill: 999px;

  /* Fonts */
  --font-sans: 'IBM Plex Sans', sans-serif;
  --font-mono: 'IBM Plex Mono', monospace;
  --font-hand: 'Caveat', cursive;

  /* Shadows — always soft, never hard-offset */
  --shadow-card: 0 8px 24px rgba(21,22,43,.06);
  --shadow-row: 0 6px 18px rgba(21,22,43,.05);
  --shadow-photo: 0 12px 30px rgba(21,22,43,.18);

  --hairline: 1px solid #EFEBE1;
  --max-width: 1100px;
}
```

Font import (Google Fonts):
```html
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@500;600;700&family=Caveat:wght@600;700&display=swap" rel="stylesheet">
```

---

## 3. Typography rules

| Role | Font | Weight | Size | Notes |
|---|---|---|---|---|
| Hero name (h1) | Plex Sans | 800 | 56px (42px mobile) | letter-spacing -0.02em |
| Section title (h2) | Plex Sans | 800 | 28px | letter-spacing -0.01em |
| Card title (h3) | Plex Sans | 800 | 25px | |
| Body / description | Plex Sans | 400–500 | 14.5px | line-height 1.6 |
| Eyebrow / label / date / tag | Plex Mono | 700 | 12–13px | uppercase, letter-spacing .04em |
| Handwritten accent | Caveat | 700 | 22px | rotate(-4deg) — max one per page |

Mono is the recurring "developer" signature: every label, date, tag, and badge across the whole site uses `--font-mono`. That consistency is what ties the page together — don't swap it for sans anywhere in that role.

---

## 4. Color usage rules

- Card header blocks (hero, project cards) rotate through **violet → lime → pink**, in that order, never randomized.
- Text on a colored fill always uses the matching tint/ink pair (e.g. `--lime-tint` background gets `--lime-ink` text, never black or gray).
- Skill/category chips: languages = violet, frontend = pink, backend = green, platforms/CMS = lime, core-CS/tools = teal. Reuse this exact mapping anywhere skills or tags appear.
- No pure black, no pure white text on tinted surfaces.

---

## 5. Components

### 5.1 Hero
```css
.hero {
  position: relative;
  overflow: hidden;
  background: var(--violet);
  border-radius: var(--radius-lg);
  padding: 56px 44px;
  display: grid;
  grid-template-columns: 1fr 260px;
  gap: 40px;
  align-items: center;
}
.hero-circle {
  position: absolute;
  width: 380px; height: 380px;
  border-radius: 50%;
  background: rgba(255,255,255,.14);
  right: -90px; top: -130px;
}
.pill-tag {
  font-family: var(--font-mono);
  font-size: 12px; font-weight: 600;
  color: #fff;
  background: rgba(255,255,255,.16);
  padding: 6px 12px;
  border-radius: var(--radius-pill);
}
.photo-frame {
  background: #fff;
  border-radius: 20px;
  padding: 6px;
  box-shadow: var(--shadow-photo);
  transform: rotate(-2deg);
}
.photo-frame img {
  width: 100%; height: 270px;
  object-fit: cover;
  border-radius: 15px;
}
```
Content order: mono eyebrow (`whoami`) → h1 name → role line → one-line summary → pill tags → text links row. Mobile: single column, photo moves above text, handwritten note hidden.

The one handwritten touch — a "that's me!" note with a small hand-drawn SVG arrow — sits beside the photo:
```html
<span class="hand" style="position:absolute;left:-110px;top:-6px;transform:rotate(-4deg);
  font-family:var(--font-hand);font-weight:700;font-size:22px;color:#fff;">that's<br>me!</span>
<svg viewBox="0 0 70 40" style="width:70px;position:absolute;left:-22px;top:34px;transform:rotate(8deg);">
  <path d="M4 4C20 4 34 14 40 30" stroke="#fff" stroke-width="2.5" stroke-linecap="round" fill="none"/>
  <path d="M30 26L40 32L37 20" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg>
```

### 5.2 Case-study project cards
```css
.case-card {
  border-radius: var(--radius-md);
  overflow: hidden;
  background: var(--surface);
  box-shadow: var(--shadow-card);
}
.case-head {
  position: relative;
  padding: 22px;
  height: 140px;
  display: flex; flex-direction: column; justify-content: space-between;
  overflow: hidden;
  /* background: one of var(--violet) / var(--lime) / var(--pink), rotating per card */
}
.case-head-circle {
  position: absolute;
  width: 180px; height: 180px;
  border-radius: 50%;
  background: rgba(255,255,255,.18);
  right: -50px; top: 16px;
}
.case-badge {
  font-family: var(--font-mono);
  font-size: 12px; font-weight: 700;
  padding: 5px 12px;
  border-radius: var(--radius-pill);
  width: fit-content;
  /* on violet/pink: bg rgba(255,255,255,.22), color #fff */
  /* on lime: bg rgba(21,22,43,.12), color var(--ink) */
}
.case-label { /* "Case study ↗" */
  font-family: var(--font-mono);
  font-size: 12px; font-weight: 700;
  text-transform: uppercase;
  align-self: flex-end;
}
.case-body { padding: 26px; }
.case-eyebrow {
  font-family: var(--font-mono);
  font-size: 12px; font-weight: 700;
  text-transform: uppercase;
  /* color matches the head color: violet/lime-ink/pink */
}
.case-body h3 { font-size: 25px; font-weight: 800; margin: 0 0 10px; }
.case-body p { font-size: 14.5px; color: var(--text-2); line-height: 1.6; }
.case-link {
  font-size: 14px; font-weight: 700; color: var(--ink);
  display: inline-flex; align-items: center; gap: 5px;
}
```
Structure: numbered badge (top-left) + "Case study ↗" (top-right) on a colored header with a bleeding decorative circle → white body with category eyebrow, bold title, 2-line description, arrow link.

### 5.3 Experience timeline
```css
.timeline-row {
  display: grid;
  grid-template-columns: 24px 1fr;
  gap: 18px;
  background: var(--surface);
  border-radius: var(--radius-sm);
  padding: 22px 24px;
  box-shadow: var(--shadow-row);
}
.timeline-dot { width: 14px; height: 14px; border-radius: 50%; margin-top: 4px; }
.timeline-date { font-family: var(--font-mono); font-size: 12px; font-weight: 700; color: var(--text-2); text-transform: uppercase; }
.timeline-title { font-size: 18px; font-weight: 700; margin: 4px 0 2px; }
.timeline-company { font-size: 13.5px; font-weight: 600; }
.timeline-desc { font-size: 14.5px; color: var(--text-2); line-height: 1.6; }
```
Each entry is a standalone soft card, not a connected line. Dot color rotates through violet/pink/lime-ink/teal per entry for rhythm.

### 5.4 Info cards (education, achievements)
```css
.info-card {
  background: var(--surface);
  border-radius: var(--radius-sm);
  padding: 22px;
  box-shadow: var(--shadow-row);
}
.info-card .tag-label {
  font-family: var(--font-mono); font-size: 12px; font-weight: 700;
  text-transform: uppercase; color: var(--violet); margin-bottom: 8px;
}
.info-card h3 { font-size: 17px; font-weight: 700; }
.info-card p { font-size: 13.5px; color: var(--text-3); }
```

### 5.5 Skill pills
```css
.skill-pill {
  font-family: var(--font-mono);
  font-size: 12.5px; font-weight: 700;
  padding: 8px 14px;
  border-radius: var(--radius-pill);
  /* background: category tint, color: category ink — see section 4 */
}
```
Grouped under a mono uppercase category label, wrapped in a flex row with 10px gaps.

### 5.6 List rows (certifications, languages)
```css
.list-card { background: var(--surface); border-radius: var(--radius-sm); box-shadow: var(--shadow-row); overflow: hidden; }
.list-row { display: flex; align-items: center; gap: 14px; padding: 16px 22px; }
.list-row + .list-row { border-top: var(--hairline); }
.list-row-dot { width: 9px; height: 9px; border-radius: 50%; }
.list-row-sub { font-family: var(--font-mono); font-size: 13px; color: var(--text-3); margin-left: auto; }
```

### 5.7 Recommendation / quote cards
```css
.rec-card {
  background: var(--surface);
  border-radius: var(--radius-sm);
  padding: 24px;
  min-width: 300px; max-width: 320px;
  box-shadow: var(--shadow-row);
  border-left: 4px solid var(--pink); /* the one intentional hard border — a quote accent */
}
.rec-quote { font-size: 13.5px; color: var(--text-2); line-height: 1.65; margin-top: 18px; }
```
Horizontal-scroll row on desktop.

### 5.8 Section header pattern (repeat everywhere)
```css
.eyebrow {
  font-family: var(--font-mono); font-size: 13px; font-weight: 700;
  text-transform: uppercase; letter-spacing: .04em; color: var(--text-2);
}
.section-title { font-size: 28px; font-weight: 800; letter-spacing: -0.01em; }
```
Eyebrow text pattern: `// section-name` (e.g. `// projects`, `// experience`) — the double-slash is a deliberate code-comment reference and should be literal text, not decorative.

### 5.9 Footer
```css
.footer {
  border-top: var(--hairline);
  padding-top: 32px;
  display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;
}
```

---

## 6. Spacing & layout

- Page container: `max-width: 1100px`, centered, `padding: 32px 24px 80px` (desktop) / `20px 18px 60px` (mobile).
- Vertical space between major sections: **64px**, achieved through margin/spacing only.
- Card grids: `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))`, `gap: 22px`.

---

## 7. Interaction & motion

- Link hover: underline + full opacity.
- No load animations, no scroll-triggered reveals. The design communicates through color and shape, not motion — keep it calm.

---

## 8. Explicitly avoid

- Pure black borders or hard offset/drop shadows (a neo-brutalist pass was tried and rejected).
- Straight `<hr>` dividers or decorative squiggle lines between sections — rejected; use spacing only.
- More than one handwritten-font (Caveat) element on the page.
- The generic AI-portfolio defaults: warm-cream + serif + terracotta; near-black background + single neon accent; dense broadsheet hairline columns. This system deliberately sits outside all three.

---

## 9. Responsive

At `max-width: 720px`:
- Hero collapses to a single column, photo moves above text, padding drops to `40px 26px`, h1 to 42px.
- Handwritten note near photo is hidden (`display: none`) — it only works with room to breathe.
- Photo height reduces to 220px.
- Page container padding drops to `20px 18px 60px`.