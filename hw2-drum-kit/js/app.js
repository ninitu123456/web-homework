import {
    startRecording,
    stopRecording,
    getRecording
} from './recorder.js';

import { playSound } from './audio-engine.js';


const recordButton =
    document.querySelector('#record-button');

const stopButton =
    document.querySelector('#stop-button');

const playButton =
    document.querySelector('#play-button');


recordButton.addEventListener('click', () => {
    startRecording();

    console.log('Recording started');
});


stopButton.addEventListener('click', () => {
    const events = stopRecording();

    console.log('Recording stopped:', events);
});


playButton.addEventListener('click', () => {
    const events = getRecording();

    events.forEach((event) => {

        setTimeout(() => {

            const pad = document.querySelector(
                `.drum-pad[data-key="${event.key}"]`
            );

            if (!pad) {
                return;
            }

            playSound(pad.dataset.sound);

        }, event.timestamp);

    });
});