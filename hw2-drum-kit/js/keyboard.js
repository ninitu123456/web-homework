import { playSound } from './audio-engine.js';

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
});

document.querySelectorAll('.drum-pad').forEach((pad) => {

    pad.addEventListener('click', () => {

        const soundPath = pad.dataset.sound;

        playSound(soundPath);

    });

});