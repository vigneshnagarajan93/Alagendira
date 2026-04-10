# 4D & Cinematic Visual Specs for Alagendira UI

## Overview
We now have a suite of high-fidelity, hyper-realistic macro visuals. The objective is to stop relying on a single hero image and truly distribute these assets across the app. We want "4D" interactions—meaning movement over not just X and Y on scroll, but Z-depth, perspective rotation on mouse move, and dynamic blur variables (time + depth).

## The Asset Library
We have generated the following core elements:
1. **Hero Intro (`organic_cotton_fields.png`)**: Extreme wide view of the source material.
2. **Precision Stitching (`garment_stitching_macro_1775792257142.png`)**: Extreme macro, to be used in parallax transition blocks.
3. **High-Tech Infrastructure (`sustainable_yarn_spools_1775792240523.png`)**: Depth-of-field heavy image for the sticky scrollytelling section.
4. **Final Product (`premium_knitwear_1775792227695.png`)**: Used in the Bento Grid for circular knitwear.
5. **Factory Floor (`factory_interior.png`)**: Secondary wide shot.

## 1. Micro-Parallax Constraints (The "Float" Effect)
Whenever an image is inside a Bento Box or a full-width container, it must never be static.
- **Hook**: Use `useScroll` combined with `useTransform`.
- **Logic**: Map `scrollYProgress` so the image translates vertically (e.g., `-5%` to `5%` of its container) as the user scrolls past it.
- **Scale**: The image should be scaled to `1.1` to prevent clipping when it moves laterally or vertically.

## 2. 4D Effects (Perspective & Rotation)
In the **Bento Grid**, the cards shouldn't just scale up on hover. We need a 4D magnetic feel.
- **CSS Perspective**: The container of the Bento Grid must have `perspective: 1200px`.
- **Mouse Tracking**: Use `onMouseMove` to calculate the pointer's distance from the center of the card.
- **Framer Motion Action**: Map the `X` pointer offset to a `rotateY` transform (e.g., `-5deg` to `5deg`), and the `Y` offset to `rotateX` (e.g., `5deg` to `-5deg`). 
- **Result**: The cards tilt and "look" at the cursor. Pair this with a harsh glare/reflection overlay that moves with the mouse to sell the physical 4D glass effect.

## 3. Advanced Reveal Mechanics
Drop the simple "fade up." Use complex stagged reveals for typography.
- **Clip-Path Reveals**: Text shouldn't just fade. It should slide up from behind an invisible mask. 
  - Wrap text in an `overflow: hidden` block.
  - Animate the `<motion.span>` from `y: '100%'` to `y: 0` with a very strong spring (e.g., `bounce: 0`).
- **Image Unveiling**: When scrolling to a new massive section (like the stitching macro), the image should start with a heavy blur or high contrast and slowly resolve into clarity as it hits the center of the viewport (`filter: blur(20px)` -> `blur(0px)`).

## 4. The "Velocity" Blur (Optional 4D Polish)
Use `useVelocity(scrollY)` to detect how fast the user is scrolling. If the velocity is extremely high, map that value to a `skew` or `blur` on the typography. When they stop, it snaps back to pristine clarity. This adds extreme tactile physical weight to the scrollbar itself.

---
> [!IMPORTANT]
> **To the UI Designer Agent:** 
> When you implement this, you MUST NOT use Tailwind. Use vanilla CSS alongside Framer Motion. Ensure the `perspective` rule is applied correctly or the 4D rotations will look flat and sheared. Rely heavily on the newly generated assets.
