# AcademicPro India — Design System & UI Specifications

## 1. Palette Tokens
- **Primary Navy**: `#071E46` (Authority, trust, heritage, navbar, headings)
- **Secondary Navy**: `#102F60` (Surface elevation, card borders, dark accents)
- **Academic Gold**: `#D6A52B` (Prestige, highlights, CTAs, stars)
- **Light Background**: `#F5F7FB` (Calm, breathable editorial canvas)
- **Card Background**: `#FFFFFF` (Pure white elevated cards)
- **Primary Text**: `#17243A` (High-contrast charcoal blue text, WCAG AAA)
- **Accent Red**: `#C83232` (Revisions requested, urgency)
- **Accent Green**: `#15803D` (Completed, paid, verified)

## 2. Typography
- **Headings**: `Playfair Display` (Serif) — imparts university pedigree and dignity.
- **Body & Controls**: `Inter` (Sans-Serif) — clean readability at all DPIs.

## 3. Concentric Nested Border Radius Rule
$$R_{\text{inner}} = R_{\text{outer}} - \text{padding}$$

- Cards: Outer radius `24px` (`rounded-3xl`) with `p-4` (`16px`) -> Inner elements use `8px` (`rounded-lg`).
- Controls: Outer radius `16px` (`rounded-2xl`) with `p-2` (`8px`) -> Inner buttons use `8px` (`rounded-lg`).

## 4. Interaction Physics
- **Zero Generic Hover Effects**: Never use `translateY(-1px/-2px)` or hover scale. Interactions use subtle background surface color changes and delicate border luminescence.
- **Mobile Touch Discipline**: Hit targets minimum $44\times 44\text{px}$.
- **Solid Sticky Headers**: 100% opaque `#071E46` with 1px border `border-white/10`.
