# Prompt 1 — Inspect and plan

You are working inside an existing Remotion project for an OPSWAT-branded [cybersecurity awareness] video.

# Objective

Plan a polished 90-second motion-graphic video explaining [how phishing attacks work].

Audience: Office employees
Style: Clean cybersecurity infographic
Format: 1920 × 1080
Frame rate: 30 fps
Language: JavaScript and JSX only
Composition ID: `PhishingVideo`

# Required references and skills

Before doing anything:

1. Read `AGENTS.md` completely.
2. Read `OPSWAT_BRAND_GUIDE.md` completely.
3. Inspect the skills under `.agents/skills`.
4. Read `.agents/skills/remotion-best-practices/SKILL.md`.
5. Read these task-specific skills when available:

   * `remotion-create`
   * `remotion-markup`
   * `remotion-captions`
   * `remotion-multimedia`
   * `remotion-studio`
   * `remotion-render`
   * `remotion-docs` when API verification is necessary

Report which instruction and skill files you loaded.

# Narration

Use this approved narration. Do not rewrite it without proposing the change first.

[PASTE THE APPROVED NARRATION HERE]

# Storyboard

Use this approved storyboard.

[PASTE THE APPROVED STORYBOARD HERE]

# Planning task

Perform a read-only inspection of the project.

Do not create, delete, rename, or modify files yet.

Inspect:

* `package.json`
* Existing Remotion configuration
* Current entry point
* Registered compositions
* Existing source structure
* Installed dependencies
* Existing public assets
* Available logo files
* Available fonts
* Narration, music, and sound-effect files
* Existing icons and illustrations
* Existing lint, test, preview, build, and render commands

Then prepare an implementation plan containing:

1. Selected Remotion skills and why each applies
2. Proposed composition configuration
3. Scene-to-frame timing table
4. Proposed source-file structure
5. Reusable component list
6. Visual treatment for every scene
7. Scene transition plan
8. Caption implementation plan
9. Audio integration plan
10. OPSWAT token and typography plan
11. Asset inventory
12. Missing assets and proposed placeholder behavior
13. Validation procedure
14. Rendering procedure
15. Risks, assumptions, or conflicts

# Timing requirements

Convert the storyboard timing to frames at 30 fps.

The target is approximately:

* 90 seconds
* 2,700 frames
* 1920 × 1080
* 30 fps

If the storyboard totals something different, report the discrepancy and recommend an adjustment. Do not silently change the approved narration or storyboard.

# Brand requirements

Follow `OPSWAT_BRAND_GUIDE.md`.

In particular:

* Centralize approved colors in `src/theme.js`
* Use Simplon only when licensed files exist
* Otherwise use Roboto as the approved fallback
* Use only official logo files
* Do not fabricate or recreate the logo
* Use accent colors sparingly
* Avoid unofficial opacity-based tints
* Maintain WCAG 2.1 AA contrast
* Avoid hacker clichés and excessive glitch effects
* Keep essential content inside a 120px safe area
* Use calm, restrained, instructional motion

# Technical requirements

* JavaScript and JSX only
* No `.ts` or `.tsx` files
* No TypeScript syntax
* Reusable React components
* Deterministic animation
* No runtime network dependency
* No unnecessary dependencies
* No references to missing media
* No modifications to installed skills

# Stopping point

Stop after presenting the complete plan.

Do not implement anything.

End with:

`Planning complete. Waiting for implementation approval.`


# Prompt 2 — Implement, validate and render

The plan is approved. Continue with implementation.

Use the narration, storyboard, project inspection, brand requirements, selected skills, scene timing, and file structure from the approved plan.

Before editing, briefly restate:

* The approved composition configuration
* The selected Remotion skills
* The total scene count
* The total frame count
* Any placeholder assets that will be necessary

Then complete the following phases.

# Phase 1: Project foundation

Create or update the project foundation according to the approved plan.

Requirements:

* Use JavaScript and JSX only.
* Do not create `.ts` or `.tsx` files.
* Do not use TypeScript syntax.
* Preserve working project configuration.
* Adapt to existing entry points instead of creating duplicates.
* Register the composition with ID [`PhishingVideo`].
* Use 1920 × 1080 at 30 fps.
* Use the approved total frame count.

Create or update `src/theme.js` with:

* OPSWAT colors
* Typography stacks
* Safe-area values
* Shared spacing
* Shared radii and surfaces
* Project motion-duration values

