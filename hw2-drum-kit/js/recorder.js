let events = [];
let isRecording = false;
let startTime = 0;


export function startRecording() {
    events = [];
    isRecording = true;
    startTime = performance.now();
}


export function recordEvent(key) {
    if (!isRecording) {
        return;
    }

    events.push({
        key: key,
        timestamp: performance.now() - startTime
    });
}


export function stopRecording() {
    isRecording = false;

    return [...events];
}


export function getRecording() {
    return [...events];
}