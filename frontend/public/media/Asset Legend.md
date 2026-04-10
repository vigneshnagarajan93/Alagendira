# Asset Legend - Alagendira Exports Visual Assets

This document contains the details and prompts used for the generated imagery, illustrations, and textural assets for the white-themed Alagendira Exports project.

## Photography

### 1. Organic Cotton Fields
* **File:** `organic_cotton_fields.png`
* **Style:** High resolution photography, pristine, clean, modern minimalist, white theme, soft natural lighting, zero clutter.
* **Prompt:** "High resolution photography of GOTS-certified organic cotton fields at sunrise. It should have a pristine, clean, and modern minimalist aesthetic with a dominant white theme, soft natural lighting, and zero clutter."

### 2. Factory Interior
* **File:** `factory_interior.png`
* **Style:** Modern minimalist garment factory, bright white lighting, clean workspace.
* **Prompt:** "High resolution photography of a modern minimalist garment factory interior. Featuring rows of advanced knitting machines, exceptionally clean workspace, bright white lighting, with solar panels visible through skylights or windows. Dominant white and light grey theme."

### 3. White Garment Texture
* **File:** `white_garment_texture.png`
* **Style:** Macro photography, clean, cohesive, background texture.
* **Prompt:** "Macro photography of a premium white knitted garment fabric. It shows a subtle fabric weave texture that is cohesive and evenly lit. A clean, bright white and soft aesthetic suitable for a background texture."

## SVG Illustrations

### Certificate Icons
Custom minimal line-art icons built specifically for a clean white theme. They use `currentColor` and a delicate stroke-width (`1.5px`) so they blend organically into the UI while keeping the modern, lightweight aesthetic.

* **Organic (`organic.svg`):** A minimalist leaf growing from a seed, representing natural and organic materials.
* **Solar Energy (`solar.svg`):** A sleek sun symbol, highlighting Alagendira's commitment to renewable energy and sustainable factory operations.
* **Fair Trade (`fair_trade.svg`):** A handshake in geometric strokes, emphasizing fair wages and transparent partnerships.

## Texture Design

### Fabric Weave Noise Map
* **File:** `fabric_weave.svg`
* **Implementation:** This is an SVG-based noise `<filter>` mixed with a fine CSS-friendly path pattern. It is designed to be applied as an absolute or fixed background overlay:
  ```css
  .tactile-overlay {
      background-image: url('textures/fabric_weave.svg');
      opacity: 0.4;
      pointer-events: none;
  }
  ```
* **Effect:** It adds a subtle "tactile" and physical feel to a pure white digital screen without breaking the minimalist aesthetic, mimicking the physical output of Alagendira.