Clearly distinguish official OPSWAT tokens from project-specific design values.

# Phase 2: Components and scenes

Implement reusable components and all approved storyboard scenes.

Likely components include:

* `SceneLayout`
* `AnimatedTitle`
* `EmailCard`
* `BrowserWindow`
* `LoginForm`
* `Cursor`
* `StatusBadge`
* `WarningIcon`
* `SecurityShield`
* `DataPath`
* `ProtectionChecklist`
* `CaptionOverlay`
* `LogoPlaceholder`

Only create components that the approved plan requires.

For each scene:

* Follow its approved frame range.
* Match the narration meaning.
* Keep one primary instructional idea.
* Use concise on-screen text.
* Keep important content inside the safe area.
* Keep text visible long enough to read.
* Connect transitions logically.
* Use deterministic animation.
* Clamp interpolation where necessary.
* Avoid unnecessary animation overshoot.
* Avoid flashing, camera shake, and excessive bounce.
* Avoid decorative motion that does not support learning.
* Every component need to be editable on remotion studio (when running with npm run dev).
* Every component that has animation need to be editatble on remotion video by using keyframe linked to that animation.

Use normal data movement in blue or teal. Transition to orange when activity becomes suspicious and red only for confirmed compromise. Pair every status color with an icon, label, or shape.

# Phase 3: Brand implementation

Follow `OPSWAT_BRAND_GUIDE.md` throughout.

Requirements:

* Import color tokens from `src/theme.js`.
* Do not repeat hardcoded brand hex values in components.
* Use Simplon only if official licensed files are present.
* Otherwise use Roboto.
* Use official OPSWAT logo files only.
* If no logo file exists, use a clearly labeled placeholder.
* Do not download, draw, or fabricate the logo.
* Do not alter the logo’s internal elements.
* Keep accent usage restrained.
* Maintain readable contrast.
* Do not create unofficial tints using opacity.

# Phase 4: Captions

Use the `remotion-captions` skill.

Add captions based on the approved narration.

Requirements:

* Approximately 34–40px at 1080p
* No more than two lines
* High-contrast background
* Inside the safe area
* Synchronized with narration sections
* Comfortable reading duration
* Enabled in the preview
* Easy to replace with word-level timestamps later

If precise audio timestamps do not exist, use documented phrase-level timings based on the approved storyboard.

# Phase 5: Audio

Use the `remotion-multimedia` skill.

Check files before referencing them.

Potential paths:

* `public/audio/narration.wav`
* `public/audio/background-music.mp3`
* `public/audio/effects/`

If narration exists:

* Include it.
* Synchronize the scenes to the actual audio.
* Reconcile its duration with the approved timing.

If narration does not exist:

* Keep the video functional and previewable without it.
* Do not create a broken reference.
* Report the missing file as a manual follow-up.

If music or sound effects exist:

* Use them subtly.
* Keep music substantially below narration.
* Centralize paths and volume values.

Do not fabricate media files.

# Phase 6: Preview and validation

Use the `remotion-studio` skill.

Start the project with its existing development command and inspect representative frames:

* Opening frame
* Middle of every scene
* Every transition
* Frames containing the most text
* Credential-theft reveal
* Protection checklist
* Final frame

Check and fix:

* Runtime errors
* Missing assets
* Text overflow
* Safe-area violations
* Poor contrast
* Caption overlap
* Abrupt transitions
* Excessive density
* Animation overshoot
* Blank frames
* Incorrect duration
* Hardcoded colors
* TypeScript files or syntax
* Non-deterministic behavior

Run the available lint, test, and build commands.

Do not claim that a command passed unless it was actually executed successfully.

# Phase 7: Render

Use the `remotion-render` skill.

After validation:

1. Confirm composition ID, dimensions, fps, frame count, and duration.

2. Render an H.264 MP4.

3. Use this output path:

   `out/opswat-phishing-awareness.mp4`

4. Do not overwrite an existing final video without reporting it.

5. If rendering fails, preserve the working project and report the exact error and continuation command.

# Completion report

At completion, report:

1. Files created
2. Files modified
3. Skills used
4. Composition settings
5. Scene and frame count
6. Validation commands and results
7. Render command
8. Render output path
9. Missing or placeholder assets
10. Manual follow-up actions
11. Deviations from the approved plan, narration, storyboard, or brand guide

Do not make unrelated repository changes.
