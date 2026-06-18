/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Module-level audibility setting toggled in UI
let soundEnabled = false;

try {
  const stored = localStorage.getItem('whiskerville-sound-enabled');
  if (stored === 'true') {
    soundEnabled = true;
  }
} catch (e) {
  // Avoid errors in rare sandbox environments
}

export const isSoundEnabled = (): boolean => soundEnabled;

export const setSoundEnabled = (enabled: boolean): void => {
  soundEnabled = enabled;
  try {
    localStorage.setItem('whiskerville-sound-enabled', String(enabled));
  } catch (e) {
    // Avoid store errors
  }
};

/**
 * Creates a clean oscillator voice to avoid clicks and pops.
 */
function playTone(freqs: number[], type: OscillatorType, duration: number, delay = 0, volume = 0.15) {
  if (!soundEnabled) return;

  const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
  if (!AudioContextClass) return;

  try {
    const ctx = new AudioContextClass();
    
    freqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime + delay * idx);

      // Soft attack, linear fade-out to prevent popping
      gainNode.gain.setValueAtTime(0, ctx.currentTime + delay * idx);
      gainNode.gain.linearRampToValueAtTime(volume, ctx.currentTime + delay * idx + 0.02);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + delay * idx + duration);

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.start(ctx.currentTime + delay * idx);
      osc.stop(ctx.currentTime + delay * idx + duration + 0.1);
    });
  } catch (e) {
    console.warn("Audio Context blocked or failed:", e);
  }
}

// Crisp, positive chime (Welcome Sound & cart additions)
export const playDing = () => {
  // FNF melody or pure pure crystalline sine chord (C6, E6, G6)
  playTone([1046.50, 1318.51, 1567.98], 'sine', 0.45, 0.06, 0.1);
};

// Squishy pop (button presses)
export const playPop = () => {
  // Low round triangle pop
  playTone([180], 'triangle', 0.12, 0, 0.25);
};

// Magical spark (Add-to-cart confirmation)
export const playSparkle = () => {
  // Rising sweep
  playTone([659.25, 783.99, 987.77, 1318.51], 'sine', 0.3, 0.04, 0.08);
};
