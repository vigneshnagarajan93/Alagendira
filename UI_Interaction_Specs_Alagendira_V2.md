# Alagendira Exports V2: "The Thread & The Grid"
**UI Interaction & Motion Handoff Specifications**

This document serves as the absolute source of truth for the UI Designer agent who will be implementing the complete scratch redesign of Alagendira Exports. The target aesthetic is modern, Awwwards-winning, pure white, and incredibly motion-heavy.

## 1. Core Visual Language
- **Palette**: Absolutely strict monochrome. `#FFFFFF` (Background), `#F9F9F9` (Surface), `#111111` (Primary Text), `#888888` (Secondary Text).
- **Typography**: Inter (or similar neo-grotesque sans-serif). Extremely tight tracking (-0.03em) on headlines. Thin weights for massive text, heavy weights for small labels.
- **Glassmorphism**: Severe blur backdrops (`backdrop-filter: blur(40px) saturate(150%)`). Borders should be `rgba(0,0,0,0.05)`.

## 2. Global Mechanics
- **Custom Cursor**: A magnetic, inverted-mix-blend-mode dot that balloons in size when hovering over interactive elements.
- **Smooth Scroll**: Native momentum scrolling disabled; implement Lenis or a similar physical-feeling smooth scroll wrapper.
- **Page Load Sequence**: 
  - Pure white screen.
  - A single black thread (SVG) draws itself across the center.
  - The thread snaps into the "A" of Alagendira.
  - The rest of the site expands outwards via a spring-physics stagger.

## 3. Section Specifications

### A. The V2 Hero: "Web of Light"
- **Visuals**: Utilize `v2_hero_sculpture.png` as a full viewport spanning background.
- **Typography**: The company name should not just fade in. It should **assemble** from scattered XYZ coordinates mapping to an invisible grid on scroll entry.
- **Interaction**: The entire hero container must track the mouse via `useMotionValue` but with extreme clamping and high spring stiffness, simulating heavy physical mass, not light paper.

### B. The Bento Grid: "The Loom"
- **Structure**: A 4x4 CSS grid (or similar asymmetric bento).
- **Masking**: Each card has `overflow: hidden`. On hover, the image inside scales up (`scale: 1.1`) while a dark overlay fades out, but the text elements slide UP from the bottom edge (`translateY: 100% -> 0%`).
- **Assets**: Utilize `v2_certifications_glass.png` for the compliance card.

### C. Scrollytelling: "The Stitch"
- **Structure**: A horizontal scroll segment or a deep-pinned vertical section.
- **Assets**: Transition between `v2_macro_weave.png`, `v2_machinery_abstract.png`, and the previous high-end capabilities imagery.
- **Effect**: As the user scrolls, the images do not crossfade; they wipe via severe clip-path reveals (e.g. `clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%)` springing open over the previous image).

## 4. Implementation Rules for UI Agent
- **DO NOT** use Tailwind CSS. Only pure Vanilla CSS/CSS Modules to maintain strict control over performance.
- Use `framer-motion` for all physics and gestures. Focus on `useSpring` over `ease`.
- All SVGs must be purely mathematical, no unnecessary points.
