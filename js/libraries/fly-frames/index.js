import template from './template.js';

export default function flyFrame(iframeID, options) {
    const params =  {
        markupIDs: [],
        scriptIDs: [],
        styleIDs: [],
        ...options
    };

    const postMessageScript = `
        window.shareHeight = function shareHeight() {
            const message = {
                height: document.body.scrollHeight,
                iframeID: '${iframeID}'
            };
            window.parent.postMessage(message, "*");
        }

        window.onload = window.shareHeight;
    `;

    const templateConfig = {
        css: params.styleIDs.reduce(concatText, ''),
        js: params.scriptIDs.reduce(concatText, postMessageScript),
        html: params.markupIDs.reduce(concatHtml, ''),
    }

    document.getElementById(iframeID).src = template(templateConfig);
}

function concatText(memo, id) {
    const content = document.getElementById(id);
    if(content) {
        memo += content.innerText;
    }
    return memo;
}

function concatHtml(memo, id) {
    const content = document.getElementById(id);
    if(content) {
        memo += content.innerHTML;
    }
    return memo;
}

/* Event Listener for post message */

window.addEventListener('message', receiveMessage, false);

function receiveMessage({data}){
    const iframe = document.getElementById(data.iframeID);
    if(iframe) {
        iframe.style.height = `${data.height + 50}px`;
        iframe.style.maxHeight = '75vh';
    }
}

