# OPSWAT Brand Guide for the Phishing Motion Video

> Project reference for Codex and human contributors.
>
> Source of truth: [OPSWAT Brand Hub](https://www.opswat.com/brand)
> and its official [Colors](https://www.opswat.com/brand/colors),
> [Fonts](https://www.opswat.com/brand/fonts),
> [Logos](https://www.opswat.com/brand/logos), and
> [Narrative](https://www.opswat.com/brand/narrative) sections.
>
> Last verified: 2026-08-26. If this document conflicts with the current
> OPSWAT Brand Hub or supplied official assets, the Brand Hub and official
> assets take precedence.

## 1. How Codex Must Use This Guide

When creating or modifying this Remotion project:

1. Read this file before making visual, copy, typography, logo, or motion decisions.
2. Use the project tokens in Section 3 rather than inventing colors.
3. Use official OPSWAT logo files only. Never redraw or recreate the logo.
4. Treat Simplon Norm as the primary typeface and Roboto as the approved fallback.
5. Use accent colors sparingly. Across a frame, accents should occupy less than 5% of the layout.
6. Do not create tints by changing opacity or transparency. Use an approved named shade instead.
7. Maintain readable contrast and validate important text against WCAG 2.1.
8. If a requested design conflicts with these rules, explain the conflict before implementing it.

## 2. Brand Character

The visual and verbal character should feel:

- Clean, modern, and professional
- Bold and confident without being sensational
- Technically credible and precise
- Protective, vigilant, and focused on critical infrastructure
- Clear enough for a broad professional audience

For this employee-awareness video, communicate risk calmly. Avoid fear-heavy imagery,
hacker clichés, excessive glitch effects, alarmist copy, and decorative complexity.

## 3. Project Color Tokens

The following tokens are selected from OPSWAT's official named shades for this
1920 × 1080 cybersecurity motion graphic.

```js
export const OPSWAT_COLORS = {
  // Core backgrounds and surfaces
  midnight: '#050F22',       // Blue 1200 / Midnight
  navy: '#0D2654',           // Blue 1000 / Navy
  neutral1200: '#0C121D',
  neutral1000: '#172234',
  neutral900: '#24324B',
  neutral800: '#344565',

  // Primary brand blue
  blue: '#1D6BFC',           // Blue 700 / Blue
  blueLight: '#77A6FD',      // Blue 400
  bluePale: '#E8F0FF',       // Blue 100

  // Technology accent
  teal: '#02E9F5',           // Teal 600 / Teal
  tealDark: '#018288',       // Teal 900
  tealPale: '#E8FEFF',       // Teal 100

  // Security states
  danger: '#FF003D',         // Red 700 / Red
  warning: '#FF6B00',        // Orange 700 / Orange
  success: '#00FFB2',        // Green 600 / Green
  caution: '#FFD600',        // Yellow 600 / Yellow

  // Text and neutral content
  white: '#FFFFFF',
  neutral500: '#A9B2C4',
  neutral300: '#DEE0E4',
  neutral100: '#F8F9F9',
  black: '#000000',
};
```

### Color roles for this video

| Role | Token | Usage |
| --- | --- | --- |
| Main background | `midnight` | Default canvas background |
| Secondary background | `navy` | Large panels and scene divisions |
| Cards and UI surfaces | `neutral1000`, `neutral900` | Email, browser, and information cards |
| Primary action | `blue` | Links, active states, and directed movement |
| Technology emphasis | `teal` | Data paths, scanning, and technical highlights |
| Warning | `warning` | Suspicious behavior and urgent requests |
| Danger | `danger` | Credential theft and confirmed compromise |
| Safe outcome | `success` | Verified and protected states |
| Main text | `white`, `neutral100` | Headlines and important information on dark backgrounds |
| Secondary text | `neutral500`, `neutral300` | Supporting labels and captions where contrast allows |

### Color constraints

- Build most of each composition from blues, neutrals, black, and white.
- Keep teal, green, red, orange, and yellow accents collectively below 5% of a frame.
- Do not use large fields of accent color.
- Do not create lighter colors using opacity. Choose an official lighter shade.
- Reserve blue for actions and links; avoid blue for static headline text.
- Avoid purple, orange, yellow, and teal for body text.
- Do not rely on color alone to communicate safe, suspicious, or dangerous states.

## 4. Typography

### Typeface hierarchy

1. **Simplon Norm** is the primary OPSWAT typeface.
2. Use **Simplon Norm Bold** for short, large impact statements.
3. Use **Simplon Norm Regular** for longer headlines and general copy.
4. Use **Simplon Mono** only for numbers and only sparingly.
5. Use **Roboto** when Simplon is unavailable or when a system-compatible fallback is required.

Recommended CSS stack:

```css
font-family: 'Simplon Norm', 'Roboto', Arial, sans-serif;
```

Do not bundle Simplon font files unless the project has properly licensed,
officially supplied files. Until then, use Roboto during development.

### Motion-video typography

- Large impact headline: 72–104 px, Bold, approximately 100% line height.
- Scene heading: 48–64 px, Bold or Regular depending on length.
- Body/on-screen explanation: 30–40 px, Regular, 130–145% line height.
- Captions: 34–40 px at 1080p, with a high-contrast background treatment.
- Labels and UI details: minimum 24 px when they must be read by the learner.
- Keep major impact statements to roughly 3–5 words.
- Use sentence case and matching punctuation.
- Avoid Simplon Bold at small sizes.
- Limit a frame to no more than five combinations of size, weight, and color.
- Avoid underlining except where platform conventions make it necessary.

## 5. Logo Usage

- Use the primary OPSWAT logo with tagline whenever practical, especially on its first appearance.
- After the primary appearance, the logo without the tagline may be used.
- Use the standalone brand mark only where the full wordmark cannot remain legible.
- Use only official supplied logo artwork and approved color combinations.
- Select RGB assets for screen/video work.
- Give the logo optimal clear space equal to the height of the `O` in OPSWAT.
- In constrained layouts, never reduce clear space below 50% of the `O` height.
- Prefer a simple, high-contrast background behind the logo.

Never:

- Remove or move the dot after OPSWAT.
- Recolor the logo or create a new color combination.
- Crop, rotate, stretch, warp, or distort it.
- Add outlines, shadows, gradients, photographic fills, or other effects.
- Place it over a busy background.
- Enlarge a low-resolution JPEG or PNG.

For animation, the logo may fade, translate, or scale uniformly as one intact
asset. Do not animate or rearrange its internal parts.

## 6. Composition and Motion Direction

### Frame composition

- Format: 1920 × 1080, 30 fps.
- Keep essential content inside a 120 px safe area.
- Prefer strong grids, generous negative space, and clear alignment.
- Use dark blue and neutral backgrounds with white content.
- Keep one primary communication goal per shot.
- Limit concurrent visual elements so office employees can follow the story quickly.

### Motion behavior

- Use purposeful motion to explain cause and effect.
- Prefer restrained fades, slides, masks, path animations, and gentle scale changes.
- Use smooth easing and avoid excessive bounce.
- Use teal or blue paths for normal data movement.
- Transition to orange or red only when an action becomes suspicious or compromised.
- Avoid rapid flashing, aggressive camera shake, and decorative glitch effects.
- Use consistent transition timing throughout the video.
- Preserve logo geometry and typography legibility at every frame.

Suggested timing defaults:

```js
export const MOTION = {
  quick: 8,       // frames: small UI response
  standard: 15,   // frames: common entrance/exit
  deliberate: 24, // frames: major reveal or transformation
};
```

These timings are project recommendations, not official OPSWAT brand tokens.

## 7. Voice and Messaging

Use a professional but conversational voice:

- Explain the threat directly and accurately.
- Prefer short sentences and active voice.
- Use familiar workplace examples.
- Emphasize practical actions learners can take.
- Avoid jargon when a plain-language equivalent exists.
- Avoid shame, blame, panic, or exaggerated claims.
- Write `OPSWAT` in uppercase.
- Preserve official product and technology capitalization.

Relevant approved brand language includes:

- `Protecting the World's Critical Infrastructure`
- `Trust no file. Trust no device.™`

Do not add a trademark symbol to arbitrary phrases or invent OPSWAT claims.

## 8. Accessibility

- Target WCAG 2.1 AA at minimum for all readable video text.
- Prefer AAA contrast when practical, following OPSWAT's accessibility direction.
- Never encode status using color alone; pair it with an icon, label, or shape.
- Keep captions enabled by default in the preview composition.
- Avoid flashes or abrupt luminance changes.
- Leave captions on screen long enough to read comfortably.
- Check text contrast against the actual animated background, not only a static frame.

## 9. Asset Organization

Store only approved assets in these locations:

```text
public/
├── brand/
│   ├── logos/
│   └── fonts/
├── audio/
├── icons/
└── images/
```

Recommended filenames:

```text
public/brand/logos/opswat-primary-tagline.svg
public/brand/logos/opswat-secondary.svg
public/brand/fonts/SimplonNorm-Regular.woff2
public/brand/fonts/SimplonNorm-Bold.woff2
```

Do not assume those assets exist. Codex must check before referencing them and
must use a temporary text placeholder if an official asset is missing.

## 10. Pre-render Review

Before final rendering, verify:

- [ ] Only approved color tokens are used.
- [ ] Accent colors occupy less than 5% of each frame.
- [ ] No unofficial tints or transparent color variants were created.
- [ ] Simplon or the approved Roboto fallback is used.
- [ ] Text is readable at 1920 × 1080 and passes contrast checks.
- [ ] Status is communicated with more than color alone.
- [ ] The logo is an official file and remains unmodified.
- [ ] Logo clear space and contrast are sufficient.
- [ ] Motion is restrained, consistent, and instructional.
- [ ] Captions match the final narration.
- [ ] The final frame uses an approved logo treatment and reporting call to action.

## 11. Implementation Priority

When requirements compete, use this order:

1. Accuracy and learner comprehension
2. Accessibility and legibility
3. Official OPSWAT brand rules
4. Approved project storyboard and timing
5. Decorative visual treatment

