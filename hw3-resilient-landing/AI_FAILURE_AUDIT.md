# AI Failure Mode Audit

## Defect 1 - Countdown Timer Drift

### Defect Description
The initial countdown approach relied on decrementing a stored counter on each timer callback. This assumes that timer callbacks execute at exact intervals. Delays in the JavaScript event loop can therefore accumulate and cause the displayed countdown to drift from the real target time.

### Diagnostic Method
The timer logic was reviewed using Git diff inspection and DevTools timing behavior. The implementation was identified as depending on callback frequency instead of recalculating from the actual clock.

### Refactored Solution
The countdown was refactored to calculate the remaining duration from the fixed UTC target timestamp and `Date.now()` on every update:

`remaining = targetTime - Date.now()`

The interval is now only responsible for refreshing the UI, so delayed callbacks do not accumulate timing error.


## Defect 2

### Defect Description
To be documented during implementation.

### Diagnostic Method
To be documented during review.

### Refactored Solution
To be documented after verification.


## Defect 3

### Defect Description
To be documented during implementation.

### Diagnostic Method
To be documented during review.

### Refactored Solution
To be documented after verification.