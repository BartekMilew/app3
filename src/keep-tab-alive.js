function keepTabAlive() {
    let audioCtx = undefined;
    let oscillator = undefined;
    let titleInterval = undefined;

    const originalTitle = document.title;

    return {
        createTabContext() {
            clearInterval(titleInterval);

            titleInterval = setInterval(() => {
                document.title = document.title === originalTitle ? `${originalTitle} ` : originalTitle;
            }, 1000);

            if (!audioCtx) {
                audioCtx = new window.AudioContext();
                oscillator = audioCtx.createOscillator();
                oscillator.connect(audioCtx.destination);
                oscillator.frequency.value = 0.0001;

                oscillator.start();
            }
        },
        clearTabContext() {
            if (oscillator) {
                oscillator.stop();
                oscillator.disconnect();
                oscillator = undefined;
            }

            if (audioCtx) {
                audioCtx.close();
                audioCtx = undefined;
            }

            document.title = originalTitle;
        }
    }
}

export default keepTabAlive();
