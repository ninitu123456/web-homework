# Task Decomposition

This document describes the implementation milestones used for the homework projects.

Each milestone was developed and reviewed independently before moving to the next task.

---

# Homework 1 - Production Portfolio

## M1 - WCAG 2.2 AA Audit

Tasks:

- Review semantic page structure
- Add appropriate landmarks
- Add accessible navigation labels
- Add a skip link
- Verify sufficient contrast
- Add visible keyboard focus styles

Required commit:

`fix(a11y): contrast & landmarks`

---

## M2 - Focus Trap Audit

Tasks:

- Verify keyboard navigation using Tab and Shift+Tab
- Ensure interactive elements remain reachable
- Support Escape for closing navigation
- Restore focus to the menu trigger
- Prevent keyboard navigation traps

Required commit:

`fix(nav): keyboard trap prevention`

---

## M3 - Strict Content Security Policy

Tasks:

- Add a strict Content Security Policy
- Keep JavaScript in external files
- Use `addEventListener`
- Remove inline event handlers
- Verify that no `onclick` handlers exist

Commit:

`security: enforce strict CSP`

---

## M4 - Lighthouse Performance Audit

Tasks:

- Run Lighthouse audit
- Review performance issues
- Optimize assets
- Verify metadata and page structure
- Re-run Lighthouse after optimization

Required commit:

`perf: optimize assets`

---

# Homework 2 - Drum Kit Engine

## Step 1 - HTML Sound Contract

Tasks:

- Define drum pads in HTML
- Add `data-key` mappings
- Add `data-sound` mappings
- Keep keyboard mappings outside JavaScript

Commit:

`feat(contract): define HTML sound contract`

---

## Step 2 - Polyphonic Audio Engine

Tasks:

- Create an independent audio engine
- Create a new Audio instance for every trigger
- Allow multiple sounds to overlap

Commit:

`feat(audio): implement polyphonic playback engine`

---

## Step 3 - Keyboard Input

Tasks:

- Listen for keyboard input
- Resolve key bindings through the HTML contract
- Ignore repeated keydown events using `event.repeat`
- Support drum-pad mouse interaction

Commit:

`feat(input): add keydown listener with repeat throttling`

---

## Step 4 - FIFO Beat Recorder

Tasks:

- Record beat events in insertion order
- Store relative timestamps
- Start and stop recording
- Replay recorded events using their timestamps

Commit:

`feat(recorder): implement FIFO beat recorder`

---

# Homework 3 - Resilient Landing Page

## Slice 1 - Drift-Free Countdown Engine

Tasks:

- Define the target using a UTC ISO 8601 timestamp
- Read the target from the HTML contract
- Calculate remaining time using the current clock
- Avoid decrement-based countdown logic
- Prevent accumulated timer drift

Commits:

`feat(countdown): create UTC countdown contract`

`fix(countdown): eliminate timer drift`

---

## Slice 2 - State-Machine Form

States:

`Idle -> Submitting -> Success/Error`

Tasks:

- Define one explicit form state
- Render the UI according to the current state
- Transition to Submitting during an asynchronous request
- Transition to Success when the request resolves
- Transition to Error when the request fails

Commit:

`feat(form): implement form state machine`

---

## Slice 3 - Form Security

Tasks:

- Prevent duplicate submissions
- Block submissions while state is `submitting`
- Disable the submit button during submission
- Normalize input using `trim()`
- Avoid unsafe `innerHTML`
- Render DOM messages using `textContent`

Commit:

`security(form): prevent double submit and sanitize input`

---

## AI Failure Mode Audit

File:

`hw3-resilient-landing/AI_FAILURE_AUDIT.md`

The audit documents three reviewed failure modes:

1. Countdown timer drift
2. Duplicate form submission
3. Unsafe rendering of user-controlled input

Each defect contains:

- Defect Description
- Diagnostic Method
- Refactored Solution

Commit:

`docs(audit): document AI failure modes`