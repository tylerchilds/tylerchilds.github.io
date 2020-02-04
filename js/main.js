import fetchAndRender from './apis/github/readmes.js';
import flyFrame from './libraries/fly-frames/index.js';

main();

function main() {
    // Initialize Readmes where requested
    fetchAndRender();

    processQueues(window.tychi.queues);
}

function processQueues(queues) {

    queues.flyFrames.map(args => {
        flyFrame.apply(null, args);
    });
}
