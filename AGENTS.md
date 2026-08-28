# Project Instructions

## Remotion Agent Skills

This project contains Remotion skills under `.agents/skills`.

For every Remotion task:

1. Inspect the available Remotion skills before implementing.
2. Read `.agents/skills/remotion-best-practices/SKILL.md`.
3. Read every task-specific skill that applies.
4. Follow the selected skill instructions throughout implementation and validation.
5. State which Remotion skills are being used before making changes.

Task routing:

- Creating compositions or scenes:
  `remotion-create` and `remotion-markup`
- Animation, layout, timing, typography, fonts, audio, and media:
  `remotion-markup`
- Captions and subtitles:
  `remotion-captions`
- Starting or checking the preview:
  `remotion-studio`
- Rendering videos or stills:
  `remotion-render`
- Media inspection and processing:
  `remotion-multimedia`
- Current Remotion API questions:
  `remotion-docs`
- Studio-editable properties:
  `remotion-interactivity`
- Dependency and Remotion upgrades:
  `remotion-upgrade`

Also read `OPSWAT_BRAND_GUIDE.md` before making any visual or messaging
decision.

If multiple skills apply, use the smallest relevant combination.
Do not load unrelated skills.

## Project

This repository contains a OPSWAT-branded
motion graphic video built with Remotion, React, JavaScript, and JSX.

## Required references

Before creating or modifying any visual component, animation, text,
caption, logo treatment, or theme:

1. Read `./OPSWAT_BRAND_GUIDE.md` completely.
2. Follow its color, typography, logo, accessibility, voice, and motion rules.
3. Treat the official OPSWAT Brand Hub and official supplied assets as the ultimate source of truth.
4. If a request conflicts with the brand guide, identify the conflict before implementing it.

## Technical requirements

- Use JavaScript and JSX only.
- Do not create TypeScript files.
- Use `.jsx` for React components and `.js` for utilities.
- Use Remotion for video animation.
- Render at 1920 × 1080 and 30 fps.
- Keep essential content inside a 120px safe area.
- Define shared design tokens in `src/theme.js`.
- Import tokens from `src/theme.js`; do not duplicate hex values in components.
- Create reusable scene and visual components.
- Keep captions enabled in the preview.
- Do not reference assets that do not exist.
- Do not recreate or redraw the OPSWAT logo.

## Validation

Before completing visual changes:

- Run the available lint or test command.
- Check that Remotion Studio starts successfully.
- Check representative frames for overflow and readability.
- Compare the implementation against `OPSWAT_BRAND_GUIDE.md`.