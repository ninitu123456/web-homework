import { playSound } from './audio-engine.js';
import { recordEvent } from './recorder.js';


document.addEventListener('keydown', (event) => {

    if (event.repeat) {
        return;
    }

    const key = event.key.toLowerCase();

    const pad = document.querySelector(
        `.drum-pad[data-key="${key}"]`
    );

    if (!pad) {
        return;
    }

    const soundPath = pad.dataset.sound;

    playSound(soundPath);
    recordEvent(key);
});


document.querySelectorAll('.drum-pad').forEach((pad) => {

    pad.addEventListener('click', () => {

        const soundPath = pad.dataset.sound;
        const key = pad.dataset.key;

        playSound(soundPath);
        recordEvent(key);

    });

});