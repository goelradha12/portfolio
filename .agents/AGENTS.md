# Portfolio Project Rules

## Design System Authority

`DESIGN_SYSTEM.md` in the project root is the single source of truth for all UI and UX decisions.

Before implementing any component, page, or layout:

1. Read `DESIGN_SYSTEM.md` completely.
2. Follow every design token, component specification, spacing rule, typography rule, color mapping, and interaction guideline exactly.
3. Do not invent new colors, font sizes, spacing values, shadows, border radii, or component styles unless they are explicitly defined in the design system.
4. Reuse existing components and visual patterns whenever possible.
5. Every new component should feel like it was designed by the same person who created the existing portfolio.

### Strict Rules

- The design system has higher priority than the agent's own design preferences.
- Never replace the existing visual language with generic Tailwind, Material Design, shadcn/ui, Apple, or other design systems.
- Never redesign existing components unless explicitly asked.
- Do not introduce new accent colors, gradients, animations, icons, or decorative elements that are not part of the design system.
- Preserve the portfolio's identity:
  - "git log meets soft editorial"
  - warm off-white backgrounds (`--base: #FAF6EF`)
  - rounded cards (`--radius-lg/md/sm`)
  - IBM Plex Sans + IBM Plex Mono
  - one handwritten accent only (Caveat)
  - colorful but restrained (violet → lime → pink rotation)
  - calm interface with minimal motion

### Before every implementation, verify:

- ✓ Colors match design tokens
- ✓ Typography uses correct font/weight/size
- ✓ Spacing follows the system (64px between sections, etc.)
- ✓ Grid uses `repeat(auto-fit, minmax(300px, 1fr))` with 22px gap
- ✓ Card styles match spec (radius, shadow, padding)
- ✓ Responsive behavior follows the 720px breakpoint rules
- ✓ Component hierarchy is preserved
- ✓ Interaction rules are followed (no scroll animations, no load animations)

If anything conflicts with `DESIGN_SYSTEM.md`, always follow the design system.
If a requested component is not documented, derive it from the existing design language.
After implementing a feature, perform a design consistency review.
