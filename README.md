# Web Development Homework

This repository contains three web development homework projects implemented using HTML, CSS, JavaScript, and Git.

The projects were developed incrementally using atomic commits so that each feature, fix, and security improvement can be reviewed independently.

---

## Homework 1 - Production Portfolio

Location:

`hw1-portfolio/`

### Requirements

- WCAG 2.2 AA accessibility improvements
- Keyboard navigation and focus management
- Strict Content Security Policy
- No inline event handlers
- Performance and Lighthouse optimization

### Main Improvements

- Added semantic landmarks and accessible navigation
- Added a skip link and visible keyboard focus
- Prevented keyboard navigation traps
- Applied a strict Content Security Policy
- Removed unsafe inline JavaScript handlers
- Optimized the page for Lighthouse auditing

---

## Homework 2 - Drum Kit Engine

Location:

`hw2-drum-kit/`

### Requirements

- Contract-first HTML architecture
- Polyphonic audio playback
- Keyboard input with repeat throttling
- FIFO beat recorder with timestamps

### Architecture

The HTML defines the key and sound mappings using:

`data-key`

and:

`data-sound`

JavaScript reads these values dynamically instead of hard-coding key bindings.

### Features

- Drum pads can be triggered using keyboard keys or mouse clicks
- Each sound creates an independent Audio instance for polyphonic playback
- Repeated keydown events are ignored using `event.repeat`
- Beat events are recorded in FIFO order
- Each recorded event stores its relative timestamp
- Recorded beats can be played back with their original timing

---

## Homework 3 - Resilient Landing Page

Location:

`hw3-resilient-landing/`

### Requirements

- Drift-free countdown engine
- UTC ISO 8601 timestamps
- State-machine form
- Double-submit prevention
- Input normalization and safe DOM rendering
- AI failure mode audit

### Countdown

The countdown uses a fixed UTC ISO 8601 target timestamp.

Instead of decrementing a stored counter, the remaining duration is recalculated using the current clock:

`remaining = targetTime - Date.now()`

This prevents accumulated timer drift.

### Form State Machine

The form uses four explicit states:

`Idle -> Submitting -> Success/Error`

The UI is rendered according to the current state.

### Form Security

- Duplicate submissions are blocked while the form is submitting
- The submit button is disabled during submission
- Input is normalized using `trim()`
- User-controlled content is not rendered using unsafe `innerHTML`
- DOM messages use `textContent`

### AI Failure Audit

The file:

`hw3-resilient-landing/AI_FAILURE_AUDIT.md`

documents three AI-related failure modes discovered during implementation and review.

---

## Development Approach

Each homework was implemented incrementally.

The Git history contains separate commits for contracts, features, bug fixes, security improvements, and documentation instead of combining the entire implementation into a single commit.