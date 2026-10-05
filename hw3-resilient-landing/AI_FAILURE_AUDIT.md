# AI Failure Mode Audit

## Defect 1 - Countdown Timer Drift

### Defect Description
The initial countdown approach relied on decrementing a stored counter on each timer callback. This assumes that timer callbacks execute at exact intervals. Delays in the JavaScript event loop can therefore accumulate and cause the displayed countdown to drift from the real target time.

### Diagnostic Method
The timer logic was reviewed using Git diff inspection and DevTools timing behavior. The implementation was identified as depending on callback frequency instead of recalculating from the actual clock.

### Refactored Solution
The countdown was refactored to calculate the remaining duration from the fixed UTC target timestamp and `Date.now()` on every update. The interval is only responsible for refreshing the UI.


## Defect 2 - Duplicate Form Submission

### Defect Description
The initial form state-machine implementation allowed the submit handler to run again while an asynchronous submission was already in progress. This could create multiple concurrent submissions.

### Diagnostic Method
The defect was identified during manual testing by attempting repeated submissions while the form was in the `submitting` state and reviewing the submission logic.

### Refactored Solution
A state guard prevents submissions while the current state is `submitting`. The submit button is also disabled while the request is in progress.


## Defect 3 - Unsafe Rendering of User-Controlled Input

### Defect Description
Rendering user-controlled input through `innerHTML` would allow the browser to interpret the value as markup and could create an XSS vulnerability.

### Diagnostic Method
The DOM rendering path was reviewed for unsafe sinks such as `innerHTML`, and malicious HTML input was considered during the security review.

### Refactored Solution
Input is normalized with `trim()`, and user-controlled values are never rendered through `innerHTML`. DOM messages use `textContent`, so values are treated as text rather than executable markup.